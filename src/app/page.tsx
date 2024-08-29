import Header from "@/components/Header";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Expertise from "@/components/Expertise";

import "./globals.css";

export default function Home() {
  return (
    <>
    <div
          className="relative bg-cover bg-center h-[800px] mt-11 rounded-md"
          style={{ backgroundImage: "url('/pic2.jpg')" }}
        >
          <Navbar />
          <Header />
        </div>
        <About />
        <Expertise/>
  
      </>
  );
}
