import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Logo } from '@/components/logo';
import { Separator } from '@/components/ui/separator';

export function Footer() {
  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container px-4 py-8 md:py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-muted-foreground">
              Transform your learning materials into engaging questions with AI-powered technology.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/features" className="hover:text-foreground">Features</Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-foreground">Pricing</Link>
              </li>
              <li>
                <Link to="/generate" className="hover:text-foreground">Generate Questions</Link>
              </li>
              <li>
                <Link to="/dashboard" className="hover:text-foreground">Dashboard</Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/docs" className="hover:text-foreground">Documentation</Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-foreground">Blog</Link>
              </li>
              <li>
                <Link to="/help" className="hover:text-foreground">Help Center</Link>
              </li>
              <li>
                <Link to="/api" className="hover:text-foreground">API</Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Stay Updated</h4>
            <p className="text-sm text-muted-foreground">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="flex space-x-2">
              <Input placeholder="Enter your email" type="email" className="max-w-[200px]" />
              <Button>
                <Mail className="mr-2 h-4 w-4" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-muted-foreground">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
            <div className="flex space-x-4">
              <Link to="/privacy" className="hover:text-foreground">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-foreground">Terms of Service</Link>
              <Link to="/cookies" className="hover:text-foreground">Cookie Policy</Link>
            </div>
            <span className="text-xs px-2 py-1 rounded bg-primary/5 hover:bg-primary/10 transition-colors">
              A 4Randos Product
            </span>
          </div>
          <p>© {new Date().getFullYear()} PrashnaValley. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}