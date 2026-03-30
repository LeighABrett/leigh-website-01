import type { Metadata } from "next";
import { Schibsted_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const schibstedGrotesk = Schibsted_Grotesk({
  variable: "--font-schibsted",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Leigh Brett — Design leadership",
  description:
    "Products get complicated. I make them simple. Design leader for platforms, services, and teams.",
  icons: {
    icon: "/icon.svg",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Leigh Brett — Design leadership",
    description:
      "Products get complicated. I make them simple. Design leader for platforms, services, and teams.",
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
      "Products get complicated. I make them simple. Design leader for platforms, services, and teams.",
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
                    var hour = new Date().getHours();
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
      <body className={`${schibstedGrotesk.variable} ${schibstedGrotesk.className} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
