import { apiClient } from './api';
import { API_ENDPOINTS } from './constants';
import type {
  JobPosting,
  JobApplication,
  JobApplicationWithJob,
  TrendingJob,
  TrendingSkill,
  UserStatistics,
  PlatformStatistics,
} from '@/types/api';

// Jobs API
export const jobsApi = {
  list: async (params?: { page?: number; limit?: number; location?: string; skills?: string[] }): Promise<{ data: JobPosting[]; pagination?: any }> => {
    return apiClient.get(API_ENDPOINTS.JOBS.LIST, { params });
  },
  get: async (id: string): Promise<JobPosting> => {
    return apiClient.get(API_ENDPOINTS.JOBS.DETAIL(id));
  },
  create: async (data: Partial<JobPosting>): Promise<JobPosting> => {
    return apiClient.post(API_ENDPOINTS.JOBS.CREATE, data);
  },
  update: async (id: string, data: Partial<JobPosting>): Promise<JobPosting> => {
    return apiClient.put(API_ENDPOINTS.JOBS.UPDATE(id), data);
  },
  delete: async (id: string): Promise<void> => {
    return apiClient.delete(API_ENDPOINTS.JOBS.DELETE(id));
  },
};

// Applications API
export const applicationsApi = {
  list: async (params?: { page?: number; limit?: number }): Promise<{ data: JobApplicationWithJob[]; pagination?: any }> => {
    return apiClient.get(API_ENDPOINTS.APPLICATIONS.LIST, { params });
  },
  get: async (id: string): Promise<JobApplicationWithJob> => {
    return apiClient.get(API_ENDPOINTS.APPLICATIONS.DETAIL(id));
  },
  create: async (data: Partial<JobApplication>): Promise<JobApplication> => {
    return apiClient.post(API_ENDPOINTS.APPLICATIONS.CREATE, data);
  },
  update: async (id: string, data: Partial<JobApplication>): Promise<JobApplication> => {
    return apiClient.put(API_ENDPOINTS.APPLICATIONS.UPDATE(id), data);
  },
  getByJob: async (jobId: string): Promise<JobApplication[]> => {
    return apiClient.get(API_ENDPOINTS.APPLICATIONS.BY_JOB(jobId));
  },
  getByUser: async (userId: string): Promise<JobApplicationWithJob[]> => {
    return apiClient.get(API_ENDPOINTS.APPLICATIONS.BY_USER(userId));
  },
};

// Trending API
export const trendingApi = {
  getJobs: async (): Promise<TrendingJob[]> => {
    return apiClient.get(API_ENDPOINTS.TRENDING.JOBS);
  },
  getSkills: async (): Promise<TrendingSkill[]> => {
    return apiClient.get(API_ENDPOINTS.TRENDING.SKILLS);
  },
};

// Analytics API
export const analyticsApi = {
  getUserStats: async (userId?: string): Promise<UserStatistics> => {
    const endpoint = userId 
      ? API_ENDPOINTS.ANALYTICS.USER(userId)
      : API_ENDPOINTS.ANALYTICS.USER('');
    return apiClient.get(endpoint);
  },
  getPlatformStats: async (): Promise<PlatformStatistics> => {
    return apiClient.get(API_ENDPOINTS.ANALYTICS.PLATFORM);
  },
  getJobStats: async (): Promise<any> => {
    return apiClient.get(API_ENDPOINTS.ANALYTICS.JOBS);
  },
};

