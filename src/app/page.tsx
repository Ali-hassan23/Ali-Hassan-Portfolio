"use client";
import HeroSection from "@/components/HeroSection/HeroSection";
import Sidebar from "@/components/Sidebar";
import { FaArrowDown } from "react-icons/fa";
import { easeIn, motion } from "framer-motion";
import About from "@/components/AboutSection/About";
import ProjectPage from "@/components/ProjectSection/ProjectPage";
import ContactPage from "@/components/ContactSection/ContactPage";

export default function Home() {
  const handleScroll = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
      <div className="relative overflow-hidden">
        <main>
          <HeroSection />
          <div className="min-h-[100vh]">
            <About />
          </div>
          <div className="min-h-[100vh]">
            <ProjectPage />
          </div>
          <div className="h-[100vh]"><ContactPage /></div>
        </main>
        <div className="fixed hidden sm:block bottom-3 right-2">
          <button
            className="rounded-full bg-gray-700 p-3 text-gray-400"
            onClick={handleScroll}
          >
            <FaArrowDown size={30} />
          </button>
        </div>
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
