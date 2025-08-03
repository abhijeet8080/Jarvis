import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PanelInterface } from "./PanelInterface";

const TimeWeatherPanel = ({focused,onFocus}:PanelInterface) => {
  const [weather, setWeather] = useState("Fetching weather...");
  const [city, setCity] = useState("Locating...");
  const [humidity, setHumidity] = useState("");
  const [time, setTime] = useState(new Date());

  // ⏰ Update time every second

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const fetchWeather = async (lat: number, lon: number) => {
      console.log("FetchWeather called with:", lat, lon);
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY}&units=metric`
        );
        const data = await res.json();
        console.log("Data found:", data);
        setCity(data.name);
        setHumidity(`${data.main.humidity}%`);
        setWeather(`${data.main.temp}°C, ${data.weather[0].description}`);
      } catch (err) {
        console.error("Failed to fetch weather:", err);
        setWeather("Weather unavailable");
      }
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          fetchWeather(latitude, longitude);
        },
        (error) => {
          console.error("Geolocation error:", error);
          setWeather("Location denied");
          setCity("Unknown");
        }
      );
    } else {
      setWeather("Geolocation not supported");
      setCity("N/A");
    }
  }, []);
  return (
    
      <motion.div
        onClick={onFocus}
        className={`absolute top-20 right-4 bg-[#0D0D0D]/80 border border-[#00F0FF]/40 rounded p-2 w-64 cursor-pointer transition-all duration-300 ${
    focused ? "z-50 scale-105 shadow-2xl" : "z-10"
  }`}
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <p className="text-[#FFD700] font-bold">ENVIRONMENT</p>
        <div className="mt-2 space-y-1">
          <p>City: {city}</p>
          <p>Weather: {weather}</p>
          <p>Humidity: {humidity}</p>
          <p suppressHydrationWarning>Time: {time.toLocaleTimeString()}</p>
          <p>Date: {time.toDateString()}</p>
        </div>
      </motion.div>
  );
};

export default TimeWeatherPanel;
