"use client";
import Particles from "@/components/Particles";
import Image from "next/image";
import { anton, adamina } from "./layout";
import Stack from "@/components/Stack";
import Projects from "@/components/Projects";
import { motion } from "motion/react";

import Herosection from "@/components/Herosection";

import Aboutme from "@/components/Aboutme";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className=""
    >
      <div className="  max-w-[1920px] mx-auto">
        <Herosection />
      </div>

      <div className="flex flex-col gap-30 max-w-[1920px] mx-auto">
        <Aboutme />
        <Stack />
        <Projects />
        <Contact />
      </div>
    </motion.div>
  );
}
