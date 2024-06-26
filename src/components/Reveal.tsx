'use client'
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface Props {
  children: JSX.Element;
  width?: "fit-contnet" | "100%";
}

const Reveal = ({ children, width = "fit-contnet" }: Props) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once : false });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
      });
    }
  });
  return (
    <div ref={ref} className={`relative overflow-hidden`} style={{ width }}>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={controls}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
