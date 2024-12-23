# Install necessary libraries
!pip install transformers datasets accelerate kagglehub


# Import required libraries
import kagglehub
import json
from datasets import Dataset

# Download SQuAD dataset
path = kagglehub.dataset_download("stanfordu/stanford-question-answering-dataset")
print("Path to dataset files:", path)

# Load the SQuAD JSON files
with open(f"{path}/train-v1.1.json", "r") as f:
    squad_train = json.load(f)

with open(f"{path}/dev-v1.1.json", "r") as f:
    squad_val = json.load(f)

# Convert SQuAD to a Hugging Face-compatible dataset
def squad_to_dataset(squad_data):
    contexts = []
    questions = []
    answers = []
    for article in squad_data["data"]:
        for paragraph in article["paragraphs"]:
            context = paragraph["context"]
            for qa in paragraph["qas"]:
                question = qa["question"]
                if qa["answers"]:
                    answer = qa["answers"][0]  # Use the first answer
                    contexts.append(context)
                    questions.append(question)
                    answers.append({"text": [answer["text"]], "answer_start": [answer["answer_start"]]})
    return Dataset.from_dict({"context": contexts, "question": questions, "answers": answers})

train_dataset = squad_to_dataset(squad_train)
val_dataset = squad_to_dataset(squad_val)



from transformers import AutoTokenizer, AutoModelForSeq2SeqLM

# Choose the model
model_name = "google/flan-t5-small"

# Load the tokenizer
tokenizer = AutoTokenizer.from_pretrained(model_name)



# Define the preprocessing function
def preprocess_data(example):
    # Combine the question and context as input
    inputs = f"question: {example['question']} context: {example['context']}"

    # Extract the target (answer)
    if example["answers"] and isinstance(example["answers"], dict):
        targets = example["answers"]["text"][0] if example["answers"]["text"] else ""
    elif example["answers"] and isinstance(example["answers"], list):
        targets = example["answers"][0]["text"] if example["answers"][0]["text"] else ""
    else:
        targets = ""

    # Tokenize inputs and targets with proper padding and truncation
    model_inputs = tokenizer(inputs, max_length=512, truncation=True, padding="max_length")
    labels = tokenizer(targets, max_length=128, truncation=True, padding="max_length")

    # Add labels to the inputs
    model_inputs["labels"] = labels["input_ids"]
    return model_inputs

# Map the preprocessing function to the datasets
tokenized_train = train_dataset.map(preprocess_data, batched=True, remove_columns=train_dataset.column_names)
tokenized_val = val_dataset.map(preprocess_data, batched=True, remove_columns=val_dataset.column_names)



from transformers import Seq2SeqTrainer, Seq2SeqTrainingArguments
from transformers import DataCollatorForSeq2Seq

# Load the model
model = AutoModelForSeq2SeqLM.from_pretrained(model_name)

# Define the data collator
data_collator = DataCollatorForSeq2Seq(tokenizer, model=model)

# Define training arguments
training_args = Seq2SeqTrainingArguments(
    output_dir="./results",               # Output directory
    evaluation_strategy="epoch",         # Evaluate at the end of each epoch
    learning_rate=2e-5,                  # Learning rate
    per_device_train_batch_size=8,       # Training batch size
    per_device_eval_batch_size=8,        # Evaluation batch size
    num_train_epochs=3,                  # Number of epochs
    weight_decay=0.01,                   # Weight decay
    save_total_limit=2,                  # Save only the last 2 checkpoints
    predict_with_generate=True,          # Enable text generation during evaluation
    fp16=True,                           # Use mixed precision training
    logging_dir="./logs",                # Logging directory
    logging_steps=10,                    # Log every 10 steps
)


# Initialize the Trainer
trainer = Seq2SeqTrainer(
    model=model,
    args=training_args,
    train_dataset=tokenized_train,
    eval_dataset=tokenized_val,
    tokenizer=tokenizer,
    data_collator=data_collator,
)

# Train the model
trainer.train()

# Save the fine-tuned model
model.save_pretrained("./fine_tuned_flan_t5")
tokenizer.save_pretrained("./fine_tuned_flan_t5")

print("Fine-tuned model saved to ./fine_tuned_flan_t5")
