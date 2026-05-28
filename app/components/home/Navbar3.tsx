"use client";

import { Button, useMediaQuery } from "@relume_io/relume-ui";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const useScrollVisibility = () => {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY.current || currentScrollY < 80) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isVisible;
};

const useRelume = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 991px)");
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const getMobileOverlayClassNames = clsx(
    "fixed inset-0 z-40 bg-black lg:hidden",
    {
      block: isMobileMenuOpen,
      hidden: !isMobileMenuOpen,
    },
  );
  const NavbarWrapper = isMobile ? motion.div : "div";
  const animateMobileMenu = isMobileMenuOpen ? "open" : "close";
  return {
    toggleMobileMenu,
    getMobileOverlayClassNames,
    animateMobileMenu,
    NavbarWrapper,
    isMobileMenuOpen,
  };
};

export function Navbar3() {
  const isVisible = useScrollVisibility();
  const useActive = useRelume();

  return (
    <header
      className={clsx(
        "fixed top-0 z-50 w-full transition-transform duration-300",
        isVisible ? "translate-y-0" : "-translate-y-full",
      )}
    >
      <section className="grid h-auto w-full grid-cols-[1fr_max-content_1fr] items-center justify-between border-b border-border-primary bg-background-primary px-[5%] md:min-h-18">
        <button
          className="flex size-12 flex-col justify-center lg:hidden"
          onClick={useActive.toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span className="my-[3px] h-0.5 w-6 bg-black lg:hidden" />
          <span className="my-[3px] h-0.5 w-6 bg-black lg:hidden" />
          <span className="my-[3px] h-0.5 w-6 bg-black lg:hidden" />
        </button>
        <AnimatePresence>
          <useActive.NavbarWrapper
            initial="closed"
            animate={useActive.animateMobileMenu}
            exit="closed"
            variants={{
              closed: {
                x: "-100%",
                opacity: 1,
                transition: { type: "spring", duration: 0.6, bounce: 0 },
                transitionEnd: {
                  opacity: "var(--opacity-closed, 0%)" as unknown as number,
                  x: "var(--x-closed, -100%)" as unknown as number,
                },
              },
              open: {
                x: 0,
                opacity: 1,
                transition: { type: "spring", duration: 0.4, bounce: 0 },
              },
            }}
            className="absolute left-0 top-0 z-50 flex h-dvh w-[90%] flex-col border-r border-border-primary bg-white px-[5%] pb-4 md:w-[80%] lg:visible lg:static lg:-ml-4 lg:flex lg:h-auto lg:w-auto lg:flex-row lg:items-center lg:gap-x-8 lg:border-none lg:px-0 lg:pb-0 lg:[--opacity-closed:100%] lg:[--x-closed:0%]"
          >
            <a href="/" className="mb-8 mt-10 flex flex-shrink-0 text-xl font-bold lg:hidden">
              Karyn Loreyne
            </a>
            <nav className="mt-4 flex flex-col gap-y-4 lg:mt-0 lg:flex-row lg:gap-x-8 lg:gap-y-0">
              <a href="/#work" className="text-base font-semibold hover:underline">Work</a>
              <a href="/#about" className="text-base font-semibold hover:underline">About</a>
              <a href="#contact" className="text-base font-semibold hover:underline">Contact</a>
            </nav>
            <div className="mt-6 lg:hidden">
              <Button title="Resume" size="sm" className="w-full">Resume</Button>
            </div>
          </useActive.NavbarWrapper>
          <motion.div
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: useActive.isMobileMenuOpen ? 0.5 : 0 }}
            transition={{ duration: 0.2 }}
            className={useActive.getMobileOverlayClassNames}
            onClick={useActive.toggleMobileMenu}
          />
        </AnimatePresence>
        <a href="/" className="flex min-h-16 flex-shrink-0 items-center text-xl font-bold">
          Karyn Loreyne
        </a>
        <div className="flex min-h-16 items-center justify-end gap-x-4">
          <nav className="hidden items-center gap-x-8 lg:flex">
            <a href="/#work" className="text-base font-semibold hover:underline">Work</a>
            <a href="/#about" className="text-base font-semibold hover:underline">About</a>
            <a href="#contact" className="text-base font-semibold hover:underline">Contact</a>
          </nav>
        </div>
      </section>
    </header>
  );
}
