"use client";
import React from "react";
import { adamina, anton } from "@/app/layout";
import Image from "next/image";
import Qwizzy_AI from "@/asset/projects/Qwizzy_AI/homepage.png";
import Citizen_Voice from "@/asset/projects/Citizen_Voice/homepage.png";
import { useRouter } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

function Projects() {
  const router = useRouter();
  const projectDetails = [
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
    <section className="w-full  xl:px-32 px-6 md:px-12">
      <div className="mb-20">
        <h1
          className={`text-5xl md:text-6xl text-white/75 mb-4 ${anton.className}`}
        >
          SELECTED <span className="text-green-500/75">PROJECTS</span>
        </h1>
      </div>

      <div className="flex flex-col gap-20">
        {projectDetails.map((project, index) => (
          <div key={index} className="group">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Text Content */}
              <div className="lg:col-span-5 flex flex-col gap-8 order-2 lg:order-1">
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
                  className={`flex items-center gap-3 text-lg text-white hover:text-green-400 transition-colors w-fit group/btn ${adamina.className}`}
                >
                  <span className="border-b border-transparent group-hover/btn:border-green-400 transition-all">
                    See more Details
                  </span>
                  <ArrowUpRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                </button>
              </div>

              {/* Image */}
              <div
                className="lg:col-span-7 order-1 lg:order-2 cursor-pointer"
                onClick={() => router.push(project.navigation)}
              >
                <div className="relative w-full aspect-video bg-white/5 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
            {/* Separator Line - Only show if not the last item */}
            {index !== projectDetails.length - 1 && (
              <div className="w-full h-px bg-white/10 mt-20" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
