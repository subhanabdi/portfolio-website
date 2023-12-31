"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Blur, Navbar, Socials } from "@/components";
import { fadeInAnimation } from "@/utils/framerAnimations";
import Project from "@/components/Project"



export default function Projects() {
  return (
    <>
      <AnimatePresence mode="wait">
        <motion.main
          className="mx-auto flex min-h-screen items-center justify-center bg-neutral-900 text-white"
          {...fadeInAnimation}
        >
          <motion.div className="page-content" {...fadeInAnimation}>
            <Blur />
            <Navbar />
            <Project/>
           
            <Socials />
          </motion.div>
        </motion.main>
      </AnimatePresence>
    </>
  );
};