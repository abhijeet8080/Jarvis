"use client";
import SystemPanel from "./panels/SystemPanel";
import TimeWeatherPanel from "./panels/TimeWeatherPanel";
import UserPanel from "./panels/UserPanel";
import TaskPanel from "./panels/TaskPanel";

export default function JarvisOverlay() {


  return (
    <div className="absolute inset-0 z-10 pointer-events-none text-[#00F0FF] font-mono text-xs">

      {/* SYSTEM PANEL */}
      <SystemPanel />

      {/* TIME + WEATHER PANEL */}
      
      <TimeWeatherPanel />
      {/* USER PANEL */}
      <UserPanel />

      {/* Task PANEL */}
      <TaskPanel />
    </div>
  );
}
