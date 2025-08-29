// Google Analytics 4 Event Tracking
declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void;
  }
}

// Event tracking functions for GA4
export const trackEvent = (eventName: string, parameters: Record<string, any> = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      ...parameters,
      // Add timestamp for better tracking
      timestamp: new Date().toISOString()
    });
  }
};

// Specific event tracking functions
export const trackAffiliateClick = (platform: string, productName: string, url: string) => {
  trackEvent('affiliate_click', {
    event_category: 'affiliate',
    event_label: platform,
    product_name: productName,
    affiliate_url: url,
    value: 1
  });
};

export const trackMenuClick = (menuItem: string) => {
  trackEvent('menu_click', {
    event_category: 'navigation',
    event_label: menuItem,
    value: 1
  });
};

export const trackContactFormSubmit = (formData: { name: string; email: string }) => {
  trackEvent('contact_form_submit', {
    event_category: 'engagement',
    event_label: 'contact_form',
    user_name: formData.name,
    user_email: formData.email,
    value: 5 // Higher value for form submissions
  });
};

export const trackArticleView = (articleId: string, articleTitle: string) => {
  trackEvent('article_view', {
    event_category: 'content',
    event_label: articleId,
    article_title: articleTitle,
    value: 2
  });
};

export const trackButtonClick = (buttonName: string, location: string) => {
  trackEvent('button_click', {
    event_category: 'interaction',
    event_label: buttonName,
    button_location: location,
    value: 1
  });
};

export const trackScrollDepth = (percentage: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'scroll_depth', {
      event_category: 'engagement',
      event_label: `${percentage}%`,
      value: percentage
    });
  }
};

export const trackTimeOnPage = (seconds: number, pageName: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'time_on_page', {
      event_category: 'engagement',
      event_label: pageName,
      value: seconds
    });
  }
};

export const trackAffiliateClickAdvanced = (productName: string, position: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'affiliate_click', {
      event_category: 'monetization',
      event_label: productName,
      custom_parameter_1: position
    });
  }
};

export const trackNewsletterSignup = (source: string) => {
  trackEvent('newsletter_signup', {
    event_category: 'engagement',
    event_label: source,
    value: 10 // Alto valor para suscripciones
  });
};

export const trackSearch = (query: string, resultsCount: number) => {
  trackEvent('search', {
    event_category: 'engagement',
    event_label: query,
    search_term: query,
    results_count: resultsCount,
    value: 3
  });
};

export const trackPopupView = (popupType: string) => {
  trackEvent('popup_view', {
    event_category: 'engagement',
    event_label: popupType,
    value: 2
  });
};