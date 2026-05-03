import React from 'react';
import Layout from '../../components/Layout';
import AuthGuard from '../../components/AuthGuard';

const DashboardPage = () => {
  return (
    <AuthGuard>
      <Layout>
        <div className="flex">
          <aside className="w-64 bg-slate-900 text-white p-4">
            <nav>
              <ul>
                <li className="mb-4"><a href="#" className="hover:text-indigo-600">Dashboard</a></li>
                <li className="mb-4"><a href="#" className="hover:text-indigo-600">Recipes</a></li>
                <li className="mb-4"><a href="#" className="hover:text-indigo-600">Meal Plans</a></li>
                <li className="mb-4"><a href="#" className="hover:text-indigo-600">Grocery List</a></li>
              </ul>
            </nav>
          </aside>
          <main className="flex-1 p-8">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            <p>Welcome to your personalized dashboard.</p>
          </main>
        </div>
      </Layout>
    </AuthGuard>
  );
};

export default DashboardPage;
