import React from 'react';
import Layout from '../components/Layout';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const HomePage = () => {
  return (
    <Layout>
      <section className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Welcome to CulinaryHub AI</h1>
          <p className="text-lg mb-8">Your AI-powered recipe management and meal planning platform.</p>
          <Button href="/dashboard" className="bg-indigo-600 text-white">Get Started</Button>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card title="Smart Recipes" description="AI-curated recipes tailored to your taste." />
            <Card title="Meal Planning" description="Plan your meals with ease and flexibility." />
            <Card title="Grocery Integration" description="Seamlessly integrate with your favorite grocery stores." />
          </div>
        </div>
      </section>
      <section className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Pricing</h2>
          <p className="text-lg mb-8">Choose a plan that suits your needs.</p>
          <Button href="/pricing" className="bg-indigo-600 text-white">View Pricing</Button>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
