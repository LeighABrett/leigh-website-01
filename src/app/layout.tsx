import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://leighbrett.com"),
  title: "Leigh Brett — Design leadership",
  description:
    "Strategic design leader who sweats the detail. I help organisations raise the bar of their digital products and services by building high-performing design teams and scalable systems that deliver measurable value.",
  icons: {
    icon: "/icon.svg?v=2",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Leigh Brett — Design leadership",
    description:
      "Strategic design leader who sweats the detail. I help organisations raise the bar of their digital products and services by building high-performing design teams and scalable systems that deliver measurable value.",
    url: "https://leighbrett.com",
    siteName: "Leigh Brett",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Leigh Brett — Design leadership",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leigh Brett — Design leadership",
    description:
      "Strategic design leader who sweats the detail. I help organisations raise the bar of their digital products and services by building high-performing design teams and scalable systems that deliver measurable value.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (!theme) {
                    var hour = parseInt(new Date().toLocaleString('en-GB', { hour: '2-digit', hour12: false, timeZone: 'Europe/London' }));
                    theme = (hour >= 7 && hour < 19) ? 'light' : 'dark';
                  }
                  if (theme === 'light') {
                    document.documentElement.classList.add('light');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${cormorantGaramond.variable} ${inter.className} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
