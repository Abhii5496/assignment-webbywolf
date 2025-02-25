import { Geist, Geist_Mono, Inter, Roboto_Condensed } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { AOSInit } from "@/components/ui/aos";

const robotoCondensed = Roboto_Condensed({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["italic", "normal"],
  display: "swap",
});

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

export const metadata = {
  title: "Webbywolf",
  description: "webbywolf assignment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AOSInit />
      <body
        className={`${robotoCondensed.variable} ${inter.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
