"use client";
import React from "react";
import { adamina, anton } from "@/app/fonts";
import { motion } from "framer-motion";

function Aboutme() {
  return (
    <section
      id="about"
      className="w-full scroll-mt-24 xl:px-32 px-6 md:px-12 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative"
      >
        {/* Large Background Text for Style */}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-10">
          {/* Left Column: Headline & Intro */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <h2
              className={`text-5xl md:text-6xl text-white/75 ${anton.className} leading-tight`}
            >
              I'm <span className="text-green-500/75">Hashala Gayendra</span>
            </h2>
            <div className="w-24 h-2 bg-green-500" />
            <p
              className={`text-xl md:text-2xl text-white/75 ${adamina.className} leading-relaxed mt-4`}
            >
              An undergraduate IT student at the{" "}
              <span className="text-white border-b-2 border-green-500/30">
                University of Sri Jayewardenepura
              </span>{" "}
              who enjoys working on full-stack web development and practical
              software solutions.
            </p>
          </div>

          {/* Right Column: Detailed Description */}
          <div className="lg:col-span-7 flex flex-col gap-8 lg:pt-4">
            <p
              className={`text-lg md:text-xl text-white/60 ${adamina.className} leading-relaxed`}
            >
              I’m currently learning and building projects using technologies
              like{" "}
              <span className="text-green-400/90">
                JavaScript, TypeScript, React, Next.js, NestJS, PostgreSQL,
                Prisma, Docker, and Azure
              </span>
              . Through my projects, I’ve gained experience creating AI-assisted
              systems, document processing tools, and web applications that
              focus on real user needs.
            </p>
            <p
              className={`text-lg md:text-xl text-white/60 ${adamina.className} leading-relaxed`}
            >
              I’m interested in understanding how modern web technologies, cloud
              platforms, and AI can work together to build reliable and
              easy-to-use applications. I’m always trying to improve my skills
              and learn better ways to build systems that are useful in
              real-world situations.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Aboutme;
