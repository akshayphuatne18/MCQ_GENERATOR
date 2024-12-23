import { Link } from 'react-router-dom';
import { Home, LayoutDashboard, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { Logo } from '@/components/logo';

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link to="/" className="transition-transform hover:scale-105">
              <Logo />
            </Link>
            
            <div className="flex items-center space-x-2">
              <Link to="/">
                <Button variant="ghost" size="sm" className="group">
                  <Home className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                  Home
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button variant="ghost" size="sm" className="group">
                  <LayoutDashboard className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                  Dashboard
                </Button>
              </Link>
              <Link to="/profile">
                <Button variant="ghost" size="sm" className="group">
                  <User className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                  Profile
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}