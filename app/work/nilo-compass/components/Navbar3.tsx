"use client";

import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export function Navbar3() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY < 80) {
        setVisible(true);
      } else {
        setVisible(currentY < lastScrollY.current);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={clsx(
          "fixed top-0 z-50 w-full border-b border-border-primary bg-white transition-transform duration-300",
          visible ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div className="flex h-16 items-center justify-between px-[5%] md:h-[72px]">
          <Link href="/" className="text-base font-semibold text-black">
            Karyn Loreyne
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 lg:flex">
            <Link href="/#work" className="text-sm font-medium text-black hover:opacity-60 transition-opacity">Work</Link>
            <Link href="/#about" className="text-sm font-medium text-black hover:opacity-60 transition-opacity">About</Link>
            <Link href="/#contact" className="text-sm font-medium text-black hover:opacity-60 transition-opacity">Contact</Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="flex size-10 flex-col items-center justify-center gap-[5px] lg:hidden"
            onClick={() => setIsMobileMenuOpen((p) => !p)}
            aria-label="Toggle menu"
          >
            <span className="h-0.5 w-6 bg-black" />
            <span className="h-0.5 w-6 bg-black" />
            <span className="h-0.5 w-6 bg-black" />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              key="drawer"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", duration: 0.4, bounce: 0 }}
              className="fixed left-0 top-0 z-50 flex h-dvh w-[80%] flex-col border-r border-border-primary bg-white px-[5%] pb-8 pt-20 lg:hidden"
            >
              <nav className="flex flex-col gap-6">
                <Link href="/#work" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>Work</Link>
                <Link href="/#about" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
                <Link href="/#contact" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
