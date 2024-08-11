import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import './globals.scss';
import {LMSProvider} from '@design-system';
import {LayoutComponent} from '@core';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Lending Management System',
  description: 'Management in your hand',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className='h-full'>
        <LayoutComponent></LayoutComponent>
        <LMSProvider>{children}</LMSProvider>
      </body>
    </html>
  );
}
