"use client";
import { motion } from "framer-motion"
import Link from "next/link"
import { Bot } from "lucide-react"

const JarvisLaunchButton = () => {
  return (
    <>
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, duration: 0.6, ease: "easeOut" }}
    >
    <Link
      href="/jarvis"
      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[#00F0FF] text-[#00F0FF] text-sm font-semibold shadow-[0_0_10px_#00F0FF55] hover:bg-[#00F0FF] hover:text-black transition-all duration-300 hover:scale-105 animate-pulse"
    >
      <Bot className="w-4 h-4" />
      Launch J.A.R.V.I.S
    </Link>
    </motion.div>
    </>
  );
};

export default JarvisLaunchButton;
