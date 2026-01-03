import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NailScope - Discover Your Nail Pattern",
  description:
    "Take our free quiz to identify what's affecting your nails and get personalized recommendations for healthier nails.",
  keywords: [
    "nail health",
    "nail care",
    "fungal nails",
    "nail treatment",
    "nail quiz",
  ],
  openGraph: {
    title: "NailScope - Discover Your Nail Pattern",
    description:
      "Take our free quiz to identify what's affecting your nails and get personalized recommendations.",
    url: "https://nailscope.org",
    siteName: "NailScope",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* GA4 Script - Replace with actual measurement ID */}
        {process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID}');
                `,
              }}
            />
          </>
        )}

        {/* Meta Pixel - Replace with actual pixel ID */}
        {process.env.NEXT_PUBLIC_META_PIXEL_ID && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${process.env.NEXT_PUBLIC_META_PIXEL_ID}');
                fbq('track', 'PageView');
              `,
            }}
          />
        )}
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
