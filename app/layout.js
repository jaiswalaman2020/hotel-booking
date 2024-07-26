import { Inter } from "next/font/google";
import Logo from "@/app/_components/Logo";
import Navigation from "./_components/Navigation";

export const metadata = {
  title: "The wild hotel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>{children}</main>
        <footer>copy right 2024</footer>
      </body>
    </html>
  );
}
