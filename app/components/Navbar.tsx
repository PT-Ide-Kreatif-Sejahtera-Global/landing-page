"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [header, setHeader] = useState(false);
  const pathname = usePathname();

  interface MenuItem {
    name: string;
    href: string;
    external?: boolean;
  }

  const menuItems: MenuItem[] = [
    { name: "Education", href: "https://ideathings.id/education" },
    { name: "Marketplace", href: "https://ideathings.id/marketplace" },
    { name: "Blog", href: "https://ideathings.id/blog" },
  ];

  const handleMenuClick = (href: string, external?: boolean) => {
    setIsOpen(false);
    if (external) {
      window.open(href, "_blank", "noopener,noreferrer");
    } else {
      window.location.href = href;
    }
  };

  const scrollHeader = () => {
    if (window.scrollY >= 20) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      scrollHeader();
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);
  return (
    <nav
      className={
        header
          ? "transition-all bg-white lg:shadow-md z-50 lg:fixed w-full top-0 start-0"
          : "bg-transparent"
      }
    >
      <div className="container max-w-screen-2xl mx-auto flex justify-between items-center h-[108px] px-4 md:px-20 py-8">
        <a href="/" className="flex items-center">
          <img
            width={50}
            height={50}
            className="w-[50px] h-[50px] rounded-full"
            src="/logoideathings.png"
            alt="Logo"
          />
          <span className="flex flex-col ml-3">
            <span className="text-black text-2xl font-bold">iDeaThings</span>
          </span>
        </a>
        <div className="hidden lg:flex space-x-4">
          {menuItems.map((item, index) => (
            <div key={index} className="relative group">
              <button
                onClick={() => handleMenuClick(item.href)}
                className="px-3 py-2.5 flex justify-center items-center border-b-2 border-b-transparent duration-150 hover:border-b-2 hover:border-b-lime-400 gap-1.5 text-black text-lg font-semibold hover:text-[#3d3d3d]"
              >
                {item.name}
              </button>
            </div>
          ))}
        </div>
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {/* Sidebar */}
      <div
        className={`lg:hidden fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex flex-col space-y-2 p-4">
          <Link href="/">
            <img
              src="/logoideathings.png"
              alt="logo"
              width={60}
              height={60}
              className="mb-4 rounded-full"
            />
          </Link>
          {menuItems.map((item, index) => (
            <div key={index} className="py-2">
              <button
                onClick={() => {
                  handleMenuClick(item.href);
                }}
                className="block text-left w-full text-[#2e2751] text-lg font-medium"
              >
                {item.name}
              </button>
            </div>
          ))}
        </div>
      </div>
      {/* Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
