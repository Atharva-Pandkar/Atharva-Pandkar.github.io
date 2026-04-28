import posthog from 'posthog-js';
import { analyticsEvents } from '../analytics/events';

const posthogKey = import.meta.env.VITE_PUBLIC_POSTHOG_KEY;
const posthogHost = import.meta.env.VITE_PUBLIC_POSTHOG_HOST;

export function initializeAnalytics(): void {
  if (!posthogKey || !posthogHost) {
    return;
  }

  posthog.init(posthogKey, {
    api_host: posthogHost,
    defaults: '2026-01-30',
    capture_pageview: false,
    capture_exceptions: true,
    debug: import.meta.env.DEV,
  });
}

export function trackEvent(event: string, properties?: Record<string, unknown>): void {
  posthog.capture(event, properties);
}

export function trackPageView(path: string): void {
  trackEvent(analyticsEvents.pageViewed, { path });
}

export function trackSocialClick(platform: string, location: string): void {
  trackEvent(analyticsEvents.socialLinkClicked, { platform, location });
}

export function trackOutboundLink(label: string, url: string, location: string): void {
  trackEvent(analyticsEvents.outboundLinkClicked, { label, url, location });
}
