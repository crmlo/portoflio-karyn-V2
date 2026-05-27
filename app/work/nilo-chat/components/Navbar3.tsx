"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

export function Navbar3() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e5e5e5] bg-white">
      <div className="relative grid h-16 grid-cols-[1fr_auto_1fr] items-center px-[5%]">

        {/* Left — Work + About on desktop, hamburger on mobile */}
        <nav className="flex items-center gap-8">
          <button
            className="flex flex-col justify-center gap-[5px] lg:hidden"
            onClick={() => setIsOpen((p) => !p)}
            aria-label="Toggle menu"
          >
            <span className="h-px w-5 bg-[#1F2933]" />
            <span className="h-px w-5 bg-[#1F2933]" />
            <span className="h-px w-5 bg-[#1F2933]" />
          </button>
          <a
            href="/work"
            className="hidden text-sm font-medium text-[#1F2933] transition-opacity hover:opacity-60 lg:block"
          >
            Work
          </a>
          <a
            href="/about"
            className="hidden text-sm font-medium text-[#1F2933] transition-opacity hover:opacity-60 lg:block"
          >
            About
          </a>
        </nav>

        {/* Center — logo */}
        <a
          href="/"
          className="text-base font-semibold tracking-tight text-[#1F2933]"
        >
          Karyn Loreyne
        </a>

        {/* Right — Contact on desktop */}
        <nav className="flex items-center justify-end">
          <a
            href="/contact"
            className="hidden text-sm font-medium text-[#1F2933] transition-opacity hover:opacity-60 lg:block"
          >
            Contact
          </a>
        </nav>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.nav
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", duration: 0.4, bounce: 0 }}
              className="fixed inset-y-0 left-0 z-50 flex w-[80%] max-w-xs flex-col gap-6 border-r border-[#e5e5e5] bg-white px-8 pt-20 pb-10"
            >
              <a href="/" className="mb-4 text-base font-semibold text-[#1F2933]">
                Karyn Loreyne
              </a>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium text-[#1F2933] transition-opacity hover:opacity-60"
                >
                  {link.label}
                </a>
              ))}
            </motion.nav>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black lg:hidden"
              onClick={() => setIsOpen(false)}
            />
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
