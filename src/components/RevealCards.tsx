"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface Props {
  children: JSX.Element;
  width?: "fit-contnet" | "100%";
  index: number;
}

const RevealCard = ({ children, width = "fit-contnet", index }: Props) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });

  const controls = useAnimation();

  const even: boolean = index % 2 === 0;

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        x: 0,
      });
    }
  });

  return (
    <div ref={ref} className={`relative overflow-hidden`} style={{ width }}>
      <motion.div
        initial={{ opacity: 0, x: even ? 100 : -100 }}
        animate={controls}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default RevealCard;
