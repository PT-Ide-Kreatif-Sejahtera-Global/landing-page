import React from "react";
import { PiArrowUpRightBold } from "react-icons/pi";
import Image from "next/image";
import Link from "next/link";

const IMGITEM = [
  {
    img: "/Education_Assets/card-1.png",
  },
];

const MarketSection = () => {
  return (
    <div className="px-4 lg:px-20 py-10 bg-[#10352c] text-white">
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
            <div
              key={i}
              className="w-full h-full relative overflow-hidden rounded-lg"
            >
              <Image
                src={item.img}
                alt="Product Image"
                layout="fill"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketSection;
