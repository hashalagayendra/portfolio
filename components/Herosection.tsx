"use client";
import React from "react";
import { anton, adamina } from "@/app/layout";
import github from "@/asset/icons/github.svg";
import linkedin from "@/asset/icons/linkedin.svg";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "motion/react";
import Link from "next/link";

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
        <Link href="https://github.com/hashalagayendra">
          <img height={40} width={40} src={github.src} alt="GitHub" />
        </Link>
        <Link href="https://www.linkedin.com/in/hashala-gayendra/">
          <img height={40} width={40} src={linkedin.src} alt="LinkedIn" />
        </Link>
      </motion.div>
      <div className=" flex flex-col  justify-center gap-10  ">
        <h1
          className={` text-8xl font-bold text-white/75 ${anton.className} tracking-wide leading-30 max-lg:text-start max-md:text-6xl max-lg:text-7xl  max-md:leading-20 `}
        >
          <span>Hi, I'm</span> <br />
          <span className={`text-green-500/75`}>Hashala Gayendra</span>
        </h1>
        <h1
          className={`text-white/75 w-full max-w-2xl text-2xl leading-10 tracking-wider max-lg:text-start  max-lg:self-start   max-md:text-lg ${adamina.className}`}
        >
          I’m an undergraduate IT student and full-stack developer, passionate
          about building modern, scalable, and high-performance web
          applications.
        </h1>
        <div
          className={`bg-green-500/75 hover:bg-black transition-colors duration-500 ease-in-out w-fit py-4 px-8 max-lg:py-2 max-lg:px-4 max-lg:self-start cursor-pointer`}
        >
          <h1 className={`tracking-wider ${adamina.className} lg:text-xl`}>
            Download CV
          </h1>
        </div>
      </div>
    </section>
  );
}

export default Herosection;
