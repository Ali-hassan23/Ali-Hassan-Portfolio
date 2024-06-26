import React from "react";
import Reveal from "../Reveal";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Link from "next/link";

const TextSide = () => {
  const [text] = useTypewriter({
    words: [
      "Front End Developer",
      "Back End Developer",
      "Full Stack Developer",
      "Software Engineer",
    ],
    loop: 0,
    deleteSpeed: 100,
    typeSpeed: 50,
  });
  return (
    <div className="sm:w-1/2 w-full bg-zinc-900 bg-dot-white/[0.2] text-white sm:h-screen h-1/2">
      <Reveal>
        <section className="w-full h-full flex flex-col justify-center sm:mt-36 gap-6 sm:px-10 px-5 pt-5">
          <div className="mt-20 flex flex-col">
            <p className="sm:text-2xl text-xl font-extrabold">HI THERE</p>
            <p className="text-3xl sm:text-5xl font-bold">MY NAME IS HASSAN</p>
            <h1 className="text-2xl font-semibold">
              I am a{" "}
              <span className="text-yellow-500 font-bold sm:text-3xl text-2xl">{text}</span>
              <Cursor cursorStyle="_" />
            </h1>
          </div>
          <div className="flex flex-row gap-4">
            <button className="relative overflow-hidden shadow-[0px 4px 14px rgba(0,118,255,0.39)] bg-zinc-900 border border-yellow-500 text-yellow-500 hover:bg-yellow-500 sm:px-8 px-5 sm:py-2 py-1 rounded-md transition duration-200 ease-linear transform hover:scale-105 hover:text-black text-xl font-medium">
              <span className="relative z-10">Hire Me</span>
              <span className="absolute inset-0 bg-white opacity-10"></span>
            </button>
            <button className="sm:px-6 px-5 sm:py-2 py-1 font-medium bg-indigo-500 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
              Learn More
            </button>
          </div>
        </section>
      </Reveal>
    </div>
  );
};

export default TextSide;
