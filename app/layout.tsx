import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EDU GROW SA',
  description: 'Early Childhood Development Platform for South African nursery schools',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}
