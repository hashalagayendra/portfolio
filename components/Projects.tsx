"use client";
import React, { useRef } from "react";
import { adamina, anton } from "@/app/fonts";
import Image from "next/image";
import Qwizzy_AI from "@/asset/projects/Qwizzy_AI/homepage.png";
import Citizen_Voice from "@/asset/projects/Citizen_Voice/homepage.png";
import Think_Base from "@/asset/projects/ThinkBase/homepage.png";
import Think_Base_App from "@/asset/projects/ThinkBaseApp/homepage.png";
import { useRouter } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const ProjectItem = ({
  project,
  index,
}: {
  project: {
    image: any;
    title: string;
    description: string;
    navigation: string;
    isPortrait?: boolean;
  };
  index: number;
}) => {
  const router = useRouter();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

  return (
    <motion.div ref={ref} style={{ opacity }} className="group mb-32 last:mb-0">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Text Content */}
        <div
          className={`lg:col-span-5 flex flex-col gap-8 order-2 
            ${index % 2 === 0 ? "lg:order-1" : "lg:order-2"}
          
          
          `}
        >
          <div>
            <h2
              className={`text-4xl md:text-6xl text-green-500/75 mb-6 ${anton.className}`}
            >
              {project.title}
            </h2>
            <p
              className={`text-lg text-white/60 leading-relaxed ${adamina.className}`}
            >
              {project.description}
            </p>
          </div>

          <button
            onClick={() => router.push(project.navigation)}
            className={`flex items-center gap-3 text-lg text-green-500 hover:text-green-400 transition-colors w-fit group/btn cursor-pointer ${adamina.className}`}
          >
            <span className="border-b border-transparent group-hover/btn:border-green-400 transition-all">
              See more Details
            </span>
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
          </button>
        </div>

        {/* Image */}
        <div
          className={`lg:col-span-7 order-1 cursor-pointer ${
            index % 2 === 0 ? "lg:order-2" : "lg:order-1"
          }`}
          onClick={() => router.push(project.navigation)}
        >
          <div
            className={`relative w-full border border-green-500/50 ${
              project.isPortrait
                ? "aspect-[8/16] max-w-xs mx-auto rounded-4xl"
                : "aspect-video overflow-hidden rounded-lg"
            } bg-transparent transition-all duration-500`}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className={` object-top transition-transform duration-700 group-hover:scale-102 ${
                project.isPortrait ? "rounded-4xl " : "object-cover"
              }`}
            />
            <div
              className={`absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500 ${
                project.isPortrait ? "rounded-4xl " : ""
              }`}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

function Projects() {
  const projectDetails = [
    {
      image: Think_Base,
      title: "Think-Base.Dev ",
      description:
        "ThinkBase is an intelligent AI-powered chatbot and document-processing platform built for developers to create customizable, scalable, and efficient chat systems. It supports everything from document upload and adjustable chunking to vector embedding generation and project-based API key management. With its built-in SDK, prompt customization tools, and memory-enabled chat features, ThinkBase provides a smooth, developer-friendly workflow for building advanced AI chat experiences with ease.",
      navigation: "/Projects/ThinkBase",
    },
    {
      image: Think_Base_App,
      title: "ThinkBase Admin Mobile App",
      description:
        "The ThinkBase Admin Mobile App is a streamlined monitoring tool designed for administrators to oversee the entire ThinkBase ecosystem with ease. It provides real-time visibility into user activity, project performance, and system usage. The app allows admins to monitor users, review project details, track usage trends, and ensure smooth platform operations from anywhere. Built with a clean and intuitive mobile interface, it delivers fast, reliable, and on-the-go insights that complement the ThinkBase platform’s overall management experience.",
      navigation: "/Projects/ThinkBaseApp",
      isPortrait: true,
    },
    {
      image: Qwizzy_AI,
      title: "Qwizzy AI",
      description:
        " Qwizzy AI is an intelligent exam and paper-management platform designed to simplify how users create, share, and complete question papers. The system supports everything from paper creation and question setup to timed answering and detailed result viewing. It provides a smooth and organized workflow for both creators and participants, making online assessments easy and efficient.",
      navigation: "/Projects/QwizzyAI",
    },
    {
      image: Citizen_Voice,
      title: "Citizen Voice ",
      description:
        "The Citizen Voice Project enables citizens to actively share feedback, report issues, and propose solutions to local authorities. By fostering transparency, engagement, and responsive governance, it helps improve public services and strengthens the connection between communities and decision-makers.",
      navigation: "/Projects/CitizenVoice",
    },
  ];

  return (
    <section className="w-full xl:px-32 px-6 md:px-12">
      <div className="mb-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={`text-5xl md:text-6xl text-white/75 mb-4 ${anton.className}`}
        >
          SELECTED <span className="text-green-500/75">PROJECTS</span>
        </motion.h1>
      </div>

      <div className="flex flex-col">
        {projectDetails.map((project, index) => (
          <ProjectItem key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
