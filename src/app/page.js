"use client";
import Hero from "@/components/home/hero";
import Navbar from "@/components/home/navbar";
import Portofolio from "@/components/home/portofolio";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className="w-full bg-white flex flex-col gap-5 py-6 px-1">
        <h2 className="text-center text-[30px] text-gray-800">My Portofolio</h2>
        <Portofolio />
      </div>
    </main>
  );
}
