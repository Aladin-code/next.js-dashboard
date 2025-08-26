import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import Script from 'next/script';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics (GA4) */}
        {/* Google tag (gtag.js) */}
<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-09J7X11MV1"
  strategy="afterInteractive"
/>
<Script id="ga-debug" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            const originalPush = window.dataLayer.push;
            window.dataLayer.push = function() {
              console.log("GA4 event fired:", arguments);
              return originalPush.apply(this, arguments);
            };
          `}
        </Script>
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
