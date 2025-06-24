import type { Metadata } from 'next';
import './globals.css';
import './casino-bets.css';
import './win-rate-progress-bar.css';
import './online-users.css';
import './matrix-rain.css';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Matrix Strategy AI',
  description: 'Pare de depender da sorte. Comece a ganhar com lógica.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&family=Poppins:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
