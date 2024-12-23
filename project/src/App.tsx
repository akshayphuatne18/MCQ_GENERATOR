import { ThemeProvider } from '@/components/theme-provider';
import { Routes } from '@/components/routes';
import { Toaster } from '@/components/ui/sonner';

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="prashnavalley-theme">
      <Routes />
      <Toaster />
    </ThemeProvider>
  );
}

export default App;