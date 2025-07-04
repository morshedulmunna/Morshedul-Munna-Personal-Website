"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Facebook, MessageSquare } from "lucide-react";
import Discord from "@/assets/svg/Discord";
import Youtube from "@/assets/svg/Youtube";
import Linkedin from "@/assets/svg/Linkedin";
import Github from "@/assets/svg/Github";

type Props = {};

const NAV_ITEMS = [
  { href: "https://www.youtube.com/@morshedulmunna1", label: "Youtube", icon: <Youtube />, target: "_blank" },
  { href: "https://www.linkedin.com/in/morshedulmunna", label: "Linkedin", icon: <Linkedin />, target: "_blank" },
  { href: "https://github.com/morshedulmunna", label: "Github", icon: <Github />, target: "_blank" },
  { href: "/blogs", label: "Blogs", icon: null, target: "_self" },
] as const;

export default function Header({}: Props) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 py-4 hidden md:block transition-all duration-300 ${isScrolled ? "bg-zinc-900/80 backdrop-blur-sm" : ""}`}>
      <nav className={`flex items-center justify-center ${isScrolled ? "w-full" : "max-w-fit mx-auto"} rounded-full px-8 py-2 ${isScrolled ? "bg-transparent" : "bg-zinc-900/80 backdrop-blur-sm"}`}>
        <div className="flex items-center gap-2 mr-12">
          {/* <Image src="/diverse-avatars.png" alt="Morshedul Munna" width={32} height={32} className="rounded-full" /> */}
          <span className="font-medium">Morshedul Munna</span>
        </div>
        <div className="flex items-center gap-12">
          {NAV_ITEMS.map(({ href, label, icon, target }) => (
            <Link key={href} href={href} target={target} className="text-sm cursor-pointer hover:text-blue-500 transition flex items-center">
              <span className="mr-1">{icon}</span>
              {label}
            </Link>
          ))}
          {/* <Link href="/login" className="text-sm cursor-pointer relative px-4 py-1 rounded-md border border-gray-700 hover:text-blue-500 transition-all duration-300 flex items-center group">
            <span className="relative z-10">Login</span>
            <span className="absolute inset-0 rounded-md border-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
          </Link> */}
        </div>
      </nav>
    </header>
  );
}
