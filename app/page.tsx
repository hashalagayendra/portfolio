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
    <div className=" xl:px-30  px-10  max-md:px-4">
      <Herosection />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-col gap-30 "
      >
        <Aboutme />
        <Stack />
        <Projects />
        <Contact />
      </motion.div>
    </div>
  );
}
