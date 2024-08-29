import type { Metadata} from "next";
import NextTopLoader from "nextjs-toploader";

import "./globals.css";

import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "Landing Page",
  description: "Creacy - Photography Agency Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
       
     

      <main className=" mx-auto  w-[95%]">
        {children}
        </main>
       <Footer/>
       
        </body>
    </html>
  );
}
