import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aurum Ledger — Jewellery Workshop Gold Accountability System",
  description: "Enterprise gold accountability platform for jewellery manufacturing. Every gram accounted for.",
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FAF9F5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full bg-background">
      <body className="min-h-full flex flex-col font-sans antialiased text-foreground bg-background selection:bg-gold-subtle selection:text-gold-primary">
        {children}
      </body>
    </html>
  );
}
