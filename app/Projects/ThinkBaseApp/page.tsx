"use client";
import React, { useEffect } from "react";
import { adamina, anton } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import ThinkBaseHero from "@/asset/projects/ThinkBaseApp/homepage.png";
import banner from "@/asset/projects/ThinkBaseApp/banner.png";

import nestjs from "@/asset/icons/nestjs.svg";
import react_native from "@/asset/icons/reactjs.png";
import typescript from "@/asset/icons/typescript.svg";
import graphQl from "@/asset/icons/graphql.svg";
import { motion } from "motion/react";
import { ProjectViews } from "@/lib/trackinFunctions";
function page() {
  const v1 = "/videos/ThinkBaseApp/v1.webm";
  const v2 = "/videos/ThinkBaseApp/v2.webm";

  const techStack: { name: string; icon: any }[] = [
    { name: "TypeScript", icon: typescript },
    { name: "React Native", icon: react_native },
    { name: "NestJS", icon: nestjs },
    { name: "GraphQL", icon: graphQl },
  ];

  const features = [
    {
      title: "Manage All Users",
      id: "01",
      description: "",
      subTitles: [
        "View all registered users",
        "See total users and individual user details",
        "Track total projects per user",
        "Monitor total API requests",
        "View total end users connected",
        "Check total API keys generated ",
        "Review total files uploaded ",
      ],
      url: v1,
    },
    {
      title: "Manage Projects",
      id: "02",
      description: "",
      subTitles: [
        "View all projects on the platform",
        "Access detailed project information",
        "Monitor total request count per project",
        "View uploaded documents",
        "Track generated API keys",
        "Monitor project-level usage and activity",
      ],
      url: v2,
    },
  ];
  useEffect(() => {
    ProjectViews("Think-Base-App");
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
        <div className="flex-1 justify-center flex max-lg:justify-center w-full max-lg:hidden ">
          {/* <Image
            src={url}
            alt={`Qwizzy AI Feature - ${title}`}
            width={600}
            height={400}
          /> */}

          <div className="relative rounded-4xl overflow-hidden  w-fit shadow-2xl shadow-green-900/20 transition-all duration-500 hover:scale-[1.02]">
            <video
              poster={banner.src}
              src={url}
              controls
              className="aspect-[7/15] w-full object-cover max-w-2xs rounded-3xl"
            ></video>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="xl:px-30 px-10 max-md:px-4 relative">
      <Link
        href="/"
        className="absolute top-10 left-10 xl:left-30 max-md:left-4 z-50 flex items-center gap-2 text-white/50 hover:text-green-500 transition-colors duration-300 group"
      >
        <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
        <span className={`${adamina.className} text-lg`}>Back</span>
      </Link>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex gap-8 max-lg:flex-col w-full h-dvh justify-center items-center "
      >
        <div className="w-full gap-5 flex flex-col ">
          <h1
            className={`text-8xl max-xl:text-7xl text-green-500/75 ${anton.className} max-lg:text-start`}
          >
            ThinkBase App
          </h1>
          <div className="flex flex-col gap-5 max-md:gap-3 ">
            <p
              className={`text-white/75 text-2xl ${adamina.className} max-lg:text-start  max-md:text-lg`}
            >
              Admin Tools for Monitoring Users and Projects
            </p>
            <p
              className={`text-white/50 text-xl ${adamina.className} max-xl:text-xl max-lg:text-start leading-8 max-md:text-base`}
            >
              The ThinkBase Admin Mobile App allows administrators to monitor
              platform users and manage project details from a mobile interface.
              It provides visibility into user activity, project data, and
              system usage, helping admins track uploads, chat activity, and
              overall platform performance. With a simple and intuitive design,
              the app makes system monitoring efficient and accessible on the
              go.
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
        <div className="w-full flex justify-center">
          <div className="w-full flex flex-col max-w-2xs">
            <Image
              width={110}
              height={110}
              src={ThinkBaseHero.src}
              alt="ThinkBase Homepage"
              className="w-full h-auto max-lg:hidden rounded-4xl "
              priority
            />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5 }}
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
      </motion.div>
    </section>
  );
}

export default page;
