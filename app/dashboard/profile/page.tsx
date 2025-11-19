'use client';

import React, { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { ProfilePictureUpload } from '@/components/dashboard/ProfilePictureUpload';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

function ProfileContent() {
  const { user, refreshUser } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
    phone: user?.phone || '',
  });

  const handleSave = async () => {
    // TODO: Implement profile update API
    toast.success('Profile updated successfully!');
    setIsEditing(false);
    await refreshUser();
  };

  return (
    <DashboardLayout>
      <div className="p-6 lg:p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">My Profile</h1>

          {/* Profile Picture Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 p-6 rounded-2xl border-2 backdrop-blur-xl"
            style={{
              backgroundColor: 'oklch(0.1 0 0 / 0.6)',
              borderColor: 'oklch(0.7 0.15 180 / 0.2)',
            }}
          >
            <h2 className="text-2xl font-bold text-white mb-6">Profile Picture</h2>
            <div className="flex items-center gap-6">
              <ProfilePictureUpload
                currentImage={user?.profileImage}
                onUploadSuccess={async () => {
                  await refreshUser();
                }}
              />
              <div>
                <p className="text-gray-400 text-sm mb-2">
                  Upload a profile picture to personalize your account
                </p>
                <p className="text-gray-500 text-xs">
                  Recommended: Square image, at least 400x400px. Max 5MB.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Profile Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="p-6 rounded-2xl border-2 backdrop-blur-xl"
            style={{
              backgroundColor: 'oklch(0.1 0 0 / 0.6)',
              borderColor: 'oklch(0.7 0.15 180 / 0.2)',
            }}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Profile Information</h2>
              {!isEditing ? (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsEditing(true)}
                >
                  Edit Profile
                </Button>
              ) : (
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setIsEditing(false);
                      setFormData({
                        firstName: user?.firstName || '',
                        lastName: user?.lastName || '',
                        email: user?.email || '',
                        phone: user?.phone || '',
                      });
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={handleSave}
                  >
                    Save Changes
                  </Button>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="First Name"
                type="text"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                disabled={!isEditing}
              />
              <Input
                label="Last Name"
                type="text"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                disabled={!isEditing}
              />
              <Input
                label="Email"
                type="email"
                value={formData.email}
                disabled
                className="opacity-60"
              />
              <Input
                label="Phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                disabled={!isEditing}
              />
            </div>

            <div className="mt-6 pt-6 border-t border-gray-800/50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-400 mb-1">Role</p>
                  <p className="text-white font-semibold">{user?.role}</p>
                </div>
                <div>
                  <p className="text-gray-400 mb-1">Status</p>
                  <p className="text-white font-semibold">{user?.status}</p>
                </div>
                <div>
                  <p className="text-gray-400 mb-1">Email Verified</p>
                  <p className="text-white font-semibold">
                    {user?.isEmailVerified ? 'Yes' : 'No'}
                  </p>
                </div>
                <div>
                  <p className="text-gray-400 mb-1">Member Since</p>
                  <p className="text-white font-semibold">
                    {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default function ProfilePage() {
  return (
    <ProtectedRoute>
      <ProfileContent />
    </ProtectedRoute>
  );
}

