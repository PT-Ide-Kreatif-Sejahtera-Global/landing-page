"use client";
import React from "react";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";



const FOOTERSERVICE = [
  {
    title: "Education",
  },
  {
    title: "Product",
  },
  {
    title: "Digital Talent",
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
              src="/logoideathings.png"
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
                <a href="" className="cursor-pointer">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="gap-2 flex flex-col  justify-center items-start md:items-center">
          <h1 className="font-bold text-white">Contact Us</h1>
            <ul className="text-white flex items-center gap-3">
              <li className="mt-1 hover:scale-110 duration-300"><a  href="https://facebook.com/ideathings" target="_blank"><FaFacebook /></a></li> 
              <li className="mt-1 hover:scale-110 duration-300"><a  href="https://www.instagram.com/ideathings.id/" target="_blank"><FaInstagram /></a></li> 
              <li className="mt-1 hover:scale-110 duration-300"><a  href="tiktok.com/@ideathingstudio" target="_blank"><FaTiktok /></a></li> 
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
