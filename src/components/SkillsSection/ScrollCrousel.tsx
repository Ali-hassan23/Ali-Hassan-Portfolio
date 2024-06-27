import React, { useEffect } from "react";
import LogoCard from "./LogoCard";
import useMeasure from "react-use-measure";
import { animate, useMotionValue, motion } from "framer-motion";
// import { useMeasure } from "@react-hookz/web";

const logos = [
  "/logos/bootstrap.png",
  "/logos/javascript.png",
  "/logos/mongodb.png",
  "/logos/reactjs.png",
  "/logos/nodejs.png",
  "/logos/tailwind.png",
  "/logos/nextjs-icon.png",
  "/logos/postgre.png",
  "/logos/typescript.png",
  "/logos/mySQL.png",
];

const ScrollCrousel = () => {
  let [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 8;

    controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 25,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });
    return controls.stop;
  }, [xTranslation, width]);
  return (
    <div className="py-8">
      <motion.div
        className="absolute left-0 flex gap-16 bg-transparent py-4"
        ref={ref}
        style={{ x: xTranslation }}
      >
        {[...logos, ...logos].map((item, index) => (
          <LogoCard image={item} key={index} />
        ))}
      </motion.div>
    </div>
  );
};

export default ScrollCrousel;
