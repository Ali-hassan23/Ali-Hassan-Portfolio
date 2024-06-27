"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { ContactForm } from "./ContactForm";
import Heading from "../Heading";
import WaterDropGrid from "./WaterDropGrid";

const ContactPage = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        x: 0,
      });
    }
  });

  return (
    <div>
      <div className="my-5">
        <Heading heading="Contact Me" />
      </div>
      <div className="relative flex flex-col items-center justify-center mt-10 sm:mt-5">
        <div className="max-w-4xl h-full absolute mx-auto flex justify-center items-center z-0 mt-5">
          <WaterDropGrid />
        </div>

        <motion.div
          ref={ref}
          initial={{ x: "-100%", opacity: 0 }}
          animate={controls}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="relative z-10 w-full max-w-3xl mt-6"
        >
          <ContactForm />
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
