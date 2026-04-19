import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Elijah Shahid Muhammad | shah4.com',
  description:
    'Official player website for Elijah Shahid Muhammad featuring measurables, scouting profile, film links, and contact information.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
