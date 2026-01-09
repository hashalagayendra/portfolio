"use client";
import React, { useEffect } from "react";
import { adamina, anton } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Qwizzy_AI_Hero from "@/asset/projects/Qwizzy_AI/homepage.png";
import banner from "@/asset/projects/Qwizzy_AI/banner.png";

import postgresssql from "@/asset/icons/postgresql.svg";
import prisma from "@/asset/icons/prisma.svg";
import tailwindcss from "@/asset/icons/tailwindcss.png";
import nextjs from "@/asset/icons/nextjs.png";
import nextauthjs from "@/asset/icons/nextauthjs.png";
import { motion } from "motion/react";
import { ProjectViews } from "@/lib/trackinFunctions";
function page() {
  const v1 = "/videos/QwizzyAI/v1.webm";
  const v2 = "/videos/QwizzyAI/v2.webm";
  const v3 = "/videos/QwizzyAI/v3.webm";
  const v4 = "/videos/QwizzyAI/v4.webm";
  const v5 = "/videos/QwizzyAI/v5.webm";
  const v6 = "/videos/QwizzyAI/v6.webm";
  const v7 = "/videos/QwizzyAI/v7.webm";
  const v8 = "/videos/QwizzyAI/v8.webm";
  const v9 = "/videos/QwizzyAI/v9.webm";
  const techStack: { name: string; icon: any }[] = [
    { name: "Next.js", icon: nextjs },
    { name: "NextAuth.js", icon: nextauthjs },
    { name: "Tailwind CSS", icon: tailwindcss },
    { name: "PostgreSQL", icon: postgresssql },
    { name: "Prisma", icon: prisma },
  ];

  const features = [
    {
      title:
        "User Authentication with Google OAuth & Credentials (NextAuth.js)",
      description: "",
      subTitles: [
        "Google OAuth Integration lets users log in instantly using their Google account",
        "Credential-Based Login supports traditional login with email and password",
        "Secure Password Hashing hashes passwords using bcrypt for protection.",
      ],
      url: v1,
    },
    {
      title: "User Dashboard Features",
      description: " ",
      subTitles: [
        "Created Papers View shows all papers the user has created",
        "Answered Papers View displays papers the user has already completed",
        "Assigned Papers View lists papers assigned by others for the user to answer",
      ],
      url: v2,
    },
    {
      title: "Paper Creation System",
      description: "",
      subTitles: [
        "Add Paper Title sets a clear and meaningful name for the paper",
        "Add Paper Description provides important details or instructions",
        "Set Time Limit defines the duration for completing the paper",
        "Assign Paper to Users allows selection of one or multiple registered users",
      ],
      url: v3,
    },
    {
      title: "Question Creation",
      description: "",
      subTitles: [
        "Manual Question Entry allows users to type questions and add multiple answer options",
        "AI-Powered Question Generation creates questions and answers automatically from a given topic or description",
      ],
      url: v4,
    },
    {
      title:
        "Document-Based Question Generation with Custom Question and Answer Count",
      description: "",
      subTitles: [
        "PDF Upload Question Generation allows users to upload a document and generate questions from its content",
        "Set Question Count lets users choose how many questions should be created",
        "Set Answer Count allows defining how many answer options each question should have",
      ],
      url: v5,
    },
    {
      title: "Paper Answering System",
      description: "",
      subTitles: [
        "Timed Paper Attempt allows users to answer created papers within the given time",
        "Timed Paper Attempt allows users to answer assigned papers within the given time",
        "Question Navigation lets users skip and move between questions using the sidebar",
      ],
      url: v6,
    },
    {
      title: "Paper Marking and Review",
      description: "",
      subTitles: [
        "View Marks allows users to see their score after submitting a paper",
        "Answer Review lets users check which answers were correct and which were wrong",
      ],
      url: v7,
    },
    {
      title: "Paper Resetting",
      description: "",
      subTitles: [
        "Reset Own Paper allows users to reset and reattempt papers they have created",
        "Assigned Paper Restriction prevents users from resetting papers assigned by others",
      ],
      url: v8,
    },
    {
      title: "PDF Download",
      description: "",
      subTitles: [
        "Download Paper allows users to save any paper as a PDF file",
        "Include Questions and Answers lets the PDF contain all questions and their options",
      ],
      url: v9,
    },
  ];

  useEffect(() => {
    ProjectViews("Qwizzy-AI");
  }, []);

  function FeatureCard({
    title,
    description,
    subTitles,
    url,
    number,
  }: {
    title: string;
    description: string;
    subTitles: string[];
    url: string;
    number: number;
  }) {
    return (
      <div className="flex mt-10 gap-8 max-lg:flex-col max-lg:items-center">
        <div className="flex-1 flex flex-col gap-5 max-w-3xl w-full">
          <div className="flex  gap-5  items-center">
            <h1
              className={`text-6xl text-green-500/75 ${anton.className}  max-md:text-5xl`}
            >
              0{number}
            </h1>
            <h1
              className={`text-3xl text-white/75  ${adamina.className}  max-md:text-xl`}
            >
              {title}
            </h1>
          </div>

          <div
            className={`flex flex-col gap-4 text-white/50 text-lg leading-relaxed pl-6  ${adamina.className}  pl-22  max-md:text-base`}
          >
            <ul className="list-disc list-outside space-y-3">
              {subTitles.map((each, index) => (
                <li key={index}>{each}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex-1 justify-start flex max-lg:justify-center w-full max-lg:hidden">
          {/* <Image
            src={url}
            alt={`Qwizzy AI Feature - ${title}`}
            width={600}
            height={400}
          /> */}

          <div className="relative rounded-xl overflow-hidden border border-white/10  shadow-2xl shadow-black/50 group hover:border-green-500/30 transition-all duration-500 w-full max-w-[700px]">
            <video
              poster={banner.src}
              src={url}
              controls
              className="aspect-video block object-center   w-full  group-hover:scale-102 transition-transform duration-500 "
            ></video>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="xl:px-30 px-10 max-md:px-4 relative ">
      {/* <Link
        href="/"
        className="absolute top-10 left-10 xl:left-30 max-md:left-4 z-50 flex items-center gap-2 text-white/50 hover:text-green-500 transition-colors duration-300 group cursor-pointer"
      >
        <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
        <span className={`${adamina.className} text-lg`}>Back</span>
      </Link> */}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex gap-8 max-lg:flex-col w-full  justify-center items-center mb-20"
      >
        <div className="w-full gap-10 flex flex-col ">
          <h1
            className={`text-8xl max-xl:text-7xl text-green-500/75 ${anton.className} max-lg:text-start`}
          >
            Qwizzy AI
          </h1>
          <div className="flex flex-col gap-10 max-md:gap-3 ">
            <p
              className={`text-white/75 text-2xl ${adamina.className} max-lg:text-start  max-md:text-lg`}
            >
              Smart Paper Creation, Sharing, Answering, and Result System
            </p>
            <p
              className={`text-white/50 text-xl ${adamina.className} max-xl:text-xl max-lg:text-start leading-8 max-md:text-base`}
            >
              Qwizzy AI is a platform where users can create papers, add
              questions, share them with others, answer them within a time
              limit, and view their results. It makes the whole process simple,
              fast, and user-friendly for both creators and students.
            </p>
          </div>

          <div className="flex gap-7 flex-wrap ">
            {techStack.map((each, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 group/item"
              >
                <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center transition-transform duration-300 group-hover/item:-translate-y-1">
                  <img
                    src={each.icon.src}
                    alt={each.name}
                    className="w-full h-full object-contain opacity-80 group-hover/item:opacity-100 transition-all duration-300"
                  />
                </div>
                <span
                  className={`text-white/40 text-xs text-center group-hover/item:text-green-400 transition-colors ${adamina.className}`}
                >
                  {each.name}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex justify-start lg:justify-end">
          <div className="w-full flex flex-col max-w-2xl">
            <Image
              width={800}
              height={600}
              src={Qwizzy_AI_Hero.src}
              alt="Qwizzy AI Homepage"
              className="w-full h-auto max-lg:hidden "
              priority
            />
            <div className="mt-4 flex w-full justify-center max-lg:hidden">
              <Link
                href="https://qwizzy-ai.vercel.app/"
                target="_blank"
                className={`flex items-center gap-2 text-green-500 hover:text-green-400 transition-colors text-xl ${adamina.className} group`}
              >
                <span className="border-b border-transparent group-hover:border-green-400 transition-all">
                  Visit Application
                </span>
                <ExternalLink className="w-5 h-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h1
          className={`text-6xl text-green-500/75  max-lg:text-start ${anton.className}  max-md:text-5xl`}
        >
          Features
        </h1>
        {features.map((each, index) => (
          <FeatureCard
            key={index}
            title={each.title}
            description={each.description}
            url={each.url}
            subTitles={each.subTitles}
            number={index + 1}
          />
        ))}
      </motion.div>
    </section>
  );
}

export default page;
