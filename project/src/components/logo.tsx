import { Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={cn('flex items-center space-x-2', className)}>
      <div className="relative">
        <Sparkles className="h-6 w-6 text-primary animate-pulse" />
        <div className="absolute -inset-1 bg-primary/20 rounded-full blur-sm animate-pulse" />
      </div>
      <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
        PrashnaValley
      </span>
    </div>
  );
}