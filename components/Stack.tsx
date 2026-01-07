"use client";
import React from "react";
import aws from "@/asset/icons/aws.svg";
import azure from "@/asset/icons/azure.svg";
import docker from "@/asset/icons/docker.svg";
import expressjs from "@/asset/icons/expressjs.png";

import firebase from "@/asset/icons/firebase.png";
import git from "@/asset/icons/git.svg";
import githubactions from "@/asset/icons/githubactions.png";
import graphql from "@/asset/icons/graphql.svg";
import js from "@/asset/icons/js.svg";
import langchain from "@/asset/icons/langchain.webp";
import mongodb from "@/asset/icons/mongodb.svg";
import nestjs from "@/asset/icons/nestjs.svg";
import nextauthjs from "@/asset/icons/nextauthjs.png";
import nextjs from "@/asset/icons/nextjs.png";
import postgresssql from "@/asset/icons/postgresql.svg";
import postman from "@/asset/icons/postman.svg";
import prisma from "@/asset/icons/prisma.svg";
import reactjs from "@/asset/icons/reactjs.png";
import reactnative from "@/asset/icons/reactjs.png";
import redux from "@/asset/icons/redux.png";
import tailwindcss from "@/asset/icons/tailwindcss.png";
import typescript from "@/asset/icons/typescript.svg";

import { adamina, anton } from "@/app/fonts";

function Stack() {
  const frontend: { name: string; icon: any }[] = [
    { name: "JavaScript", icon: js },
    { name: "TypeScript", icon: typescript },
    { name: "React.js", icon: reactjs },
    { name: "React Native", icon: reactnative },
    { name: "Next.js", icon: nextjs },
    { name: "Redux", icon: redux },
    { name: "Tailwind CSS", icon: tailwindcss },
  ];

  const tools: { name: string; icon: any }[] = [
    { name: "Git", icon: git },
    { name: "Docker", icon: docker },
    // { name: "AWS", icon: aws },
    { name: "Azure", icon: azure },
    { name: "Postman", icon: postman },
    { name: "GitHub Actions", icon: githubactions },
    { name: "LangChain", icon: langchain },
  ];

  const backend: { name: string; icon: any }[] = [
    { name: "NestJS", icon: nestjs },
    { name: "Express.js", icon: expressjs },
    { name: "GraphQL", icon: graphql },
    { name: "NextAuth.js", icon: nextauthjs },
  ];

  const database: { name: string; icon: any }[] = [
    { name: "MongoDB", icon: mongodb },
    { name: "Firebase", icon: firebase },
    { name: "PostgreSQL", icon: postgresssql },
    { name: "Prisma", icon: prisma },
  ];

  const StackCategory = ({
    title,
    items,
    isLast = false,
  }: {
    title: string;
    items: { name: string; icon: any }[];
    isLast?: boolean;
  }) => (
    <div className="group">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        <div className="lg:col-span-4">
          <h2
            className={`text-4xl md:text-5xl text-white/75 ${anton.className}`}
          >
            {title}
          </h2>
        </div>
        <div className="lg:col-span-8 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-y-12 gap-x-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-4 group/item"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center transition-transform duration-300 group-hover/item:-translate-y-1">
                <img
                  src={item.icon.src}
                  alt={item.name}
                  className="w-full h-full object-contain opacity-80 group-hover/item:opacity-100 transition-all duration-300"
                />
              </div>
              <span
                className={`text-white/40 text-sm text-center group-hover/item:text-green-400 transition-colors ${adamina.className}`}
              >
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      {!isLast && <div className="w-full h-px bg-white/10 mt-16 mb-16" />}
    </div>
  );

  return (
    <section id="stack" className="w-full scroll-mt-24 xl:px-32 px-6 md:px-12">
      <div className="mb-20">
        <h1
          className={`text-5xl md:text-6xl text-white/75 mb-4 ${anton.className}`}
        >
          MY TECH <span className="text-green-500/75">STACK</span>
        </h1>
      </div>
      <div className="flex flex-col">
        <StackCategory title="Frontend" items={frontend} />
        <StackCategory title="Backend" items={backend} />
        <StackCategory title="Database" items={database} />
        <StackCategory title="Tools" items={tools} isLast />
      </div>
    </section>
  );
}

export default Stack;
