import { BrowserRouter, Routes as RouterRoutes, Route } from 'react-router-dom';
import { Layout } from '@/components/layout';
import { Dashboard } from '@/pages/dashboard';
import { Home } from '@/pages/home';
import { Profile } from '@/pages/profile';
import { Generate } from '@/pages/generate';

export function Routes() {
  return (
    <BrowserRouter>
      <RouterRoutes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="generate" element={<Generate />} />
        </Route>
      </RouterRoutes>
    </BrowserRouter>
  );
}