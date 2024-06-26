"use client";
import React from "react";
import ImageSide from "./ImageSide";
import TextSide from "./TextSide";

const HeroSection = () => {
  return (
    <div className="w-screen h-screen flex sm:flex-row flex-col overflow-hidden relative">
      <div className="w-full h-full sm:flex-row flex flex-col overflow-hidden">
        <TextSide />
        <ImageSide />
      </div>
    </div>
  );
};

export default HeroSection;
