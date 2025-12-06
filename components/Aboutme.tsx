"use client";
import React from "react";
import { adamina, anton } from "@/app/layout";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "motion/react";

function Aboutme() {
  return (
    <section className="w-full   ">
      <div>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.35 }}
          className={`text-6xl text-white/75  ${anton.className}   max-lg:text-5xl max-lg:text-start  max-md:text-4xl`}
        >
          Hi, I'm <span className="text-green-500/75">Tajmirul</span>
        </motion.h1>
      </div>
      <div className="w-full pl-10  max-md:pl-5 mt-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.35 }}
          className={`text-3xl text-white/50 leading-13 tracking-wider  w-full   max-lg:text-2xl max-lg:leading-10  max-md:text-base max-md:leading-8 ${adamina.className}`}
        >
          I'm a frontend web developer dedicated to turning ideas into creative
          solutions. My approach focuses on creating scalable, high-performing
          experiences tailored to user needs and business objectives. By
          prioritizing performance, accessibility, and responsiveness, I strive
          to deliver results that engage users and drive impact.
        </motion.h1>
      </div>
    </section>
  );
}

export default Aboutme;
