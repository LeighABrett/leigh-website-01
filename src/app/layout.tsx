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
  title: "Leigh Brett — I design products, build teams, and define strategy",
  description:
    "Creative Director & Product Designer for companies that want to move fast.",
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Leigh Brett — I design products, build teams, and define strategy",
    description:
      "Creative Director & Product Designer for companies that want to move fast.",
    url: "https://leighbrett.com",
    siteName: "Leigh Brett",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Leigh Brett",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leigh Brett — I design products, build teams, and define strategy",
    description:
      "Creative Director & Product Designer for companies that want to move fast.",
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
