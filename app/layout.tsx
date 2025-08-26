import '@/app/ui/global.css'
import { inter } from '@/app/ui/fonts'
import Script from 'next/script'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* GA4 script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-09J7X11MV1"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-09J7X11MV1', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        {/* Debugger: logs all GA4 events */}
        <Script id="ga-debug" strategy="afterInteractive">
          {`
            const originalPush = window.dataLayer.push;
            window.dataLayer.push = function() {
              console.log("GA4 event fired:", arguments);
              return originalPush.apply(this, arguments);
            };
          `}
        </Script>
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
