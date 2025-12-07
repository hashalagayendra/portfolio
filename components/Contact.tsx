import React from "react";
import { adamina } from "@/app/layout";

function Contact() {
  return (
    <div className="w-full  px-6 py-10 flex flex-col gap-10 -mt-20 relative ">
      <h1 className={`text-5xl text-white/75 ${adamina.className}`}>Contact</h1>
      <div className="w-full flex flex-col items-start ">
        <div className="mt-8 w-full max-w-2xl space-y-8">
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
          <div className="w-full flex justify-end">
            <button
              className={`bg-green-500/80 hover:bg-green-500 text-black font-semibold px-6 py-2  border border-green-600 shadow-sm transition-colors ${adamina.className}`}
            >
              Send
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6 pt-8 pl-10 bg-red-300 fixed right-0 top-0">
        <p
          className={`text-white/70 hover:text-green-400 transition-colors cursor-pointer ro ${adamina.className}`}
        >
          +1 (555) 123-4567
        </p>
        <a
          href="mailto:hello@example.com"
          className={`text-white/70 hover:text-green-400 transition-colors ${adamina.className}`}
        >
          hello@example.com
        </a>
        <a
          href="#"
          className={`text-white/70 hover:text-green-400 transition-colors ${adamina.className}`}
        >
          GitHub
        </a>
        <a
          href="#"
          className={`text-white/70 hover:text-green-400 transition-colors ${adamina.className}`}
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}

export default Contact;
