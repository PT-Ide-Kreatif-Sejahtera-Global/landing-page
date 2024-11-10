'use client'
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [header, setHeader] = useState(false);
  const [isHomePage, setIsHomePage] = useState(true);
  const pathname = usePathname(); 

  interface MenuItem {
    name: string;
    href: string;
    external?: boolean;
  }

  const menuItems: MenuItem[] = [
    { name: "Beranda", href: "/" },
    { name: "Pelayanan", href: "/pelayanan" },
    { name: "FAQ", href: "/faq" },
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
        setIsHomePage(pathname === "/"); 
    
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
   className={`fixed w-full z-50 transition-all duration-300 ${
    (header || isOpen || !isHomePage) ? "bg-white shadow-md" : "bg-white"
  }`}
   >
    <div className='p-6 flex justify-between'>
        Navbar
    </div>
   </nav>
  )
}

export default Navbar