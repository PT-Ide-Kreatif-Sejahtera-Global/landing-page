import React from "react";
import { PiArrowUpRightBold } from "react-icons/pi";
import Image from "next/image";
import Link from "next/link";

const IMGITEM = [
  {
    img: "/Marketplace_Assets/card-2.png",
    title: "Celana Blue Jeans Wanita Casual dan Elegan ",
    subtitle: "by Penjual",
  },
];

const MarketSection = () => {
  return (
    <div className="mt-14 px-4 lg:px-28 py-10 bg-[#10352c] text-white">
      <div className="flex flex-col md:flex-row gap-5 items-center justify-between">
        {/* Text and Buttons Section */}
        <div className="flex flex-col text-center gap-3 md:text-start">
          <p className="text-lg lg:text-xl font-medium">
            Take a Look of Our Latest Product
          </p>
          <h1 className="text-2xl lg:text-4xl font-bold">
            Get The Latest <span className="text-yellow-400">Promo!</span>
          </h1>
          <p className="text-sm text-gray-300 mt-2">
            lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
          <div className="flex gap-3 mt-4">
            <Link href="/" passHref>
              <button className="bg-yellow-400 text-black font-bold px-6 py-2 rounded-md hover:bg-yellow-500 transition duration-300">
                MORE
              </button>
            </Link>
            <Link href="/" passHref>
              <button className="flex items-center gap-2 border-2 border-white px-4 py-2 rounded-md hover:bg-gray-700 transition duration-300">
                GET IN TOUCH
                <PiArrowUpRightBold className="text-xl" />
              </button>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative w-80 h-80">
          {IMGITEM.map((item, i) => (
            <div key={i} className="">
              <div className="w-70 h-80 relative  overflow-hidden rounded-lg hover:scale-105 duration-300 group cursor-pointer  object-cover ">
                <Image
                  className="rounded-xl border-4 border-black opacity-40 group-hover:opacity-100 duration-300 "
                  src={item.img}
                  alt="Logo"
                  fill
                />
                <div className="absolute bottom-0 w-full bg-gradient-to-t  from-black to-transparent px-3 translate-y-full py-4 group-hover:translate-y-0 duration-300">
                  <p className=" text-white font-bold text-xl">{item.title}</p>
                  <p className="text-sm text-white">{item.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketSection;
