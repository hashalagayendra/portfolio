"use client";
import Particles from "@/components/Particles";
import Image from "next/image";
import { anton, adamina } from "@/app/fonts";
import Stack from "@/components/Stack";
import Projects from "@/components/Projects";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import axios from "axios";
// @ts-ignore
import { Chat as ThinkbaseChat } from "thinkbase";

import Herosection from "@/components/Herosection";

import Aboutme from "@/components/Aboutme";
import Contact from "@/components/Contact";
import Chat from "@/components/Chat";

export default function Home() {
  async function viewHomepage() {
    const response = await axios.post("/api/tracking", {
      methods: "VIEW_HOMEPAGE",
    });
    console.log("Tracking API response:", response.data);
  }

  useEffect(() => {
    viewHomepage();
  }, []);

  const [chatVisible, setChatVisible] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className=""
    >
      {/* <Chat chatVisible={chatVisible} setChatVisible={setChatVisible} /> */}

      <div className="  max-w-[1920px] mx-auto">
        <Herosection />
      </div>

      <div className="flex flex-col gap-40 max-w-[1920px] mx-auto mt-20">
        <Aboutme />
        <Stack />
        <Projects />
        <Contact />
      </div>
    </motion.div>
  );
}
