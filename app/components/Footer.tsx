"use client";
import React from "react";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";



const FOOTERSERVICE = [
  {
    title: "Education",
    url: "https://ideathings.id/education",
  },
  {
    title: "Product",
    url: "https://ideathings.id/marketplace",
  },
  {
    title: "Digital Talent",
    url: "https://ideathings.id/blog",
  },
];

const Footer = () => {
  return (
    <div className="px-4 md:px-20 bg-footer ">
      <div className="grid grid-cols-1 md:grid-cols-3 py-24 gap-5">
        <div className="flex flex-col gap-3 justify-center">
          <div className="flex  items-center gap-3 text-white">
            <Image
              width={50}
              height={50}
              className="w-[50px] h-[50px] rounded-full"
              src="/logo-new.png"
              alt="Logo"
            />
            <h1 className="font-bold">IDeaThings</h1>
          </div>
          <div className="text-white flex flex-col">
            <h1 className="font-bold">PT.Ide Kreatif Sejahtera Global</h1>
            <p className="text-sm">
              PT. Ide Kreatif Sejahtera Global adalah perusahaan adalah sociopreneur yang berkomitmen untuk menciptakan inklusi sosial dengan memberdayakan sumber daya manusia melalui berbagai bidang usaha yang telah berbadan hukum sebagai PT (Perseoran Terbatas). Saat ini, kami mengembangkan empat sektor utama: pendidikan, e-commerce, jasa kreatif, dan teknologi informasi, dengan menghadirkan brand unggulan
            </p>
          </div>
        </div>

        <div className="text-white flex flex-col gap-2 justify-center items-start md:items-center">
          <h1 className="font-bold">Our Services</h1>

          <ul className="flex flex-col gap-1 text-start">
            {FOOTERSERVICE.map((item, i) => (
              <li key={i}>
                <a href={item.url} className="cursor-pointer">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="gap-2 flex flex-col justify-center items-start">
          <h1 className="font-bold text-white">Contact Us</h1>
          <ul className="text-white flex flex-col items-start"> {/* Tetap menggunakan flex-col untuk daftar */}
            <li className="flex items-center hover:scale-110 duration-300"> {/* Menggunakan flex untuk item */}
              <a href="https://facebook.com/ideathings" target="_blank" className="flex items-center">
                <FaFacebook className="text-2xl mr-2" /> {/* Ukuran logo Facebook */}
                @ideathings
              </a>
            </li>
            <li className="my-2 flex items-center hover:scale-110 duration-300">
              <a href="https://www.instagram.com/ideathings.id/" target="_blank" className="flex items-center">
                <FaInstagram className="text-2xl mr-2" /> {/* Ukuran logo Instagram */}
                @ideathings.id
              </a>
            </li>
            <li className="flex items-center hover:scale-110 duration-300">
              <a href="https://www.tiktok.com/@ideathingstudio" target="_blank" className="flex items-center">
                <FaTiktok className="text-2xl mr-2" /> {/* Ukuran logo TikTok */}
                @ideathingstudio
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-white ">
        <div>© Copyright 2023 – PT.Ide Kreatif Sejahtera Global</div>
      </div>
    </div>
  );
};

export default Footer;
