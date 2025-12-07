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
          About <span className="text-green-500/75">Me</span>
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
          <span className="mb-5 block">
            I’m Hashala, an undergraduate IT student and full-stack developer
            who loves turning ideas into simple, clean, and functional web
            applications. I mainly work with Next.js, NestJS, Prisma, and
            PostgreSQL, and I enjoy building projects that solve real problems
            and feel great to use. I’m always learning, experimenting, and
            improving my craft as I grow in the world of web development.
          </span>
          {/* <span>
            I'm passionate about creating software that not only functions
            flawlessly but also makes a meaningful difference. Whether it's
            simplifying complex workflows, automating tedious tasks, or
            connecting people with the services they need, I measure success by
            the problems solved.
          </span> */}
        </motion.h1>
      </div>
    </section>
  );
}

export default Aboutme;
