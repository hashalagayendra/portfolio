"use client";
import React, { useEffect } from "react";
import { adamina, anton } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Qwizzy_AI_Hero from "@/asset/projects/Qwizzy_AI/homepage.png";
import Citizen_Voice from "@/asset/projects/Citizen_Voice/homepage.png";
import banner from "@/asset/projects/Citizen_Voice/banner.png";
import postgresssql from "@/asset/icons/postgresql.svg";
import prisma from "@/asset/icons/prisma.svg";
import tailwindcss from "@/asset/icons/tailwindcss.png";
import nextjs from "@/asset/icons/nextjs.png";
import nextauthjs from "@/asset/icons/nextauthjs.png";
import firebase from "@/asset/icons/firebase.png";
import leaflet from "@/asset/icons/leaflet.png";
import gemini from "@/asset/icons/Gemini.png";
import cloudinary from "@/asset/icons/cloudinary.png";
import { motion } from "motion/react";
import { ProjectViews } from "@/lib/trackinFunctions";
function page() {
  const v1 = "/videos/CitizenVoice/v11.webm";
  const v2 = "/videos/CitizenVoice/v22.webm";
  const v3 = "/videos/CitizenVoice/v33.webm";
  const v4 = "/videos/CitizenVoice/v44.webm";
  const v5 = "/videos/CitizenVoice/v55.webm";
  const v6 = "/videos/CitizenVoice/v66.webm";
  const v7 = "/videos/CitizenVoice/v77.webm";
  const v8 = "/videos/CitizenVoice/v88.webm";
  const v9 = "/videos/CitizenVoice/v99.webm";

  const techStack: { name: string; icon: any }[] = [
    { name: "Next.js", icon: nextjs },
    { name: "NextAuth.js", icon: nextauthjs },
    { name: "Tailwind CSS", icon: tailwindcss },
    { name: "PostgreSQL", icon: postgresssql },
    { name: "Firebase", icon: firebase },
    { name: "Prisma", icon: prisma },
    { name: "Leaflet.js", icon: leaflet },
    { name: "Cloudinary", icon: cloudinary },
    { name: "Gemini AI", icon: gemini },
  ];

  const features = [
    {
      title: "User Authentication & Role Management (NextAuth.js)",
      description: "",
      subTitles: [
        "Supports Google OAuth and Email/Password login.",
        "Secure Password Hashing implemented using bcrypt.",
        "Role-Based Access Control separates Admin and User permissions.",
      ],
      url: v1,
    },
    {
      title: "Dynamic Complaint Categories & Scalable Form System",
      description: " ",
      subTitles: [
        "Includes 7 main categories and 33 sub-categories for different complaint types.",
        "Uses modular, reusable input components for fast feature expansion.",
        "Adding new complaint types only requires selecting existing components—no heavy development.",
        "Built with components like: DescriptionInput, MapSelection, DatePicker, FileDropBox, AnyWitnesses, AffectedAreaSize, IsItOngoing, PersonInvolved, DepartmentSelection, ConstructionTypeSelection, IsItCurrentlyDangerous, FacilityTypeSelector, NameOfFacility.",
      ],
      url: v2,
    },
    {
      title: "Multi-Stage Complaint Submission Flow",
      description: "",
      subTitles: [
        "Stage 1: Main form with combined input components.",
        "Stage 2: Select Complaint Severity Level.",
        "Stage 3: Choose Submission Method – with ID or anonymous.",
        "Stage 4: Final review and confirmation step.",
        "Stage 5: Downloadable receipt provided as evidence for the citizen.",
      ],
      url: v3,
    },
    {
      title: "Interactive Location Selection (Leaflet.js)",
      description: "",
      subTitles: [
        "Integrated Leaflet.js map for selecting exact complaint locations.",
        "Offers precise geolocation support for better issue tracking.",
      ],
      url: v4,
    },
    {
      title: "Secure Media Uploads with Cloudinary",
      description: "",
      subTitles: [
        "All uploaded images and relevant files stored safely using Cloudinary.",
        "Provides fast delivery and reliable cloud storage.",
      ],
      url: v5,
    },
    {
      title: "Citizen Legal Help Chatbot Powered by Gemini AI",
      description: "",
      subTitles: [
        "Built-in AI chatbot that answers legal questions related to Sri Lankan laws.",
        "Helps citizens understand rights, procedures, and available support.",
      ],
      url: v6,
    },
    {
      title: "Real-Time User–Admin Chat System",
      description: "",
      subTitles: [
        "Citizens can start live chats with admins for complaint-related questions.",
        "Powered by Firebase Realtime Database for instant communication.",
        "Enables fast clarification and reduces waiting time for updates.",
      ],
      url: v7,
    },
    {
      title: "Separate User & Admin Dashboards",
      description: "",
      subTitles: [
        "User Dashboard : View complaint progress and detailed status updates and Download receipts and track communication with admins.",
        "Admin Dashboard: Manage complaints with filtering, sorting, status updates, real-time chat, and transparent progress tracking.",
      ],
      url: v8,
    },
    {
      title: "Fully Mobile-Responsive Interface",
      description: "",
      subTitles: [
        "All forms, dashboards, and chat features automatically adjust to different screen sizes",
        "Multi-stage complaint flow remains easy to navigate on small screens",
        "Map selection, file uploads, and AI chatbot are optimized for touch interactions.",
      ],
      url: v9,
    },
  ];

  useEffect(() => {
    ProjectViews("Citizen-Voice");
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
      <div className="flex mt-10 gap-8 max-lg:flex-col max-lg:items-center  ">
        <div className="flex-1  flex flex-col gap-5 l w-full max-w-3xl">
          <div className="flex  gap-5  items-center">
            <h1
              className={`text-6xl text-green-500/75 ${anton.className} max-md:text-5xl`}
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
            className={`flex flex-col gap-4 text-white/50 text-lg leading-relaxed pl-6  ${adamina.className}  pl-22 max-md:text-base`}
          >
            <ul className="list-disc list-outside space-y-3">
              {subTitles.map((each, index) => (
                <li key={index}>{each}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex-1 justify-center flex max-lg:justify-center w-full max-lg:hidden items-center ">
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
              className="aspect-video block object-center w-full h-full  group-hover:scale-102 transition-transform duration-500 "
            ></video>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="xl:px-30 px-10 max-md:px-4 relative -mt-20">
      {/* <Link
        href="/"
        className="absolute top-10 left-10 xl:left-30 max-md:left-4 z-[100] flex items-center gap-2 text-white/50 hover:text-green-500 transition-colors duration-300 group p-2 cursor-pointer"
      >
        <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
        <span className={`${adamina.className} text-lg`}>Back</span>
      </Link> */}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex gap-8 max-lg:flex-col w-full  justify-center items-center pt-24 mb-20"
      >
        <div className="w-full gap-10 flex flex-col ">
          <h1
            className={`text-8xl max-xl:text-7xl text-green-500/75 ${anton.className} max-lg:text-start`}
          >
            Citizen Voice
          </h1>
          <div className="flex flex-col gap-10 max-md:gap-3 ">
            <p
              className={`text-white/75 text-2xl ${adamina.className} max-lg:text-start  max-md:text-lg`}
            >
              Smart Public Complaint Submission, Tracking, and Legal Assistance
              System
            </p>
            <p
              className={`text-white/50 text-xl ${adamina.className} max-xl:text-xl max-lg:text-start  max-md:text-base`}
            >
              Citizen Voice is a platform where users can easily submit public
              complaints, track their status, and communicate with admins in
              real time. It also includes an AI assistant that provides legal
              guidance, making the reporting process simple, fast, and
              user-friendly for all citizens.
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
              height={1000}
              src={Citizen_Voice.src}
              alt="Qwizzy AI Homepage"
              className="w-full h-auto max-lg:hidden "
              priority
            />
            <div className="mt-4 flex w-full justify-center max-lg:hidden">
              <Link
                href="https://citizen-voice-five.vercel.app/"
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
          className={`text-6xl text-green-500/75  max-lg:text-start ${anton.className} max-md:text-5xl md:mt-16 xl:mt-10`}
        >
          Features
        </h1>
        <div className="">
          {" "}
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
        </div>
      </motion.div>
    </section>
  );
}

export default page;
