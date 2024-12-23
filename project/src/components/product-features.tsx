import { Lightbulb, BookOpen, Target, Sparkles } from 'lucide-react';

export function ProductFeatures() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12">
      <div className="space-y-4">
        <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center">
          <Lightbulb className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-semibold">Smart Question Generation</h3>
        <p className="text-muted-foreground">
          Our AI analyzes PDFs to create relevant and challenging questions, ensuring comprehensive understanding of the material.
        </p>
      </div>
      <div className="space-y-4">
        <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center">
          <BookOpen className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-semibold">Study Mode</h3>
        <p className="text-muted-foreground">
          Get detailed explanations with each answer to enhance learning and retention of concepts.
        </p>
      </div>
      <div className="space-y-4">
        <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center">
          <Target className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-semibold">Quiz Mode</h3>
        <p className="text-muted-foreground">
          Test your knowledge with timed quizzes and track your progress over time.
        </p>
      </div>
      <div className="space-y-4">
        <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center">
          <Sparkles className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-semibold">Daily Challenges</h3>
        <p className="text-muted-foreground">
          Stay motivated with daily question sets and maintain your learning streak.
        </p>
      </div>
    </div>
  );
}