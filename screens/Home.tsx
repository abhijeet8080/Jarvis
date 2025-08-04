import IronManCanvas from "@/components/IronManCanvas";
import JarvisLaunchButton from "@/components/JarvisLaunchButton";
import JarvisOverlay from "@/components/JarvisOverlay";
import React from "react";

const Home = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <IronManCanvas />
      <JarvisOverlay />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[-80%] z-20">
        <JarvisLaunchButton />
      </div>
    </div>
  );
};

export default Home;
