import { Inter, Nunito_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import PageTransition from "./components/PageTransition";
import StairTransition from "./components/StairTransition";


const inter = Inter({ subsets: ["latin"] });
const nunito = Nunito_Sans({ subsets: ["latin"] });

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
      <body className={`font-nunito`}>
        {children}
      </body>
    </html>
  );
}
