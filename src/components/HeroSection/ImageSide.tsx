"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

const ImageSide = () => {
  const controls = useAnimation();

  useEffect(() => {
    // Start the y-axis animation after the x-axis animation completes
    const sequence = async () => {
      await controls.start({
        x: "0%",
        transition: { duration: 0.5, ease: "easeOut" },
      });
      await controls.start({
        opacity: 1,
        y: "0%",
        transition: { duration: 0.3, ease: "easeOut" },
      });
    };

    sequence();
  }, [controls]);

  return (
    <div className="bg-gray-500 sm:h-screen h-1/2 sm:w-1/2 w-full"></div>
    // <div className="h-screen w-1/2 overflow-hidden">
    //   <motion.div
    //     className="bg-black h-full"
    //     initial={{ x: "100%" }}
    //     animate={controls}
    //   >
    //     <div className="flex items-end justify-center w-full h-screen">
    //       <motion.div
    //         className="w-72 h-80 "
    //         initial={{ y: "70%", opacity: 0 }}
    //         animate={controls}
    //       >
    //         <Image src="/imgHa.png" width={200} height={500} alt="My Image" className="w-full "/>
    //       </motion.div>
    //     </div>
    //   </motion.div>
    // </div>
  );
};

export default ImageSide;
