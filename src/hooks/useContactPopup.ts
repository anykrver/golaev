'use client';

import { useState, useEffect, useCallback } from 'react';
import { safeSessionStorage } from '@/utils/performance';

export const useContactPopup = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const checkStorageAsync = useCallback(async () => {
    return await safeSessionStorage.getItem('contactPopupShown');
  }, []);

  const setStorageAsync = useCallback(async () => {
    await safeSessionStorage.setItem('contactPopupShown', 'true');
  }, []);

  useEffect(() => {
    const initializePopup = async () => {
      const hasSeenPopup = await checkStorageAsync();
      
      if (!hasSeenPopup) {
        // Show popup after 3 seconds of page load
        const timer = setTimeout(async () => {
          setIsPopupOpen(true);
          await setStorageAsync();
        }, 3000);

        return () => clearTimeout(timer);
      }
    };

    initializePopup();
  }, [checkStorageAsync, setStorageAsync]);

  const closePopup = useCallback(() => {
    setIsPopupOpen(false);
  }, []);

  return { isPopupOpen, closePopup };
};