"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Trash2, CheckCircle2, PlusCircle } from "lucide-react";

type Task = {
  id: number;
  text: string;
  completed: boolean;
};

const TaskPanel = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: "Finish AI Core System Integration", completed: false },
    { id: 2, text: "Monitor Network Packets", completed: false },
    { id: 3, text: "Run Diagnostics for Targeting System", completed: false },
    { id: 4, text: "Update User Interface Overlay", completed: false },
  ]);

  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() === "") return;
    setTasks((prev) => [
      ...prev,
      { id: Date.now(), text: input.trim(), completed: false },
    ]);
    setInput("");
  };

  const toggleComplete = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <motion.div
      className="absolute bottom-4 right-4 bg-[#0D0D0D]/80 border border-[#00F0FF]/40 rounded p-2  w-64 z-20 pointer-events-auto"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.1 }}
    >
      <p className="text-[#FFD700] font-bold">TASK MANAGER</p>

      {/* Input Field */}
      <div className="flex items-center gap-2 mt-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="New task..."
          className="flex-1 bg-transparent border border-[#00F0FF]/30 text-[#00F0FF] px-2 py-1 text-xs rounded outline-none"
        />
        <button onClick={addTask}>
          <PlusCircle className="h-4 w-4 text-[#00F0FF] hover:text-[#00FF00] transition" />
        </button>
      </div>

      {/* Task List */}
      <div className="mt-3 space-y-2 text-[#00F0FF] text-xs max-h-40 overflow-y-auto pr-1 custom-scrollbar">
        {tasks.length === 0 ? (
          <p className="text-[#FF0066] text-center">No active tasks.</p>
        ) : (
          tasks.map((task) => (
            <div key={task.id} className="flex justify-between items-center">
              <div
                className={`flex items-center gap-2 ${
                  task.completed ? "line-through text-[#888]" : ""
                }`}
              >
                <div
                  className={`w-2 h-2 rounded-full ${
                    task.completed ? "bg-[#888]" : "bg-[#00FF00] animate-pulse"
                  }`}
                ></div>
                <span>{task.text}</span>
              </div>
              <div className="flex gap-1">
                <button onClick={() => toggleComplete(task.id)}>
                  <CheckCircle2 className="h-3 w-3 text-[#00F0FF] hover:text-[#00FF00] transition" />
                </button>
                <button onClick={() => deleteTask(task.id)}>
                  <Trash2 className="h-3 w-3 text-[#FF0066] hover:text-red-600 transition" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </motion.div>
  );
};

export default TaskPanel;
