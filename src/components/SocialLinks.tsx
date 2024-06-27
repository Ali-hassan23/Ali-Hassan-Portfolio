import Link from "next/link";
import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="flex gap-4">
      <Link href="https://github.com/Ali-hassan23">
        <FaGithub size={35} />
      </Link>
      <Link href="https://www.linkedin.com/in/ali-hassan-03b930224/">
        <FaLinkedin size={35} />
      </Link>
      <Link href="mailto:alihassan060104@gmail.com">
        <FaEnvelope size={35} />
      </Link>
    </div>
  );
};

export default SocialLinks;
