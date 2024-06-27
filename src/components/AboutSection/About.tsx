import React from "react";
import Reveal from "../Reveal";
import Image from "next/image";
import Heading from "../Heading";
import SlideReveal from "../SliderReveal";

const AboutPage = () => {
  return (
    <div className="w-full h-full flex flex-col relative">
      <h1 className="mt-16">
        <Heading heading="About Me" />
      </h1>

      <div className="relative flex sm:w-[85%] w-full mx-auto flex-col gap-5">
        <div className="sm:w-72 w-32 sm:h-36 h-20 bg-dot-white/[0.5] absolute mt-10 z-0"></div>
        <div className="flex flex-col max-w-5xl mx-auto mt-10">
          <SlideReveal>
            <div className="flex flex-col gap-7 my-9 text-center">
              <p className="text-sm sm:text-lg z-10 p-3">
                Hi there! I&apos;m Ali Hassan, a passionate and dedicated web
                developer with expertise in the MERN stack (MongoDB, Express.js,
                React, and Node.js) and various other database technologies.
                With a strong foundation in both front-end and back-end
                development, I excel at creating full-stack applications that
                are not only functional but also beautifully designed and
                user-friendly. My journey in web development has been driven by
                a deep love for design and a commitment to effective
                communication. I believe that the best applications are built
                through clear and continuous dialogue, ensuring that the final
                product aligns perfectly with client needs and user
                expectations. Whether it&apos;s crafting sleek, responsive
                interfaces or architecting robust server-side solutions, I bring
                creativity and precision to every project I undertake.
              </p>
            </div>
          </SlideReveal>
          <Image
            src="/lines-bg.png"
            width={120}
            height={120}
            className="self-end absolute sm:right-5 right-2 bottom-0 opacity-30 z-0"
            alt="Lines"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
