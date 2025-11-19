'use client';

import React from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Navbar } from '@/components/layout/Navbar';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';

function DashboardContent() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-16">
        <h1 className="text-4xl font-bold text-white mb-8">
          Welcome, {user?.firstName} {user?.lastName}!
        </h1>
        <div className="bg-card-bg border border-border rounded-lg p-8">
          <p className="text-gray-400">Dashboard content coming soon...</p>
        </div>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <DashboardContent />
    </ProtectedRoute>
  );
}

