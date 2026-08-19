import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Job Application',
  description: 'Apply to join Solomon Media Group. General applications and current positions are welcome.',
};

export default function ApplicationLayout({ children }: { children: React.ReactNode }) {
  return children;
}
