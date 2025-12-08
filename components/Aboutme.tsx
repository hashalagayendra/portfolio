"use client";
import React from "react";
import { adamina, anton } from "@/app/layout";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "motion/react";

function Aboutme() {
  return (
    <div className="relative mt-10  overflow-hidden">
      <motion.div
        className="absolute bg-green-500/10 h-full -top-8 w-full  -z-10"
        initial={{ x: "100%" }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true }}
      ></motion.div>
      <section className="w-full py-10 relative   xl:px-30  px-10  max-md:px-4 ">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.35 }}
            className={`text-6xl text-white/75  ${anton.className}   max-lg:text-5xl max-lg:text-start  max-md:text-4xl`}
          >
            About <span className="text-green-500/75">Me</span>
          </motion.h1>
        </div>
        <div className="w-full mt-16 pt-4 pb-9 md:px-12 lg:px-20 mx-auto max-w-7xl ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.35 }}
            className="relative"
          >
            <span className="absolute -top-10 -left-6 md:-left-10 text-9xl text-green-400 font-serif leading-none select-none max-md:text-7xl  ">
              “
            </span>
            <p
              className={`text-3xl text-white/75 leading-relaxed tracking-wide w-full max-lg:text-2xl max-md:text-lg ${adamina.className} relative z-10 py-4 `}
            >
              I’m Hashala, an undergraduate IT student and full-stack developer
              who loves turning ideas into simple, clean, and functional web
              applications. I mainly work with Next.js, NestJS, Prisma, and
              PostgreSQL, and I enjoy building projects that solve real problems
              and feel great to use. I’m always learning, experimenting, and
              improving my craft as I grow in the world of web development.
            </p>
            <span className="absolute -bottom-16 right-0 md:-right-4 text-9xl text-green-400 font-serif leading-none select-none max-md:text-7xl">
              ”
            </span>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Aboutme;
