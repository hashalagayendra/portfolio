"use client";
import React, { useEffect, useState } from "react";
import { adamina, anton } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import ThinkBaseHero from "@/asset/projects/ThinkBase/homepage.png";
import banner from "@/asset/projects/ThinkBase/banner.png";

import postgresssql from "@/asset/icons/postgresql.svg";
import prisma from "@/asset/icons/prisma.svg";
import tailwindcss from "@/asset/icons/tailwindcss.png";
import nextjs from "@/asset/icons/nextjs.png";
import nestjs from "@/asset/icons/nestjs.svg";
import nextauthjs from "@/asset/icons/nextauthjs.png";
import langchain from "@/asset/icons/langchain.webp";
import typescript from "@/asset/icons/typescript.svg";
import docker from "@/asset/icons/docker.svg";
import githubactions from "@/asset/icons/githubactions.png";
import azure from "@/asset/icons/azure.svg";

import { motion } from "motion/react";
import { ProjectViews } from "@/lib/trackinFunctions";
function page() {
  const v1 = "/videos/ThinkBase/v1.webm";
  const v2 = "/videos/ThinkBase/v2.webm";
  const v3 = "/videos/ThinkBase/v3.webm";
  const v4 = "/videos/ThinkBase/v4.webm";
  const v5 = "/videos/ThinkBase/v5.webm";
  const v6 = "/videos/ThinkBase/v6.webm";
  const v7 = "/videos/ThinkBase/v7.webm";
  const v8 = "/videos/ThinkBase/v8.webm";
  const v9 = "/videos/ThinkBase/v9.webm";
  const v10 = "/videos/ThinkBase/v10.webm";
  const techStack: { name: string; icon: any }[] = [
    { name: "Next.js", icon: nextjs },
    { name: "NestJS", icon: nestjs },
    { name: "LangChain", icon: langchain },
    { name: "TypeScript", icon: typescript },
    { name: "PostgreSQL", icon: postgresssql },
    { name: "Prisma", icon: prisma },
    { name: "Tailwind CSS", icon: tailwindcss },
    { name: "Docker", icon: docker },
    { name: "GitHub Actions", icon: githubactions },
    { name: "Azure", icon: azure },
  ];

  const features = [
    {
      title: "User Login",
      id: "01",
      description: "",
      subTitles: [
        "Users can log in using Email & Password, GitHub, or Google OAuth.",
        "Access tokens are stored in memory for secure, short-lived API access..",
        "Refresh tokens are stored in HTTP-only cookies to maintain session security.",
        "The system creates a unique user session to track activities and project access.",
      ],
      url: v1,
    },
    {
      title: "Create Project",
      id: "02",
      description: "",
      subTitles: [
        "Users can create a new project by providing a project name and description.",
        "Each project is isolated, allowing separate document processing and API management.",
        "Projects serve as containers for all uploaded documents, prompts, and API keys.",
      ],
      url: v2,
    },
    {
      title: "Upload Documents",
      id: "03",
      description: "",
      subTitles: [
        "Users can upload multiple documents to a project.",
        "Supports PDF and text files.",
        "Uploaded documents are processed and stored securely for further embedding and AI usage.",
      ],
      url: v3,
    },
    {
      title: "Adjust Chunk Size and Overlap",
      id: "04",
      description: "",
      subTitles: [
        "Users can customize how documents are split into chunks for better processing.",
        "Adjustable chunk sizes and overlap improve embedding accuracy and AI understanding.",
        "Each document’s settings can be configured independently.",
      ],
      url: v4,
    },
    {
      title: "Add System Prompt",
      id: "05",
      description: "",
      subTitles: [
        "Users can define a system prompt to guide the AI chatbot’s behavior.",
        "Prompts can be customized per project ",
        "Supports context-aware AI responses.",
      ],
      url: v5,
    },
    {
      title: "Generate API Keys for the Project",
      id: "06",
      description: "",
      subTitles: [
        "Each project can have one or more API keys for secure access.",
        "API keys allow developers to integrate ThinkBase chat features into external applications.",
        "Keys are project-specific, ensuring proper access control.",
      ],
      url: v6,
    },
    {
      title: "Customize and Test in the Built-in Playground",
      id: "07",
      description: "",
      subTitles: [
        "Users can interactively test their AI chatbot responses within the platform.",

        "Provides a safe environment before deploying the chatbot externally.",
      ],
      url: v7,
    },
    {
      title: "Install ThinkBase Package from NPM",
      id: "08",
      description: "",
      subTitles: [
        "Developers can install the ThinkBase SDK via NPM: npm install thinkbase",
        "SDK provides ready-to-use chat components for integration into web applications.",
      ],
      url: v8,
    },
    {
      title: "Use Chat Components with API Key",
      id: "09",
      description: "",
      subTitles: [
        "Developers can integrate pre-built chat components into their website or application.",
        "Components connect directly to the ThinkBase backend using the project-specific API key.",
        "Allows fully functional AI chat with minimal setup.",
      ],
      url: v9,
    },
    {
      title: "Use SDK with API Key",
      id: "10",
      description: "",
      subTitles: [
        "The SDK allows developers to customize chat UI and behavior while connecting securely via API key.",
        "Supports advanced features like storing user chat history, handling multiple projects, and custom prompts.",
        "Enables integration into any web or mobile application with full developer control.",
      ],
      url: v10,
    },
  ];

  useEffect(() => {
    ProjectViews("Think-Base");
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
    url: string | null;
    number: number;
  }) {
    return (
      <div className="flex mt-10 gap-8 max-lg:flex-col max-lg:items-center ">
        <div
          className={`flex-1 flex flex-col gap-5 ${
            !url ? "w-full" : "max-w-3xl"
          } w-full`}
        >
          <div className="flex  gap-5  items-center">
            <h1
              className={`text-6xl text-green-500/75 ${anton.className}  max-md:text-5xl`}
            >
              {number}
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
        {url && (
          <div className="flex-1 justify-start flex max-lg:justify-center w-full max-lg:hidden">
            {/* <Image
            src={url}
            alt={`Qwizzy AI Feature - ${title}`}
            width={600}
            height={400}
          /> */}

            <div className="relative rounded-xl overflow-hidden border border-white/10 bg-white/5 shadow-2xl shadow-black/50 group hover:border-green-500/30 transition-all duration-500 w-full max-w-[700px]">
              <video
                width={700}
                height={700}
                poster={banner.src}
                src={url}
                controls
                className="aspect-video block object-center   w-full  group-hover:scale-102 transition-transform duration-500 "
              ></video>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <section className="xl:px-30 px-10 max-md:px-4 relative pb-14 ">
      {/* <Link
        href="/"
        className="absolute top-10 left-10 xl:left-30 max-md:left-4 z-50 flex items-center gap-2 text-white/50 hover:text-green-500 transition-colors duration-300 group"
      >
        <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
        <span className={`${adamina.className} text-lg`}>Back</span>
      </Link> */}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex gap-8 max-lg:flex-col w-full  justify-center items-center  pb-20"
      >
        <div className="w-full gap-5 flex flex-col ">
          <h1
            className={`text-8xl max-xl:text-7xl text-green-500/75 ${anton.className} max-lg:text-start`}
          >
            Think-Base
          </h1>
          <div className="flex flex-col gap-5 max-md:gap-3 ">
            <p
              className={`text-white/75 text-2xl ${adamina.className} max-lg:text-start  max-md:text-lg`}
            >
              Developer Tools for Building Website Chatbots
            </p>
            <p
              className={`text-white/50 text-xl ${adamina.className} max-xl:text-xl max-lg:text-start leading-8 max-md:text-base`}
            >
              ThinkBase lets developers upload documents, customize chunking,
              generate embeddings, and build AI-powered chat features using
              project-specific API keys. It supports custom prompts, saves chat
              history by client ID, and provides an SDK for creating fully
              customizable chat interfaces—making AI chatbot development simple
              and fast.
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
              src={ThinkBaseHero.src}
              alt="ThinkBase Homepage"
              className="w-full h-auto max-lg:hidden "
              priority
            />
            <div className="mt-4 flex w-full justify-center max-lg:hidden">
              <Link
                href="https://think-base.dev/"
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
            number={each.id as unknown as number}
          />
        ))}

        <FeatureCard
          key={100}
          title="Chat Memory & User Identification"
          description={""}
          url={null}
          subTitles={[
            "When a user sends their first message, ThinkBase creates a unique client ID and stores it in the browser as a cookie. This client ID is used to recognize the same user in future messages.",
            "All chat messages are saved in the database and linked to this client ID. When a new message is sent, ThinkBase automatically loads the previous chat history and uses it to generate a context-aware response.",
            "For developers using the ThinkBase SDK, no memory handling is required. The SDK automatically manages client identification, chat history, and context, allowing developers to focus only on building the chat UI.",
            "Users can also see their previous chat messages on the same browser, creating a smooth and continuous chat experience.",
          ]}
          number={11}
        />
      </motion.div>
    </section>
  );
}

export default page;
