// Performance utilities - Only used functions
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Session storage with error handling
export const safeSessionStorage = {
  getItem: async (key: string): Promise<string | null> => {
    try {
      return sessionStorage.getItem(key);
    } catch (error) {
      console.warn('sessionStorage.getItem failed:', error);
      return null;
    }
  },

  setItem: async (key: string, value: string): Promise<boolean> => {
    try {
      sessionStorage.setItem(key, value);
      return true;
    } catch (error) {
      console.warn('sessionStorage.setItem failed:', error);
      return false;
    }
  },

  removeItem: async (key: string): Promise<boolean> => {
    try {
      sessionStorage.removeItem(key);
      return true;
    } catch (error) {
      console.warn('sessionStorage.removeItem failed:', error);
      return false;
    }
  },
};