import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="font-inter min-h-screen flex flex-col">
      <header className="bg-slate-900 text-white p-4">
        <div className="container mx-auto">
          <h1 className="text-xl font-bold">CulinaryHub AI</h1>
        </div>
      </header>
      <main className="flex-1">
        {children}
      </main>
      <footer className="bg-slate-900 text-white p-4">
        <div className="container mx-auto">
          <p>&copy; 2023 CulinaryHub AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
