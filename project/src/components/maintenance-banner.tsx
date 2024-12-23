import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export function MaintenanceBanner() {
  return (
    <Alert variant="default" className="fixed bottom-4 right-4 w-auto max-w-md animate-in slide-in-from-right-1/2">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Under Maintenance</AlertTitle>
      <AlertDescription>
        We're adding awesome new features! Some services might be temporarily unavailable.
      </AlertDescription>
    </Alert>
  );
}