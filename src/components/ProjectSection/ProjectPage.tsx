"use client";
import React, { useEffect, useState } from "react";
import Heading from "../Heading";
import getAllProjects from "@/lib/getData";
import ProjectCard from "./ProjectCard";
import Image from "next/image";
import RevealCard from "../RevealCards";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const ProjectPage = () => {
  const [projects, setProjects] = useState<projectType[]>([]);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const list = getAllProjects();
    setProjects(list);
  }, []);

  const handleViewMore = () => {
    setExpanded(!expanded);
  };

  const displayedProjects = expanded ? projects : projects.slice(0, 3);

  return (
    <div className="h-full w-full flex flex-col relative mb-5 sm:mb-0">
      <Heading heading="Projects" />
      <div className="relative flex sm:w-[85%] w-full mx-auto flex-col gap-5">
        <div className="sm:w-72 w-32 sm:h-36 h-20 bg-dot-white/[0.5] absolute mt-10 z-0"></div>
        <div className="flex flex-wrap w-full justify-center items-center sm:mt-8 mt-20 gap-5 z-10">
          {displayedProjects.map((project, index) => (
            <RevealCard key={index} index={index}>
              <ProjectCard project={project} />
            </RevealCard>
          ))}
        </div>
        {projects.length > 3 && (
          <button
            onClick={handleViewMore}
            className="mt-4 mx-auto px-4 flex items-center justify-center rounded-full py-2 bg-transparent text-white"
          >
            {expanded ? (
              <>
                Show Less <FaAngleUp />
              </>
            ) : (
              <>
                View More <FaAngleDown />
              </>
            )}
          </button>
        )}
        <Image
          src="/lines-bg.png"
          alt="Lines"
          width={120}
          height={120}
          className="self-end transform -rotate-90 right-5 bottom-0 opacity-30 absolute z-0 w-auto h-auto"
        />
      </div>
    </div>
  );
};

export default ProjectPage;
