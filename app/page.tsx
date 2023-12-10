"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Blur, Navbar, Preloader, Socials , Contact } from "@/components";
import { fadeInAnimation } from "@/utils/framerAnimations";
import {About} from "@/components/About"
import Experience from "@/components/Experience";
import Project from "@/components/Project"
import Image from "next/image";


export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Preloader setIsLoading={setIsLoading} />
        ) : (
          <motion.main
            className="container relative mx-auto flex min-h-screen w-full items-center justify-center bg-neutral-900 uppercase text-white"
            {...fadeInAnimation}
          >
            <motion.div className="page-content" {...fadeInAnimation}>
              <Navbar />

              <Blur />

              <div
      className="h-full flex flex-col justify-center
      px-8 2xl:px-72 xl:px-56 lg:px-32  md:px-28 sm:px-8 py-32 sm:py-52  "
    >
      <motion.span
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: 0.2 },
          y: { delay:0.2 },
        }}
        className="text-AAsecondary font-mono"
      >
        Hi, my name is
      </motion.span>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: 0.2 },
          y: { delay:0.2 },
        }}
        className="text-gray-300 font-bold text-3xl lg:text-7xl sm:text-5xl md:text-6xl mt-4"
      >
        Subhan Abidi.
      </motion.h1>
      <motion.h2
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: 0.2 },
          y: { delay:0.2 },
        }}
        className="text-gray-400 font-bold text-3xl lg:text-7xl sm:text-5xl md:text-6xl mt-4"
      >
        Full Stack Engineer.
      </motion.h2>

      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: 0.2 },
          y: { delay:0.2 },
        }}
        className="text-gray-400 font-Header text-sm md:text-lg sm:text-md mt-10 tracking-wider"
      >
        I&apos;m a <span className="text-AAsecondary">Full Stack engineer</span>, I have developed robust and scalable web applications for various industries, such as  <br className="2xl:block hidden" />
        health-tech, e-commerce, and AI, using React.js, Node.js, PHP, Python, Next.js, TypeScript, JavaScript, and other cutting-edge technologies.  <span className="text-AAsecondary"> I have over 4+ years of professional experience,</span>,
         working with diverse and crossfunctional teams,<br className="2xl:block hidden"/>
         delivering high-quality code  <span className="text-AAsecondary">and solutions, and continuously learning new skills and tools.</span>. 
       
      </motion.h3>

      <motion.div
                {...fadeInAnimation}
                transition={{ delay: 3, duration: 3 }}
              >
                <Image
                  src="/arrow-up.svg"
                  alt=""
                  width={125}
                  height={125}
                  className="absolute right-4 top-28 animate-pulse opacity-90 md:right-28"
                />
              </motion.div>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: 0.2 },
          y: { delay:0.2 },
        }}
        className="mt-12"
      >
        <a href={"/Subhan-Resume.pdf"} target={"_blank"} rel="noreferrer">
          <button className="bg-AAprimary text-AAsecondary border rounded px-4 sm:px-8 py-3 sm:py-4 border-AAsecondary">
            Check out my resume!
          </button>
        </a>
      </motion.div>


      <About/>

      <Experience/>
     
      
    </div>

    <Project/> 
    <Contact/>
              <Socials />
            </motion.div>
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
}
