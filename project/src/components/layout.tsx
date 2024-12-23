import { Outlet } from 'react-router-dom';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export function Layout() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="container mx-auto px-4 py-8 flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}