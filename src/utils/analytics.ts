/**
 * Simple analytics utility for production-ready tracking.
 * This can be expanded with Google Analytics 4, Plausible, or Sentry.
 */

export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    // Mock tracking for demonstration
    if (import.meta.env.PROD) {
        console.log(`[Analytics] Tracking Event: ${eventName}`, properties);

        // Example: Integration with window.gtag (Google Analytics)
        // if (typeof window !== 'undefined' && (window as any).gtag) {
        //   (window as any).gtag('event', eventName, properties);
        // }
    }
};

export const initAnalytics = (trackingId: string) => {
    if (import.meta.env.PROD && trackingId) {
        console.log(`[Analytics] Initializing with ID: ${trackingId}`);
    }
};
