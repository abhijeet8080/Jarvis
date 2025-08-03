import React from 'react'
import { motion } from "framer-motion";

const UserPanel = () => {
  return (
    <div><motion.div
        className="absolute bottom-4 left-4 bg-[#0D0D0D]/80 border border-[#00F0FF]/40 rounded p-2 w-64"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        <p className="text-[#FFD700] font-bold">USER</p>
        <div className="mt-2 space-y-1">
          <p>Name: <span className="text-[#00FF00]">Abhijeet Kadam</span></p>
          <p>Status: Active</p>
          <p>Protocol: Stark-7</p>
        </div>
      </motion.div></div>
  )
}

export default UserPanel