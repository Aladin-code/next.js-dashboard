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
<Script id="gtag-init" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-09J7X11MV1');
  `}
</Script>
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
