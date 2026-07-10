import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter',
});

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${inter.variable} relative flex`}>
      {children}
    </div>
  );
}
