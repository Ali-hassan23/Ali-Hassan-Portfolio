import React from "react";
import SocialLinks from "./SocialLinks";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer bg-neutral flex sm:flex-row flex-col items-center justify-around text-neutral-content p-10">
      <aside>
        <h1 className="text-3xl mx-16">AH</h1>
        <Link href="mailto:alihassan060104@gmail.com" className="hover:underline">alihassan060104@gmail.com</Link>
      </aside>
      <nav>
        <h6 className="footer-title">Socials</h6>
        <SocialLinks />
      </nav>
    </footer>
  );
};

export default Footer;
