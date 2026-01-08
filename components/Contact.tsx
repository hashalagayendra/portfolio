"use client";
import React from "react";
import { adamina, anton } from "@/app/fonts";
import Link from "next/link";
import github from "@/asset/icons/github.svg";
import linkedin from "@/asset/icons/linkedin.svg";
import { Mail, Phone, Send, Loader2 } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { githubClick, linkdnClick } from "@/lib/trackinFunctions";
import { link } from "fs";

function Contact() {
  const [form, setForm] = useState({ name: "", clientemail: "", message: "" });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await axios.post("/api/email", form);
      const data = await res.data;
      setStatus(data.success ? "Message Sent!" : "Failed to send.");
      if (data.success) {
        setForm({ name: "", clientemail: "", message: "" });
      }
    } catch (error) {
      setStatus("Failed to send.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="w-full scroll-mt-24 relative xl:px-32 px-6 md:px-12 overflow-hidden pb-20"
      id="contact"
    >
      {/* Background decoration */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* Left Column: Text Content & Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col gap-12"
        >
          <div>
            <h1
              className={`text-5xl md:text-6xl text-white/75 mb-6 ${anton.className}`}
            >
              Get in <span className="text-green-500/75">Touch</span>
            </h1>
            <p
              className={`text-lg text-white/60 leading-relaxed max-w-md ${adamina.className}`}
            >
              I am currently seeking internship opportunities to apply my skills
              in full-stack development and gain hands-on industry experience.
              If you have an opening or just want to connect, feel free to reach
              out!
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <Link
              href="mailto:hashalagayendra@gmail.com"
              className="group w-fit cursor-pointer"
            >
              <div className="flex gap-5 items-center">
                <div className="group-hover:text-green-400 transition-colors">
                  <Mail className="w-6 h-6 text-white/80 group-hover:text-green-400 transition-colors" />
                </div>
                <div>
                  <h3 className={`text-sm text-white/40 ${adamina.className}`}>
                    Email
                  </h3>
                  <p
                    className={`text-white/90 group-hover:text-green-400 transition-colors ${adamina.className}`}
                  >
                    hashalagayendra@gmail.com
                  </p>
                </div>
              </div>
            </Link>

            <Link
              href="tel:+94781958069"
              className="group w-fit cursor-pointer"
            >
              <div className="flex gap-5 items-center">
                <div className="group-hover:text-green-400 transition-colors">
                  <Phone className="w-6 h-6 text-white/80 group-hover:text-green-400 transition-colors" />
                </div>
                <div>
                  <h3 className={`text-sm text-white/40 ${adamina.className}`}>
                    Phone
                  </h3>
                  <p
                    className={`text-white/90 group-hover:text-green-400 transition-colors ${adamina.className}`}
                  >
                    +94 78 195 8069
                  </p>
                </div>
              </div>
            </Link>

            <div className="flex gap-6 mt-4">
              <Link
                onClick={() => {
                  githubClick();
                }}
                href="https://github.com/hashalagayendra"
                target="_blank"
                className="group cursor-pointer"
              >
                <div className="transition-colors">
                  <img
                    src={github.src}
                    alt="GitHub"
                    className="w-6 h-6 opacity-70 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              </Link>
              <Link
                onClick={() => {
                  linkdnClick();
                }}
                href="https://www.linkedin.com/in/hashala"
                target="_blank"
                className="group cursor-pointer"
              >
                <div className="transition-colors">
                  <img
                    src={linkedin.src}
                    alt="LinkedIn"
                    className="w-6 h-6 opacity-70 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Form (Preserving Style) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full pt-4"
        >
          <form className="space-y-10" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="w-full group">
                <label
                  className={`text-lg text-white/60 group-focus-within:text-green-400 transition-colors ${adamina.className}`}
                >
                  Your Name
                </label>
                <input
                  className={`text-white/90 border-b border-white/25 focus:border-green-400 focus:outline-none bg-transparent w-full py-3 mt-2 placeholder-white/20 transition-all ${adamina.className}`}
                  type="text"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, name: e.target.value }))
                  }
                />
              </div>
              <div className="w-full group">
                <label
                  className={`text-lg text-white/60 group-focus-within:text-green-400 transition-colors ${adamina.className}`}
                >
                  Your Email
                </label>
                <input
                  className={`text-white/90 border-b border-white/25 focus:border-green-400 focus:outline-none bg-transparent w-full py-3 mt-2 placeholder-white/20 transition-all ${adamina.className}`}
                  type="email"
                  placeholder="john@example.com"
                  value={form.clientemail}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      clientemail: e.target.value,
                    }))
                  }
                />
              </div>
            </div>

            <div className="w-full group">
              <label
                className={`text-lg text-white/60 group-focus-within:text-green-400 transition-colors ${adamina.className}`}
              >
                Message
              </label>
              <textarea
                className={`text-white/90 border-b border-white/25 focus:border-green-400 focus:outline-none bg-transparent w-full py-3 mt-2 placeholder-white/20 transition-all resize-y min-h-[120px] ${adamina.className}`}
                rows={4}
                placeholder="Hi, I'm reaching out regarding an internship opportunity..."
                value={form.message}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, message: e.target.value }))
                }
              />
            </div>

            <div className="w-full flex flex-col items-end gap-2">
              <button
                disabled={loading}
                className={`group flex items-center gap-3 bg-green-500/80 hover:bg-green-500 px-10 py-3 border border-green-600 transition-all duration-300 cursor-pointer ${adamina.className} disabled:opacity-70 disabled:cursor-not-allowed`}
              >
                {loading ? (
                  <>
                    <span className="text-lg text-white">Sending...</span>
                    <Loader2 size={18} className="text-white animate-spin" />
                  </>
                ) : (
                  <>
                    <span className="text-lg text-white">Send Message</span>
                    <Send
                      size={18}
                      className="text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    />
                  </>
                )}
              </button>
              {status && (
                <p
                  className={`text-sm ${
                    status.includes("Sent") ? "text-green-400" : "text-red-400"
                  } ${adamina.className}`}
                >
                  {status}
                </p>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
