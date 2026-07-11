import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"], weight: ["400", "500", "600", "700"],
  variable: "--font-outfit-custom"
});

const ovo = Ovo({
  subsets: ["latin"], weight: ["400"],
  variable: "--font-ovo-custom"
});

export const metadata = {
  title: "Portfolio of Cian",
  description: "Portfolio of Cian",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${ovo.variable} antialiased leading-8 overflow-x-hidden scroll-smooth`}
    >
      <body
        className="font-outfit antialiased dark:bg-darkTheme dark:text-white"
      >
        {children}
      </body>
    </html>
  );
}
