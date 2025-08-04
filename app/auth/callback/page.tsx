// app/auth/callback/page.tsx
import { Suspense } from 'react';
import AuthCallbackPage from '@/screens/AuthCallbackPage';

export const dynamic = 'force-dynamic'; 

export default function Page() {
  return (
    <Suspense fallback={<div className="text-white">Loading...</div>}>
      <AuthCallbackPage />
    </Suspense>
  );
}
