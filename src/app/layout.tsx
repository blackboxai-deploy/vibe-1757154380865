import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Indian Courier Tracker - Track All Major Couriers',
  description: 'Track packages from DTDC, Blue Dart, Delhivery, Ecom Express, and 15+ other major Indian courier companies in one place. Real-time tracking with automatic courier detection.',
  keywords: 'courier tracking, India, DTDC, Blue Dart, Delhivery, Ecom Express, package tracking, shipment tracking',
  authors: [{ name: 'Courier Tracker' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'Indian Courier Tracker - Track All Major Couriers',
    description: 'Track packages from DTDC, Blue Dart, Delhivery, and 15+ other Indian courier companies',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Indian Courier Tracker',
    description: 'Track packages from all major Indian courier companies',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen bg-background text-foreground">
          {children}
        </div>
      </body>
    </html>
  );
}