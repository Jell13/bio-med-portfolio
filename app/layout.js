import { Albert_Sans, DM_Sans } from 'next/font/google'
import "./globals.css";


const albert = Albert_Sans({
  subsets: ['latin'],         // choose correct subsets
  weight: ['400','700'],      // choose which weights you need
  display: 'swap',
  variable: '--font-albert'
})

const dm = DM_Sans({
  subsets: ['latin'],
  weight: ['400','500','700'],
  display: 'swap',
  variable: '--font-dm'
})

export const metadata = {
  title: "Julia Sutedjo Portfolio",
  description: "NextJs, Tailwind, Shadcn",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" /> 
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" /> 
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700&family=Biryani:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${albert.variable} ${dm.variable}`}>
        {children}
      </body>
    </html>
  );
}
