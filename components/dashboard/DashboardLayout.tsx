'use client';

import React from 'react';
import { Sidebar } from './Sidebar';
import { NotificationIcon } from './NotificationIcon';
import { useAuth } from '@/hooks/useAuth';
import Link from 'next/link';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const { user } = useAuth();

  const getInitials = (firstName?: string, lastName?: string) => {
    if (!firstName && !lastName) return 'U';
    return `${firstName?.[0] || ''}${lastName?.[0] || ''}`.toUpperCase();
  };

  return (
    <div className="min-h-screen bg-black">
      <Sidebar />
      <main className="lg:ml-64">
        {/* Top Bar */}
        <div className="sticky top-0 z-30 border-b border-gray-800/50 backdrop-blur-xl" style={{
          backgroundColor: 'oklch(0.1 0 0 / 0.8)',
        }}>
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex-1">
              {/* Search bar can go here if needed */}
            </div>
            <div className="flex items-center gap-4">
              <NotificationIcon />
              <Link href="/dashboard/profile">
                <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
                  {user?.profileImage ? (
                    <img
                      src={user.profileImage}
                      alt={`${user.firstName} ${user.lastName}`}
                      className="w-10 h-10 rounded-full object-cover border-2"
                      style={{ borderColor: 'oklch(0.7 0.15 180 / 0.5)' }}
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-purple-600 flex items-center justify-center text-white font-semibold text-sm">
                      {getInitials(user?.firstName, user?.lastName)}
                    </div>
                  )}
                </div>
              </Link>
            </div>
          </div>
        </div>
        {children}
      </main>
    </div>
  );
};

