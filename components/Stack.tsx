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

import { anton } from "@/app/layout";

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
  return (
    <section className="w-full  xl:px-30  px-10  max-md:px-4">
      <div>
        <h1
          className={`text-4xl text-green-500/75 mb-10 ${anton.className} max-lg:text-start max-lg:text-4xl max-md:text-3xl`}
        >
          MY TECH STACK
        </h1>
      </div>
      <div className="flex flex-col gap-20">
        <div>
          <div className="w-full  flex justify-between max-lg:flex-col">
            <div className="flex-1 max-lg:text-start max-lg:mb-10">
              <h1
                className={`text-white/75 text-6xl ${anton.className} max-lg:text-5xl`}
              >
                Frontend
              </h1>
            </div>
            <div className="flex-2  lg:grid-cols-4 sm:grid-cols-4 grid-cols-3 grid gap-12 ">
              {frontend.map((each, index) => {
                return (
                  <div className="flex flex-col gap-3 items-center" key={index}>
                    <img
                      className="md:w-15 md:h-15 w-12 h-12 "
                      src={each.icon.src}
                      alt={each.name}
                      width="full"
                      height="full"
                    />
                    <h1 className="text-white/75 text-xl text-nowrap max-md:text-lg max-sm:text-base">
                      {each.name}
                    </h1>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div>
          <div className="w-full  flex justify-between max-lg:flex-col">
            <div className="flex-1 max-lg:text-start max-lg:mb-10">
              <h1
                className={`text-white/75 text-6xl ${anton.className} max-lg:text-5xl `}
              >
                Backend
              </h1>
            </div>
            <div className="flex-2  lg:grid-cols-4 sm:grid-cols-4 grid-cols-3 grid gap-12 ">
              {backend.map((each, index) => {
                return (
                  <div className="flex flex-col gap-3 items-center" key={index}>
                    <img
                      className="md:w-15 md:h-15 w-12 h-12 "
                      src={each.icon.src}
                      alt={each.name}
                      width="full"
                      height="full"
                    />
                    <h1 className="text-white/75 text-xl text-nowrap max-md:text-lg max-sm:text-base">
                      {each.name}
                    </h1>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div>
          <div className="w-full  flex justify-between max-lg:flex-col">
            <div className="flex-1 max-lg:text-start max-lg:mb-10">
              <h1
                className={`text-white/75 text-6xl ${anton.className} max-lg:text-5xl `}
              >
                Database
              </h1>
            </div>
            <div className="flex-2  lg:grid-cols-4 sm:grid-cols-4 grid-cols-3 grid gap-12 ">
              {database.map((each, index) => {
                return (
                  <div className="flex flex-col gap-3 items-center" key={index}>
                    <img
                      className="md:w-15 md:h-15 w-12 h-12 "
                      src={each.icon.src}
                      alt={each.name}
                      width="full"
                      height="full"
                    />
                    <h1 className="text-white/75 text-xl text-nowrap max-md:text-lg max-sm:text-base">
                      {each.name}
                    </h1>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div>
          <div className="w-full  flex justify-between max-lg:flex-col">
            <div className="flex-1 max-lg:text-start max-lg:mb-10">
              <h1
                className={`text-white/75 text-6xl ${anton.className} max-lg:text-5xl `}
              >
                Others
              </h1>
            </div>
            <div className="flex-2  lg:grid-cols-4 sm:grid-cols-4 grid-cols-3 grid gap-12 ">
              {tools.map((each, index) => {
                return (
                  <div className="flex flex-col gap-3 items-center" key={index}>
                    <img
                      className="md:w-15 md:h-15 w-12 h-12 "
                      src={each.icon.src}
                      alt={each.name}
                      width="full"
                      height="full"
                    />
                    <h1 className="text-white/75 text-xl text-nowrap max-md:text-lg max-sm:text-base">
                      {each.name}
                    </h1>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stack;
