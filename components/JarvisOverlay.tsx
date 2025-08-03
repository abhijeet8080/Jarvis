"use client";
import SystemPanel from "./panels/SystemPanel";
import TimeWeatherPanel from "./panels/TimeWeatherPanel";
import UserPanel from "./panels/UserPanel";
import TaskPanel from "./panels/TaskPanel";
import { useState } from "react";

export default function JarvisOverlay() {

  const [focusedPanel, setFocusedPanel] = useState<string | null>(null);

  return (
    <div className="absolute inset-0 z-10 text-[#00F0FF] font-mono text-xs">

      <SystemPanel panelId="system" focused={focusedPanel === "system"} onFocus={() => setFocusedPanel("system")} />
      <TimeWeatherPanel panelId="time" focused={focusedPanel === "time"} onFocus={() => setFocusedPanel("time")} />
      <TaskPanel panelId="task" focused={focusedPanel === "task"} onFocus={() => setFocusedPanel("task")} />
      <UserPanel panelId="user" focused={focusedPanel === "user"} onFocus={() => setFocusedPanel("user")} />

    </div>
  );
}
