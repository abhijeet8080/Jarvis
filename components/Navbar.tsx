"use client";
import Image from "next/image";
import { Menu, Settings, Power } from "lucide-react";
import { useState } from "react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleMenuClick = () => {
    setOpen(true);
  };

  return (
    <nav className="absolute top-4 left-1/2 z-20 w-[95%] max-w-7xl -translate-x-1/2 rounded-xl border border-cyber-blue/30 bg-black/30 px-4 py-2 backdrop-blur-md shadow-md flex items-center justify-between">
      {/* Left - Logo */}
      <div className="flex items-center gap-3">
        <Image
          src="/assets/heart.gif"
          alt="Iron Man Heart"
          width={40}
          height={40}
          unoptimized
          className="rounded-full"
        />
        <span className="text-white font-bold text-xl font-mono">
          J.A.R.V.I.S
        </span>
      </div>

      {/* Center - Desktop Nav */}
      <div className="hidden md:flex gap-6 text-white font-mono text-sm tracking-wide">
        <button className="hover:text-cyber-blue-bright transition">Diagnostics</button>
        <button className="hover:text-cyber-blue-bright transition">Protocols</button>
        <button className="hover:text-cyber-blue-bright transition">Suit Status</button>
        <button className="hover:text-cyber-blue-bright transition">Scanning</button>
      </div>

      {/* Right - Icons */}
      <div className="flex items-center gap-4 text-white">
        <Settings className="w-5 h-5 hover:text-cyber-blue-bright cursor-pointer transition" />
        <Power className="w-5 h-5 hover:text-red-600 cursor-pointer transition" />

        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Menu
              onClick={handleMenuClick}
              className="w-6 h-6 md:hidden cursor-pointer hover:text-cyber-blue-bright transition"
            />
          </SheetTrigger>
          <SheetContent side="left" className="bg-black/90 border-cyber-blue/30 text-white font-mono">
            <SheetHeader>
              <SheetTitle className="text-cyber-blue-bright">J.A.R.V.I.S</SheetTitle>
            </SheetHeader>
            <div className="mt-6 flex flex-col gap-4">
              <SheetClose asChild>
                <button className="hover:text-cyber-blue-bright transition">Diagnostics</button>
              </SheetClose>
              <SheetClose asChild>
                <button className="hover:text-cyber-blue-bright transition">Protocols</button>
              </SheetClose>
              <SheetClose asChild>
                <button className="hover:text-cyber-blue-bright transition">Suit Status</button>
              </SheetClose>
              <SheetClose asChild>
                <button className="hover:text-cyber-blue-bright transition">Scanning</button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
