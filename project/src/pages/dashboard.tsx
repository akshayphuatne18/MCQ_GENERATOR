import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { FileText, Clock, CheckCircle, Trophy } from 'lucide-react';
import { StreakCard } from '@/components/streak-card';

export function Dashboard() {
  const recentFiles = [
    {
      id: 1,
      name: 'Chapter 5 - Neural Networks.pdf',
      date: '2024-03-15',
      questions: 25,
      status: 'Completed',
    },
    {
      id: 2,
      name: 'Introduction to AI.pdf',
      date: '2024-03-14',
      questions: 30,
      status: 'Processing',
    },
    {
      id: 3,
      name: 'Machine Learning Basics.pdf',
      date: '2024-03-13',
      questions: 20,
      status: 'Completed',
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-4">
        <div className="rounded-full bg-primary/10 p-4">
          <Trophy className="h-8 w-8" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">Your Progress</h1>
          <p className="text-muted-foreground">
            Track your learning journey and achievements
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card className="group hover:shadow-lg transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total PDFs</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground transition-transform group-hover:scale-110" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold animate-in slide-in-from-left">15</div>
            <p className="text-xs text-muted-foreground">+2 from last week</p>
          </CardContent>
        </Card>
        <Card className="group hover:shadow-lg transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Questions Generated</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground transition-transform group-hover:scale-110" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold animate-in slide-in-from-left-2">324</div>
            <p className="text-xs text-muted-foreground">+45 from last week</p>
          </CardContent>
        </Card>
        <StreakCard />
      </div>

      <Card className="hover:shadow-lg transition-all duration-300">
        <CardHeader>
          <CardTitle>Recent Files</CardTitle>
          <CardDescription>
            Your recently processed PDF files and their status.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>File Name</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Questions</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentFiles.map((file, index) => (
                <TableRow 
                  key={file.id}
                  className="animate-in slide-in-from-left duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <TableCell>{file.name}</TableCell>
                  <TableCell>{file.date}</TableCell>
                  <TableCell>{file.questions}</TableCell>
                  <TableCell>{file.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}