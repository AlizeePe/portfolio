"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      aria-label="Main navigation"
      className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur"
    >
      <div className="flex items-center justify-between px-6 py-8 md:px-12">
        <span className="text-sm font-medium tracking-widest uppercase text-neutral-500">
          Alizée Perrichon
        </span>

        <ul className="hidden gap-10 md:flex">
          {links.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                className={`text-sm tracking-wide transition-colors duration-200 ${
                  label === "Contact"
                    ? "text-blue"
                    : "text-neutral-600 hover:text-blue"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((prev) => !prev)}
          className="flex flex-col gap-1.5 p-1 md:hidden"
        >
          {[0, 1, 2].map((item) => (
            <span
              key={item}
              className={`block h-px w-5 transition-colors duration-200 ${
                open ? "bg-blue" : "bg-neutral-600"
              }`}
            />
          ))}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.ul
            id="mobile-menu"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute left-0 right-0 top-full z-50 flex flex-col border-t border-neutral-200 bg-white/90 backdrop-blur md:hidden"
          >
            {links.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`block border-b border-neutral-100 px-6 py-4 text-sm tracking-wide transition-colors duration-200 ${
                    label === "Contact"
                      ? "text-blue"
                      : "text-neutral-600 hover:text-blue"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
