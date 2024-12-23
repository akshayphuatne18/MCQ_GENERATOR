import { Link } from 'react-router-dom';
import { FileText, Brain, Users, BookOpen, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ProductFeatures } from '@/components/product-features';
import { MaintenanceBanner } from '@/components/maintenance-banner';

export function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center space-y-6">
        <div className="animate-in slide-in-from-bottom-8 duration-700">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
            Transform PDFs into Interactive Learning
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed dark:text-gray-400 mt-4">
            Generate intelligent questions from your study materials using advanced AI technology.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-in slide-in-from-bottom-12 duration-1000">
          <Link to="/generate?mode=quiz">
            <Button size="lg" className="w-full sm:w-auto group">
              <Target className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              Generate Quiz
              <span className="ml-2 text-xs bg-primary-foreground/10 px-2 py-1 rounded">
                No Answers
              </span>
            </Button>
          </Link>
          <Link to="/generate?mode=study">
            <Button variant="outline" size="lg" className="w-full sm:w-auto group">
              <BookOpen className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              Study Mode
              <span className="ml-2 text-xs bg-primary/10 px-2 py-1 rounded">
                With Answers
              </span>
            </Button>
          </Link>
        </div>
      </section>

      <ProductFeatures />

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <CardContent className="p-6 space-y-2">
            <Brain className="h-12 w-12 mb-4 transition-transform group-hover:scale-110 duration-300" />
            <h3 className="text-xl font-bold">AI-Powered</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Our advanced AI analyzes your PDFs and generates relevant MCQs automatically.
            </p>
          </CardContent>
        </Card>
        <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <CardContent className="p-6 space-y-2">
            <FileText className="h-12 w-12 mb-4 transition-transform group-hover:scale-110 duration-300" />
            <h3 className="text-xl font-bold">PDF Processing</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Simply upload your PDF and get high-quality questions within minutes.
            </p>
          </CardContent>
        </Card>
        <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <CardContent className="p-6 space-y-2">
            <Users className="h-12 w-12 mb-4 transition-transform group-hover:scale-110 duration-300" />
            <h3 className="text-xl font-bold">For Everyone</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Perfect for both educators creating assessments and students practicing concepts.
            </p>
          </CardContent>
        </Card>
      </section>

      <MaintenanceBanner />
    </div>
  );
}