"use client";
import React from "react";
import { anton, adamina } from "@/app/layout";
import github from "@/asset/icons/github.svg";
import linkedin from "@/asset/icons/linkedin.svg";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "motion/react";

function Herosection() {
  return (
    <section className="w-full h-dvh flex flex-col justify-center relative">
      <motion.div
        className="flex flex-col gap-10 absolute bottom-30 xl:-right-25 right-0 max-lg:hidden"
        initial={{ opacity: 0, x: 16 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <img height={40} width={40} src={github.src} alt="GitHub" />
        <img height={40} width={40} src={linkedin.src} alt="LinkedIn" />
      </motion.div>
      <div className=" flex flex-col  justify-center gap-10  ">
        <h1
          className={` text-7xl font-bold text-white/75 ${anton.className} tracking-wide leading-25 max-lg:text-start max-md:text-5xl  max-md:leading-20 `}
        >
          <span>Undergraduate</span> <br />
          <span className={`text-green-500/75`}>Fullstack Developer</span>
        </h1>
        <h1
          className={`text-white/75 w-full max-w-2xl text-2xl leading-10 tracking-wider max-lg:text-start  max-lg:self-start   max-md:text-lg ${adamina.className}`}
        >
          Hi! I'm Tajmirul, a creative frontend developer with 3+ years of
          experience building high-performance, scalable, and responsive web
          solutions.
        </h1>
        <div
          className={`bg-green-500/80 hover:bg-green-500 w-fit py-2 px-5  max-lg:self-start `}
        >
          <h1 className={`tracking-wider ${adamina.className}`}>Download CV</h1>
        </div>
      </div>
    </section>
  );
}

export default Herosection;
