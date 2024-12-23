import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { User, Mail, Building, BookOpen } from 'lucide-react';

export function Profile() {
  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-4">
        <div className="rounded-full bg-primary/10 p-6">
          <User className="h-12 w-12" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">Profile Settings</h1>
          <p className="text-muted-foreground">
            Manage your account settings and preferences
          </p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
          <CardDescription>
            Update your personal details and preferences
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="john@example.com" />
            </div>
          </div>

          <Separator />

          <div className="space-y-2">
            <Label htmlFor="institution">Institution</Label>
            <Input id="institution" placeholder="University Name" />
          </div>

          <div className="space-y-2">
            <Label>Role</Label>
            <div className="grid gap-4 sm:grid-cols-2">
              <Button variant="outline" className="justify-start">
                <BookOpen className="mr-2 h-4 w-4" />
                Professor
              </Button>
              <Button variant="outline" className="justify-start">
                <Building className="mr-2 h-4 w-4" />
                Student
              </Button>
            </div>
          </div>

          <div className="flex justify-end">
            <Button>Save Changes</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Preferences</CardTitle>
          <CardDescription>
            Customize your question generation preferences
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="defaultQuestions">Default Questions per PDF</Label>
            <Input
              id="defaultQuestions"
              type="number"
              placeholder="20"
              min="1"
              max="100"
            />
          </div>
          <div className="flex justify-end">
            <Button>Update Preferences</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}