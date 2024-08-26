import Header from "@/components/Header";
import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="relative bg-cover bg-center h-[800px] w-[95%] mx-auto mt-11 rounded-md" style={{ backgroundImage: "url('/pic2.jpg')" }}>
    <Navbar />
    <Header />
  </div>
  
  );
}
