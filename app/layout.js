// app/layout.tsx
import { Poppins } from 'next/font/google'; // Import the font

import './globals.css'; // Import global CSS

// Load Poppins font
const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], // All available weights
  style: ['normal', 'italic'], // Normal and italic styles (optional)
  subsets: ['latin'], // The language subset, for example 'latin'
  display: 'swap', // Optional to ensure font is displayed immediately
});

export const metadata = {
  title: 'Your App Title',
  description: 'Your App Description',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
