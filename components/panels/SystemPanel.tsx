"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";


interface BatteryManager extends EventTarget {
  charging: boolean;
  chargingTime: number;
  dischargingTime: number;
  level: number;
  addEventListener(
    type: "chargingchange" | "levelchange",
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
}

interface NavigatorExtended extends Navigator {
  deviceMemory?: number;
    getBattery?: () => Promise<BatteryManager>;

}

const SystemPanel = () => {
  const [cpuLoad, setCpuLoad] = useState(0); 
  const [ram, setRam] = useState(0);         
  const [isOnline, setIsOnline] = useState(true);
  const [battery, setBattery] = useState({ level: 1, charging: true });

  useEffect(() => {
    const cpuInterval = setInterval(() => {
      setCpuLoad(Number((20 + Math.random() * 70).toFixed(1)));
    }, 1500);

    const extendedNavigator = navigator as NavigatorExtended;
    if (extendedNavigator.deviceMemory) {
      setRam(extendedNavigator.deviceMemory);
    }

    const updateOnlineStatus = () => setIsOnline(navigator.onLine);
    window.addEventListener("online", updateOnlineStatus);
    window.addEventListener("offline", updateOnlineStatus);

    if (extendedNavigator.getBattery) {
        extendedNavigator.getBattery().then((battery) => {
        const updateBattery = () => {
            setBattery({
            level: battery.level,
            charging: battery.charging,
            });
        };

        updateBattery(); // Set initial value
        battery.addEventListener("chargingchange", updateBattery);
        battery.addEventListener("levelchange", updateBattery);
        });
    }

    return () => {
      clearInterval(cpuInterval);
      window.removeEventListener("online", updateOnlineStatus);
      window.removeEventListener("offline", updateOnlineStatus);
    };
  }, []);

  return (
    <motion.div
      className="absolute top-20 left-4 bg-[#0D0D0D]/80 border border-[#00F0FF]/40 rounded p-2 w-64"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <p className="text-[#FFD700] font-bold">SYSTEM DIAGNOSTICS</p>
      <div className="mt-2 space-y-1">
        <p>CPU Load: <span className="text-[#00FF00]">{cpuLoad}%</span></p>
        <p>RAM (Est.): <span className="text-[#00FF00]">{ram} GB</span></p>
        <p>Battery: 
          <span className="text-[#00FF00]">
            {(battery.level * 100).toFixed(0)}% {battery.charging ? "(Charging)" : ""}
          </span>
        </p>
        <p>Network: 
          <span className={isOnline ? "text-[#00FF00]" : "text-[#FF0066]"}>
            {isOnline ? "Online" : "Offline"}
          </span>
        </p>
      </div>
    </motion.div>
  );
};

export default SystemPanel;
