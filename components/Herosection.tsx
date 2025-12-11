"use client";
import React from "react";
import { anton, adamina } from "@/app/fonts";
import github from "@/asset/icons/github.svg";
import linkedin from "@/asset/icons/linkedin.svg";
import { motion } from "framer-motion";
import Link from "next/link";

function Herosection() {
  return (
    <section className="w-full h-dvh flex flex-col justify-center relative    xl:px-30  px-10  max-md:px-4 overflow-hidden">
      <motion.div
        className="flex flex-col gap-10 absolute bottom-30 right-10 max-lg:hidden"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Link
          href="https://github.com/hashalagayendra"
          className="cursor-pointer hover:scale-110 transition-transform"
        >
          <img height={40} width={40} src={github.src} alt="GitHub" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/hashala-gayendra/"
          className="cursor-pointer hover:scale-110 transition-transform"
        >
          <img height={40} width={40} src={linkedin.src} alt="LinkedIn" />
        </Link>
      </motion.div>
      <div className=" flex flex-col  justify-center gap-10  ">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={` text-8xl font-bold text-white/75 ${anton.className} tracking-wide leading-30 max-lg:text-start max-md:text-6xl max-lg:text-7xl  max-md:leading-20 `}
        >
          <span>Hi, I'm</span> <br />
          <span className={`text-green-500/75`}>Hashala Gayendra</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`text-white/75 w-full max-w-3xl text-2xl leading-10 tracking-wider max-lg:text-start  max-lg:self-start   max-md:text-lg ${adamina.className} flex flex-col gap-4`}
        >
          <p>
            Welcome to my portfolio! I’m passionate about creating modern,
            scalable, and reliable web applications.
          </p>
          <p className="text-white/50 text-xl max-md:text-base">
            Explore my work to see how I build full-stack solutions, AI-powered
            systems, and cloud-ready applications.
          </p>
        </motion.div>
        <motion.a
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          href="/cv/R.A.H.G Ranasingha_CV.pdf"
          download="R.A.H.G Ranasingha_CV.pdf"
          className={`bg-green-500/65 hover:-translate-y-1 hover:scale-102 hover:bg-green-500/75 transition-all  duration-500 ease-in-out w-fit py-4 px-8 max-lg:py-2 max-lg:px-4 max-lg:self-start cursor-pointer`}
        >
          <h1 className={`tracking-wider ${adamina.className} lg:text-xl`}>
            Download CV
          </h1>
        </motion.a>
      </div>
    </section>
  );
}

export default Herosection;
