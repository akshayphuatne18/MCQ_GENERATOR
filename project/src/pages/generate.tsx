import { useState } from 'react';
import { Upload, FileText, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

export function Generate() {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile?.type === 'application/pdf') {
      setFile(droppedFile);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleGenerate = () => {
    setIsProcessing(true);
    // Simulate processing
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 10;
      setProgress(currentProgress);
      if (currentProgress >= 100) {
        clearInterval(interval);
        setIsProcessing(false);
      }
    }, 500);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold">Generate Questions</h1>
        <p className="text-muted-foreground">
          Upload your PDF and we'll generate multiple-choice questions using AI
        </p>
      </div>

      <Card>
        <CardContent className="p-6">
          <div
            className={cn(
              'border-2 border-dashed rounded-lg p-8 text-center space-y-4',
              isDragging && 'border-primary bg-primary/10',
              file && 'border-green-500 bg-green-500/10'
            )}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            {!file ? (
              <>
                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Upload className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-lg font-medium">
                    Drag and drop your PDF here, or{' '}
                    <Label
                      htmlFor="file-upload"
                      className="text-primary cursor-pointer hover:underline"
                    >
                      browse
                    </Label>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Supports PDF files up to 10MB
                  </p>
                </div>
                <Input
                  id="file-upload"
                  type="file"
                  accept=".pdf"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </>
            ) : (
              <div className="flex items-center justify-center space-x-4">
                <FileText className="h-6 w-6" />
                <span className="font-medium">{file.name}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setFile(null)}
                >
                  Change
                </Button>
              </div>
            )}
          </div>

          {file && (
            <div className="mt-6 space-y-6">
              <div className="space-y-2">
                <Label htmlFor="questions">Number of Questions</Label>
                <Input
                  id="questions"
                  type="number"
                  placeholder="20"
                  min="1"
                  max="100"
                />
              </div>

              {isProcessing ? (
                <div className="space-y-4">
                  <Progress value={progress} />
                  <div className="flex items-center justify-center text-sm text-muted-foreground">
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing your PDF...
                  </div>
                </div>
              ) : (
                <Button className="w-full" onClick={handleGenerate}>
                  Generate Questions
                </Button>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}