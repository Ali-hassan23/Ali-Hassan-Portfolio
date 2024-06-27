"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface Props {
  children: JSX.Element;
  width?: "fit-contnet" | "100%";
}

const SlideReveal = ({ children, width = "fit-contnet" }: Props) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });

  const controls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
      });
      slideControls.start("visible");
    }
  });
  return (
    <div ref={ref} className={`relative overflow-hidden`} style={{ width }}>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={controls}
        transition={{ duration: 0.4, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{ hidden: { left: 0 }, visible: { left: "100%" } }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeIn" }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: "yellow",
          zIndex: 20,
        }}
      ></motion.div>
    </div>
  );
};

export default SlideReveal;
