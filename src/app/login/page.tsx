import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import Button from '../../components/ui/Button';

const LoginPage = () => {
  const { signInWithGoogle } = useAuth();

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
      <div className="bg-white text-slate-900 p-8 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <Button onClick={signInWithGoogle} className="bg-indigo-600 text-white">Sign in with Google</Button>
      </div>
    </div>
  );
};

export default LoginPage;
