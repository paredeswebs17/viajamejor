import { useState, useEffect } from 'react';

interface UseNewsletterPopupOptions {
  delayMs?: number;
  scrollPercentage?: number;
  exitIntent?: boolean;
  timeOnPage?: number;
}

export const useNewsletterPopup = (options: UseNewsletterPopupOptions = {}) => {
  const {
    delayMs = 30000, // 30 segundos
    scrollPercentage = 50, // 50% de scroll
    exitIntent = true,
    timeOnPage = 45000 // 45 segundos
  } = options;

  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Verificar si ya se mostró en esta sesión
    const hasShownInSession = sessionStorage.getItem('newsletter-popup-shown');
    const hasSubscribed = localStorage.getItem('newsletter-subscribed');
    
    if (hasShownInSession || hasSubscribed) {
      setHasShown(true);
      return;
    }

    let timeoutId: NodeJS.Timeout;
    let scrollListener: () => void;
    let mouseListener: (e: MouseEvent) => void;

    // Trigger por tiempo
    timeoutId = setTimeout(() => {
      if (!hasShown) {
        setIsOpen(true);
        setHasShown(true);
        sessionStorage.setItem('newsletter-popup-shown', 'true');
      }
    }, Math.max(delayMs, timeOnPage));

    // Trigger por scroll
    scrollListener = () => {
      const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrolled >= scrollPercentage && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
        sessionStorage.setItem('newsletter-popup-shown', 'true');
      }
    };

    // Trigger por exit intent (solo desktop)
    if (exitIntent && window.innerWidth > 768) {
      mouseListener = (e: MouseEvent) => {
        if (e.clientY <= 0 && !hasShown) {
          setIsOpen(true);
          setHasShown(true);
          sessionStorage.setItem('newsletter-popup-shown', 'true');
        }
      };
      document.addEventListener('mouseleave', mouseListener);
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', scrollListener);
      if (mouseListener) {
        document.removeEventListener('mouseleave', mouseListener);
      }
    };
  }, [delayMs, scrollPercentage, exitIntent, timeOnPage, hasShown]);

  const closePopup = () => {
    setIsOpen(false);
  };

  const markAsSubscribed = () => {
    localStorage.setItem('newsletter-subscribed', 'true');
    setIsOpen(false);
  };

  return {
    isOpen,
    closePopup,
    markAsSubscribed
  };
};