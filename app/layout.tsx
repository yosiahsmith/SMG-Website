import type { Metadata } from 'next';
import './globals.css';
import { Layout } from '../components/Site';

export const metadata: Metadata = {
  metadataBase: new URL('https://solomedia.group'),
  title: {
    default: 'Solomon Media Group',
    template: '%s | Solomon Media Group',
  },
  description: 'Solomon Media Group builds lead generation, AI receptionist, automation, and growth systems for modern businesses.',
  applicationName: 'Solomon Media Group',
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    type: 'website',
    siteName: 'Solomon Media Group',
    title: 'Solomon Media Group',
    description: 'Growth infrastructure for modern businesses.',
    url: 'https://solomedia.group',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><Layout>{children}</Layout></body></html>;
}
