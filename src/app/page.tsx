import Header from "@/components/Header";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import "./globals.css";

export default function Home() {
  return (
    <div className="relative bg-cover h-[700px] w-[95%] mx-auto mt-11 rounded-md bg-bg-img-1">
     <Navbar />
    <Header />
  </div>
  
  );
}
