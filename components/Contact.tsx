import React from "react";
import { adamina } from "@/app/layout";
import Link from "next/link";
import github from "@/asset/icons/github.svg";
import linkedin from "@/asset/icons/linkedin.svg";
import { Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <div className="w-full   pt-10 flex flex-col gap-10 -mt-20 relative  xl:px-30  px-10  max-md:px-4 overflow-hidden  ">
      <h1 className={`text-5xl text-white/75 ${adamina.className}`}>Contact</h1>
      <div className="w-full flex  xl:justify-start justify-center ">
        <div className="mt-8 w-full max-w-3xl space-y-8  ">
          {/* Email + Name in two columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="w-full">
              <h1 className={`text-xl text-white/75 ${adamina.className}`}>
                Email
              </h1>
              <input
                className={`text-white/80 border-b border-white/25 focus:border-green-400 focus:outline-none bg-transparent w-full py-2 mt-2 placeholder-white/40 transition-colors ${adamina.className}`}
                type="email"
                placeholder="you@example.com"
              />
            </div>
            <div className="w-full">
              <h1 className={`text-xl text-white/75 ${adamina.className}`}>
                Name
              </h1>
              <input
                className={`text-white/80 border-b border-white/25 focus:border-green-400 focus:outline-none bg-transparent w-full py-2 mt-2 placeholder-white/40 transition-colors ${adamina.className}`}
                type="text"
                placeholder="Your full name"
              />
            </div>
          </div>

          {/* Description */}
          <div className="w-full">
            <h1 className={`text-xl text-white/75 ${adamina.className}`}>
              Description
            </h1>
            <textarea
              className={`text-white/80 border-b border-white/25 focus:border-green-400 focus:outline-none bg-transparent w-full py-2 mt-2 placeholder-white/40 transition-colors resize-y ${adamina.className}`}
              rows={4}
              placeholder="Tell me about your project or inquiry"
            />
          </div>

          {/* CTA */}
          <div className="w-full flex justify-end md:mb-10 ">
            <button
              className={`bg-green-500/80 hover:bg-green-500 px-10 py-2  border border-green-600 shadow-sm transition-colors ${adamina.className} `}
            >
              <h1 className="text-lg"> Send</h1>
            </button>
          </div>
        </div>
      </div>

      <motion.div
        className="flex flex-col gap-10 w-sm py-20 bg-green-700/0 absolute right-0 bottom-0  pl-10  mx-auto    max-xl:relative  max-xl:w-full max-xl:flex-row max-xl:flex-wrap max-xl:py-10 max-xl:px-10 max-xl:gap-6 max-xl:text-sm max-xl:bottom-0 max-xl:bg-transparent max-md:pl-0 max-sm:flex-col max-sm:items-center max-md:justify-center "
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.35 }}
      >
        <Link href="https://github.com/hashalagayendra ">
          <div className="flex gap-4 items-center hover:text-green-500 transition-colors  justify-start ">
            <img
              className="w-8 h-8 max-md:w-6  max-md:h-6 "
              height="full"
              width="full"
              src={github.src}
              alt="GitHub"
            />{" "}
            <h1>github.com/hashalagayendra</h1>
          </div>
        </Link>
        <Link href="https://www.linkedin.com/in/hashala">
          <div className="flex gap-4 items-center hover:text-green-500 transition-colors">
            <img
              className="w-8 h-8 max-md:w-6  max-md:h-6 "
              height="full"
              width="full"
              src={linkedin.src}
              alt="LinkedIn"
            />{" "}
            <h1>linkedin.com/in/hashalagayendra</h1>
          </div>
        </Link>
        <Link href="mailto:hashalagayendra@gmail.com">
          <div className="flex gap-4 items-center ">
            <Mail
              className="w-8 h-8 max-md:w-6  max-md:h-6 "
              height="full"
              width="full"
            />
            <h1 className="hover:text-green-500 transition-colors">
              hashalagayendra@gmail.com
            </h1>
          </div>
        </Link>
        <Link href="tel:+94781958069">
          <div className="flex gap-4 items-center ">
            <Phone
              className="w-8 h-8 max-md:w-6  max-md:h-6 "
              height="full"
              width="full"
            />
            <h1 className="hover:text-green-500 transition-colors">
              +94 78 195 8069
            </h1>
          </div>
        </Link>
      </motion.div>
    </div>
  );
}

export default Contact;
