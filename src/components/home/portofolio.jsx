import { useEffect, useState } from "react";
import ezlogo from "@/assets/ez-mart-logo-inrZGqzj.png";
import Image from "next/image";

function Portofolio() {
  const [isHovered, setIsHovered] = useState(null);
  const item = [
    {
      image: ezlogo,
      text: "Final project bootcamp Purwadhika Digital Technology School",
      link: "https://jcwd020803.purwadhikabootcamp.com/",
    },
  ];
  return (
    <div className="grid grid-cols-3 gap-3">
      {item?.map((item, idx) => (
        <a
          key={idx}
          className="relative h-[150px] w-[300px] border border-gray-300 rounded-xl cursor-pointer"
          href={item?.link}
          onMouseEnter={() => setIsHovered(idx)}
          onMouseLeave={() => setIsHovered(null)}
        >
          <Image
            src={item?.image}
            alt=""
            className="rounded-xl object-fill h-[100%] w-[100%] p-2"
          />
          <div
            className={`absolute top-0 w-[100%] flex flex-col gap-1 items-center justify-center text-center bg-black/50 h-full rounded-lg ${
              isHovered === idx ? "" : "hidden"
            }`}
          >
            <h2 className="font-bold text-[24px]">Ez mart</h2>
            <p className="text-md">{item?.text}</p>
          </div>
        </a>
      ))}
    </div>
  );
}

export default Portofolio;
