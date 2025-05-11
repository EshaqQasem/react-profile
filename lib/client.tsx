"use client";

import { create } from 'zustand';

interface Settings {
  siteName: string;
  logo: string;
  description: string;
  email: string;
  phone: string;
  address: string;
  socialLinks: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
    youtube?: string;
  };
  footerLinks: {
    title: string;
    links: {
      name: string;
      href: string;
    }[];
  }[];
}

interface SettingsStore {
  settings: Settings | null;
  isLoading: boolean;
  error: string | null;
  fetchSettings: () => Promise<void>;
}

export const useSettingsStore = create<SettingsStore>((set) => ({
  settings: null,
  isLoading: false,
  error: null,
  fetchSettings: async () => {
    try {
      set({ isLoading: true, error: null });
      const response = await fetch('/api/settings', {
        cache: 'no-store',
        next: { revalidate: 0 }
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch settings');
      }

      const data = await response.json();
      set({ settings: data, isLoading: false });
    } catch (error) {
      set({ 
        error: error instanceof Error ? error.message : 'An error occurred', 
        isLoading: false 
      });
    }
  },
}));

// Helper function to get settings
export const getSettings = async () => {
  const store = useSettingsStore.getState();
  
  if (!store.settings) {
    await store.fetchSettings();
  }
  
  return store.settings;
}; 