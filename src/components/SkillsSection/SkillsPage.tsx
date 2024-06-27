import React from "react";
import Heading from "../Heading";
import Reveal from "../Reveal";
import SlideReveal from "../SliderReveal";
import ScrollCrousel from "./ScrollCrousel";
import { motion } from "framer-motion";
import RevealCard from "../RevealCards";

const SkillsPage = () => {
  return (
    <div>
      <h1 className="mb-12 sm:mb-0">
        <Heading heading="What I Can Do?" />
      </h1>
      <div className="flex flex-col sm:flex-row gap-5 w-[80%] mx-auto my-4">
        <RevealCard index={0}>
          <div className="max-w-md mx-auto sm:h-52 h-auto bg-zinc-900 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="p-8">
              <SlideReveal>
                <h1 className="text-2xl text-white font-bold sm:text-3xl">
                  Frontend Development
                </h1>
              </SlideReveal>
              <Reveal>
                <p className="mt-4 text-gray-500 text-sm">
                  Strong command over Next.js and React.js for building dynamic
                  web applications. Tailwind CSS for responsive design, along
                  with shadCN, daisyUI, and framerMotion for enhanced UI/UX.
                  Passionate about delivering engaging and performant user
                  experiences.
                </p>
              </Reveal>
            </div>
          </div>
        </RevealCard>
        <RevealCard index={1}>
          <div className="max-w-md mx-auto h-auto sm:h-52 bg-zinc-900 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="p-8">
              <SlideReveal>
                <h1 className="text-2xl text-white font-bold sm:text-3xl">
                  Backend Development
                </h1>
              </SlideReveal>
              <Reveal>
                <p className="mt-4 text-gray-500 text-sm">
                  Express.js for building robust backend services. Databases
                  include MongoDB, PostgreSQL, and MySQL for versatile data
                  management. Focused on creating scalable and efficient
                  server-side applications.
                </p>
              </Reveal>
            </div>
          </div>
        </RevealCard>
      </div>

      <Reveal>
        <div className="max-w-md sm:h-44 h-auto w-[80%] mx-auto bg-zinc-900 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="p-8">
            <SlideReveal>
              <h1 className="text-2xl text-white font-bold sm:text-3xl">
                FullStack Development
              </h1>
            </SlideReveal>
            <Reveal>
              <p className="mt-4 text-gray-500 text-sm">
                Full stack developer with expertise in Next.js and React.js for
                the front end, and Express.js for the backend. Proficient with
                databases like MongoDB, PostgreSQL, and MySQL. Skilled in
                creating end-to-end solutions with a focus on performance and
                user experience.
              </p>
            </Reveal>
          </div>
        </div>
      </Reveal>

      <ScrollCrousel />
    </div>
  );
};

export default SkillsPage;
