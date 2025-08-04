import React from 'react'
import { motion } from "framer-motion";
import { PanelInterface } from './PanelInterface';
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import Image from 'next/image';

const UserPanel = ({focused,onFocus}:PanelInterface) => {
    const user = useSelector((state: RootState) => state.user);

  return (
     <motion.div
      onClick={onFocus}
      className={`absolute bottom-4 left-4 bg-[#0D0D0D]/80 border border-[#00F0FF]/40 rounded p-2 w-64 cursor-pointer transition-all duration-300 ${
        focused ? "z-50 scale-105 shadow-2xl" : "z-10"
      }`}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.9 }}
    >
      <p className="text-[#FFD700] font-bold">USER</p>
      <div className="mt-2 space-y-1">
        {user.avatar && (
          <Image width={100} height={100}
            src={user.avatar}
            alt="User Avatar"
            className="w-10 h-10 rounded-full border border-[#00F0FF]/50 mb-2 object-fit"
          />
        )}
        <p>
          Name:{" "}
          <span className="text-[#00FF00]">
            {user.name || "Guest"}
          </span>
        </p>
        <p>
          Email:{" "}
          <span className="text-[#00FF00]">
            {user.email || "Not Available"}
          </span>
        </p>
        <p>Protocol: Stark-7</p>
      </div>
    </motion.div>
  )
}

export default UserPanel