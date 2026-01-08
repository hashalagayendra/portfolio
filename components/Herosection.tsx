"use client";
import React from "react";
import { anton, adamina } from "@/app/fonts";
import github from "@/asset/icons/github.svg";
import linkedin from "@/asset/icons/linkedin.svg";
import { motion } from "framer-motion";
import Link from "next/link";
import { Loader2, Send, Download } from "lucide-react"; // Add this import
import axios from "axios";
import {
  CvDownloadCounts,
  linkdnClick,
  githubClick,
} from "@/lib/trackinFunctions";

function Herosection() {
  // Add loading state
  const [loading, setLoading] = React.useState(false);

  // async function CvDownloadCounts() {
  //   const response = await axios.post("/api/tracking", {
  //     methods: "Cv_download",
  //   });
  //   // console.log("Tracking API response:", response.data);
  // }

  // Download handler
  const handleDownload = async () => {
    setLoading(true);
    CvDownloadCounts();
    try {
      // Simulate download delay
      const link = document.createElement("a");
      link.href = "/cv/R.A.H.G Ranasingha_CV.pdf";
      link.download = "R.A.H.G Ranasingha_CV.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="home"
      className="w-full h-dvh scroll-mt-24 flex flex-col justify-center relative xl:px-30 px-10 max-md:px-4 overflow-hidden -translate-y-16"
    >
      <motion.div
        className="flex flex-col gap-10 absolute bottom-30 right-10 max-lg:hidden"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Link
          onClick={() => {
            githubClick();
          }}
          href="https://github.com/hashalagayendra"
          className="cursor-pointer hover:scale-110 transition-transform"
        >
          <img height={40} width={40} src={github.src} alt="GitHub" />
        </Link>
        <Link
          onClick={() => {
            linkdnClick();
          }}
          href="https://www.linkedin.com/in/hashala-gayendra/"
          className="cursor-pointer hover:scale-110 transition-transform"
        >
          <img height={40} width={40} src={linkedin.src} alt="LinkedIn" />
        </Link>
      </motion.div>
      <div className=" flex flex-col  justify-center gap-10  ">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={` text-8xl font-bold text-white/75 ${anton.className} tracking-wide leading-30 max-lg:text-start max-md:text-6xl max-lg:text-7xl  max-md:leading-20 `}
        >
          <span>Hi, I'm</span> <br />
          <span className={`text-green-500/75`}>Hashala Gayendra</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`text-white/75 w-full max-w-3xl text-2xl leading-10 tracking-wider max-lg:text-start  max-lg:self-start   max-md:text-lg ${adamina.className} flex flex-col gap-4`}
        >
          <p>
            Welcome to my portfolio! I’m passionate about creating modern,
            scalable, and reliable web applications.
          </p>
          <p className="text-white/50 text-xl max-md:text-base">
            Explore my work to see how I build full-stack solutions, AI-powered
            systems, and cloud-ready applications.
          </p>
        </motion.div>
        {/* Replace motion.a with button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <button
            disabled={loading}
            onClick={handleDownload}
            className={`group flex items-center gap-3 bg-green-500/80 hover:bg-green-500 px-10 py-3 border border-green-600 transition-all duration-300 cursor-pointer ${adamina.className} disabled:opacity-70 disabled:cursor-not-allowed`}
          >
            {loading ? (
              <>
                <span className="text-lg text-white">Downloading...</span>
                <Loader2 size={18} className="text-white animate-spin" />
              </>
            ) : (
              <>
                <span className="text-lg text-white">Download CV</span>
                <Download size={18} className="text-white " />
              </>
            )}
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default Herosection;
