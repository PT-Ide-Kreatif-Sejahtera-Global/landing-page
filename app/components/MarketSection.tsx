"use client";
import React, { useState } from "react";
import { PiArrowUpRightBold } from "react-icons/pi";
import Image from "next/image";
import Link from "next/link";

const IMGITEMS = [
  {
    img: "/Marketplace_Assets/card-1.png",
    title: "Tas Sling Bag Pria INFCL TL 510 IFS",
    subtitle: "Rp 49.768",
    url: "",
  },
  {
    img: "/Marketplace_Assets/card-2.png",
    title: "Celana Blue Jeans Wanita Casual dan Elegan",
    subtitle: "Rp 216.000",
    url: "",
  },
  {
    img: "/Marketplace_Assets/card-3.png",
    title: "Jacket Wanita KSD KZR 515",
    subtitle: "Rp 170.000",
    url: "",
  },
  {
    img: "/Marketplace_Assets/card-4.png",
    title: "Kemeja Casual Pria KKC KZR 116",
    subtitle: "Rp 117.600",
    url: "",
  },
  {
    img: "/Marketplace_Assets/card-5.png",
    title: "knficlo Wanita Pakaian Atasan INF 637",
    subtitle: "Rp 105.000",
    url: "",
  },
  {
    img: "/Marketplace_Assets/card-6.png",
    title: "Item 6",
    subtitle: "Rp",
    url: "",
  },
  {
    img: "/Marketplace_Assets/card-7.png",
    title: "Dompet Pria Simpel dan Elegan",
    subtitle: "Rp 64.500",
    url: "https://ideathings.id/marketplace/detail/32",
  },
  {
    img: "/Marketplace_Assets/card-8.png",
    title: "Item 8",
    subtitle: "Rp",
    url: "",
  },
  {
    img: "/Marketplace_Assets/card-9.png",
    title: "Kemeja Pria Inficlo INF 108",
    subtitle: "Rp 60.000",
    url: "https://ideathings.id/marketplace/detail/2",
  },
  {
    img: "/Marketplace_Assets/card-10.png",
    title: "Item 10",
    subtitle: "Rp",
    url: "",
  },
];

const MarketSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? IMGITEMS.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === IMGITEMS.length - 1 ? 0 : prevIndex + 1
    );
  };

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
          <div className="flex gap-3 mt-4 items-center justify-center">
            <Link href="https://ideathings.id/marketplace" passHref>
              <button className="bg-yellow-400 text-black font-bold px-6 py-2 rounded-md hover:bg-yellow-500 transition duration-300">
                MORE
              </button>
            </Link>
            <Link href={IMGITEMS[currentIndex].url} passHref>
              <button className="flex items-center gap-2 border-2 border-white px-4 py-2 rounded-md hover:bg-gray-700 transition duration-300">
                GET IN TOUCH
                <PiArrowUpRightBold className="text-xl" />
              </button>
            </Link>
          </div>
        </div>

        {/* Carousel Section */}
        <div className="relative w-80 h-80">
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 -left-8 transform -translate-y-1/2 bg-yellow-400 text-black p-2 rounded-full hover:bg-yellow-500 transition"
          >
            &#8249;
          </button>

          {/* Image Display */}
          <div className="relative w-full h-full overflow-hidden rounded-lg group">
            {/* Gambar sebagai tombol */}
            <button
              onClick={() => console.log(IMGITEMS[currentIndex].title)}
              className="relative w-full h-full rounded-xl border-4 border-black overflow-hidden focus:outline-none group"
            >
              {/* Gambar */}
              <Image
                src={IMGITEMS[currentIndex].img}
                alt={IMGITEMS[currentIndex].title}
                className="rounded-xl opacity-90 group-hover:opacity-100 transform group-hover:scale-105 duration-300"
                fill
              />

              {/* Teks */}
              <div className="absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent px-3 py-4 opacity-100 transition-opacity duration-300">
                <p className="text-white font-bold text-lg">
                  {IMGITEMS[currentIndex].title}
                </p>
                <p className="text-sm text-gray-300">
                  {IMGITEMS[currentIndex].subtitle}
                </p>
              </div>
            </button>
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute top-1/2 -right-8 transform -translate-y-1/2 bg-yellow-400 text-black p-2 rounded-full hover:bg-yellow-500 transition"
          >
            &#8250;
          </button>
        </div>
      </div>
    </div>
  );
};

export default MarketSection;
