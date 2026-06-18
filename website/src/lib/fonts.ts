import { Playfair_Display, Inter, Outfit } from 'next/font/google';

export const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

export const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-accent',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});
