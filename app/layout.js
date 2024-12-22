import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import PageTransition from "./components/PageTransition";
import StairTransition from "./components/StairTransition";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Julia Sutedjo Portfolio",
  description: "NextJs, Tailwind, Shadcn",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        {/* <div className="h-32">
          <Navbar/>
        </div>
        <div className=" h-[calc(100vh-128px)]">
          <StairTransition/>
          <PageTransition>
            {children}
          </PageTransition>
        </div> */}
        {children}
      </body>
    </html>
  );
}
