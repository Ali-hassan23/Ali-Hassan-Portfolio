"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

type PropTypes = {
  project: projectType;
};

const ProjectCard = ({ project }: PropTypes) => {
  const [expanded, setExpanded] = useState(false);

  const toggleReadMore = () => {
    setExpanded(!expanded);
  };

  const description = project.description;
  const shortDescription =
    description.slice(0, 100) + (description.length > 100 ? "..." : "");

  return (
    <div className="rounded-t-none card bg-base-100 w-80 h-[420px] shadow-xl overflow-hidden">
      <Image
        src={project.thumbnail}
        alt={project.title}
        height={400}
        width={400}
        className="w-full h-48 object-cover"
      />
      <div className="card-body p-4">
        <motion.h2
          className="card-title w-full text-xl font-bold mb-2 text-white text-center cursor-pointer"
          whileHover={{ textDecoration: "none" }}
        >
          <motion.span
            whileHover={{
              textDecoration: "underline",
              transition: { duration: 0.3 },
            }}
          >
            {project.title}
          </motion.span>
        </motion.h2>
        <p className="text-sm text-gray-400">
          {expanded ? description : shortDescription}
        </p>
        {!expanded && description.length > 100 && (
          <button
            onClick={toggleReadMore}
            className="text-blue-500 font-semibold mt-2"
          >
            Read More
          </button>
        )}
        {expanded && (
          <button
            onClick={toggleReadMore}
            className="text-blue-500 font-semibold mt-2"
          >
            Show Less
          </button>
        )}
        <div className="card-actions justify-end mt-4">
          <Link href={project.websiteLink} className="px-6 py-2 font-medium bg-indigo-500 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
