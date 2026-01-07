"use client";
import Link from "next/link";
import { useState, MouseEvent } from "react";
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
          className="flex items-center justify-center rounded-md p-2 text-white/70 transition-colors hover:text-green-400 md:hidden"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
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
      {isOpen && (
        <div className="relative z-10 mx-auto mt-1 flex max-w-[1920px] flex-col gap-4 px-6 pb-6 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={handleNavClick(link)}
              className="rounded-md border border-white/10 px-4 py-3 text-sm font-medium uppercase tracking-widest text-white/70 transition-colors hover:border-green-400/40 hover:text-green-400"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-full -z-10 bg-gradient-to-b from-black/80 via-black/40 to-transparent backdrop-blur-md" />
    </header>
  );
}

export default Navbar;
