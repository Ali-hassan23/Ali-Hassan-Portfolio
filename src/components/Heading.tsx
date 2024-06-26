"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

interface HeadingProps {
  heading: string;
}

const Heading = ({ heading }: HeadingProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({
        x: 0,
        opacity: 1,
      });
    }
  });

  return (
    <div>
      <div
        ref={ref}
        className="flex w-full justify-center mt-6 relative text-white"
      >
        <motion.h1
          className="z-10 text-4xl font-bold relative"
          initial={{ x: "100%", opacity: 0 }}
          animate={controls}
          transition={{ duration: 0.7 }}
        >
          {heading}
        </motion.h1>
        <motion.div
          className="w-48 z-0 bg-yellow-400 h-4 bottom-0 mt-3 ml-4 absolute bg-opacity-75"
          initial={{ x: "-100%", opacity: 0 }}
          animate={controls}
          transition={{ duration: 0.7 }}
        ></motion.div>
      </div>
    </div>
  );
};

export default Heading;
