// lib/gtag.ts

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export const GA_TRACKING_ID = "G-09J7X11MV1"; // replace with your ID

// Pageview tracking
export const pageview = (url: string) => {
  if (typeof window.gtag !== "undefined") {
    window.gtag("config", GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Custom event tracking
export const event = (
  action: string,
  params: { [key: string]: any } = {}
) => {
  if (typeof window.gtag !== "undefined") {
    window.gtag("event", action, params);
  }
};
