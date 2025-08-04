"use client";

import Image from "next/image";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/lib/store";
import { clearUser } from "@/redux/userSlice";
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
import { Button } from "./ui/button";

const Navbar = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const user = useSelector((state: RootState) => state.user);

  const handleLogout = () => {
    dispatch(clearUser());
    localStorage.removeItem("token");
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
        <span className="text-white font-bold text-xl font-mono">J.A.R.V.I.S</span>
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

        {user.isLoggedIn ? (
          <>
            <Image
              src={user.avatar || "/assets/default-avatar.png"}
              alt="Avatar"
              width={32}
              height={32}
              className="rounded-full border border-[#00F0FF]/40"
            />
            <Power  
              className="w-5 h-5 hover:text-red-600 cursor-pointer transition"
              onClick={handleLogout}
            />
          </>
        ) : (
          <Link
            href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/login`}
            className="bg-[#00F0FF]/20 border border-[#00F0FF] text-[#00F0FF] px-3 py-1 rounded-md text-xs font-semibold hover:bg-[#00F0FF] hover:text-gray-800 transition hidden md:block"
          >
            Connect to Google
          </Link>
        )}

        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Menu
              onClick={() => setOpen(true)}
              className="w-6 h-6 md:hidden cursor-pointer hover:text-cyber-blue-bright transition"
            />
          </SheetTrigger>
          <SheetContent
            side="left"
            className="bg-black/90 border-cyber-blue/30 text-white font-mono"
          >
            <SheetHeader>
              <SheetTitle className="text-cyber-blue-bright">J.A.R.V.I.S</SheetTitle>
            </SheetHeader>
            <div className="mt-6 flex flex-col gap-4">
              <SheetClose asChild><button className="hover:text-cyber-blue-bright">Diagnostics</button></SheetClose>
              <SheetClose asChild><button className="hover:text-cyber-blue-bright">Protocols</button></SheetClose>
              <SheetClose asChild><button className="hover:text-cyber-blue-bright">Suit Status</button></SheetClose>
              <SheetClose asChild><button className="hover:text-cyber-blue-bright">Scanning</button></SheetClose>
              {!user.isLoggedIn ? (
                <SheetClose asChild>
                  <Link
                    href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/login`}
                    className="mt-4 text-[#00F0FF] flex items-center justify-center border border-[#00F0FF]/50 px-3 py-1 rounded-md hover:bg-[#00F0FF] hover:text-black transition text-sm"
                  >
                    Connect to Google
                  </Link>
                </SheetClose>
              ):(<SheetClose asChild>
                  <Button
                  onClick={handleLogout}
                    className="mt-4 text-red-700  flex items-center justify-center border border-red-600/50 px-3 py-1 rounded-md hover:bg-red-600 hover:text-black transition text-sm"
                  >
                    Logout
                  </Button>
                </SheetClose>)}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
