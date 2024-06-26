"use client";
import HeroSection from "@/components/HeroSection/HeroSection";
import Sidebar from "@/components/Sidebar";
import { FaArrowDown } from "react-icons/fa";
import { easeIn, motion } from "framer-motion";
import About from "@/components/AboutSection/About";
import ProjectPage from "@/components/ProjectSection/ProjectPage";
import ContactPage from "@/components/ContactSection/ContactPage";
import { FloatingNav } from "@/components/ui/floating-navbar";
import {
  IconHome,
  IconMessage,
  IconPackage,
  IconUser,
} from "@tabler/icons-react";

export default function Home() {
  const handleScroll = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };
  const navItems = [
    {
      name: "Home",
      link: "#home",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "#about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Projects",
      link: "#projects",
      icon: (
        <IconPackage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Contact",
      link: "#contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];

  return (
    <div className="relative overflow-hidden scroll-smooth">
      <main>
        <div id="home">
          <HeroSection />
        </div>

        <div id="about" className="min-h-[100vh]">
          <About />
        </div>
        <div id="projects" className="min-h-[100vh]">
          <ProjectPage />
        </div>
        <div id="contact" className="h-[100vh]">
          <ContactPage />
        </div>
      </main>
      <div className="fixed hidden sm:block bottom-3 right-2">
        <button
          className="rounded-full bg-gray-700 p-3 text-gray-400"
          onClick={handleScroll}
        >
          <FaArrowDown size={30} />
        </button>
      </div>
      <FloatingNav navItems={navItems} />
      {/* <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: easeIn }}
          className="fixed right-2 top-1/2 transform -translate-y-1/2"
        >
          <Sidebar />
        </motion.nav> */}
    </div>
  );
}
