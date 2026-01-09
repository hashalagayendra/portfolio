"use client";
import Link from "next/link";
import { useState, MouseEvent, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

type NavLink = {
  href: string;
  label: string;
  hash?: string;
};

const navLinks: NavLink[] = [
  { href: "/#home", label: "Home", hash: "#home" },
  { href: "/#about", label: "About", hash: "#about" },
  { href: "/#stack", label: "Stack", hash: "#stack" },
  { href: "/#projects", label: "Projects", hash: "#projects" },
  { href: "/#contact", label: "Contact", hash: "#contact" },
];

const brandLink = navLinks[0];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavClick =
    (link: NavLink) => (event: MouseEvent<HTMLAnchorElement>) => {
      closeMenu();

      if (!link.hash) {
        return;
      }

      const isOnHome = pathname === "/" || pathname === "";

      if (!isOnHome) {
        return;
      }

      event.preventDefault();

      if (typeof document === "undefined") {
        return;
      }

      const targetElement = document.querySelector(
        link.hash
      ) as HTMLElement | null;

      if (!targetElement) {
        window.history.replaceState(null, "", link.hash);
        return;
      }

      const header = document.querySelector("header");
      const offset = header?.getBoundingClientRect().height ?? 0;
      const lenisInstance = window.lenis;

      if (lenisInstance) {
        lenisInstance.scrollTo(targetElement, { offset: -offset });
      } else {
        const targetPosition =
          window.scrollY + targetElement.getBoundingClientRect().top - offset;

        window.scrollTo({ top: targetPosition, behavior: "smooth" });
      }

      window.history.replaceState(null, "", link.hash);
    };

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-transparent">
      <nav className="relative z-10 mx-auto flex max-w-[1920px] items-center justify-between px-6 py-4 md:px-12 xl:px-32">
        <Link
          href={brandLink.href}
          onClick={handleNavClick(brandLink)}
          className="text-lg font-semibold text-white/80 transition-colors hover:text-green-400"
        >
          Hashala
        </Link>
        <button
          onClick={toggleMenu}
          className="relative z-[60] flex h-10 w-10 items-center justify-center rounded-full  text-white/70 backdrop-blur-sm transition-all duration-300 hover:border-green-400/40 hover:text-green-400 md:hidden"
          aria-label="Toggle navigation menu"
        >
          <span
            className={`absolute transition-all duration-300 ${
              isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
            }`}
          >
            <Menu size={24} />
          </span>
          <span
            className={`absolute transition-all duration-300 ${
              isOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
            }`}
          >
            <X size={18} />
          </span>
        </button>
        <div className="hidden items-center gap-8 text-sm font-medium text-white/70 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={handleNavClick(link)}
              className="uppercase tracking-widest transition-colors hover:text-green-400"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeMenu}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed right-0 top-0 z-50 flex h-full w-[280px] flex-col bg-gradient-to-b from-[#0d1117] via-[#0d1117]/98 to-[#0d1117]/95 shadow-2xl shadow-black/50 transition-transform duration-300 ease-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Menu Header */}
        <div className="flex items-center justify-between border-b border-white/5 px-6 py-5">
          <span className="text-sm font-medium uppercase tracking-widest text-white/50">
            Menu
          </span>
          <button
            onClick={closeMenu}
            className="flex h-8 w-8 items-center justify-center  text-white/50 transition-colors hover:border-green-400/40 hover:text-green-400"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-1 flex-col gap-1 overflow-y-auto  py-6">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={handleNavClick(link)}
              className={`group relative flex items-center gap-4  px-4 py-4 transition-all duration-300 hover:bg-white/5 hover:text-green-400 ${
                isOpen ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
              }`}
              style={{
                transitionDelay: isOpen ? `${index * 50 + 100}ms` : "0ms",
              }}
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg   text-md font-bold text-white/30 transition-all duration-300  group-hover:text-green-400">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-sm font-medium uppercase tracking-widest">
                {link.label}
              </span>
            </Link>
          ))}
        </div>

        {/* Menu Footer */}
        <div className="border-t border-white/5 px-6 py-4">
          <p className="text-center text-xs text-white/30">© 2026 Hashala</p>
        </div>

        {/* Decorative Elements */}
        <div className="pointer-events-none absolute -left-20 top-1/4 h-40 w-40 rounded-full bg-green-400/5 blur-3xl" />
        <div className="pointer-events-none absolute -right-10 bottom-1/4 h-32 w-32 rounded-full bg-green-400/10 blur-3xl" />
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-full -z-10 bg-gradient-to-b from-black/80 via-black/40 to-transparent backdrop-blur-md" />
    </header>
  );
}

export default Navbar;
