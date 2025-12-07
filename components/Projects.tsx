import React from "react";
import { adamina, anton } from "@/app/layout";
import Image from "next/image";
import Qwizzy_AI from "@/asset/projects/Qwizzy_AI/homepage.png";
import Citizen_Voice from "@/asset/projects/Citizen_Voice/homepage.png";
import { useRouter } from "next/navigation";

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
  function Card({
    image,
    title,
    description,
    navigation,
  }: {
    image: any;
    title: string;
    description: string;
    navigation: string;
  }) {
    return (
      <>
        <div className=" max-lg:flex-col max-lg:gap-6 flex">
          <div className=" flex-2  ">
            <div>
              <h1
                className={`text-6xl text-white/75 ${anton.className} max-lg:text-start max-lg:text-5xl `}
              >
                {title}
              </h1>
              <p
                className={`text-white/50 mt-5 text-xl leading-8 max-md:text-base max-md:leading-7 max-sm:text-sm max-sm:leading-6  ${adamina.className}`}
              >
                {description}
              </p>
            </div>

            <div
              className={`bg-green-500/80 hover:bg-green-500 w-fit py-2 px-5 mt-5 max-lg:hidden `}
            >
              <h1
                onClick={() => router.push(navigation)}
                className={`tracking-wider text-lg max-md:text-base max-sm:text-sm ${adamina.className} cursor-pointer`}
              >
                View Full Details
              </h1>
            </div>
          </div>
          <div className=" flex-3 flex  justify-center  items-center ">
            <Image
              src={image.src}
              alt="project image"
              width={600}
              height={400}
            ></Image>
          </div>
          <div
            className={`bg-green-500/80 hover:bg-green-500 w-fit py-2 px-5 mt-5 max-lg:flex max-lg:self-center max-lg:mb-10 hidden `}
          >
            <h1
              className={`tracking-wider text-lg max-md:text-base max-sm:text-sm ${adamina.className} `}
            >
              View Full Details
            </h1>
          </div>
        </div>
        {/* Horizantal line */}
        <div className="h-0.5 w-full bg-white/20 my-5 text-6xl text-white"></div>
      </>
    );
  }

  return (
    <section className="w-full  ">
      <div>
        <h1
          className={`text-4xl text-green-500/75 mb-10 max-lg:text-start max-md:text-3xl   ${anton.className}`}
        >
          SELECTED PROJECTS
        </h1>
      </div>
      <div className="flex flex-col gap-10">
        {projectDetails.map((each, index) => (
          <Card
            key={index}
            image={each.image}
            title={each.title}
            description={each.description}
            navigation={each.navigation}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
