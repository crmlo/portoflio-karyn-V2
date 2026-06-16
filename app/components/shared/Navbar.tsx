"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const workLinks = [
  { href: "/work/nilo-chat", label: "Nilo ChatAI" },
  { href: "/work/cardapio-digital", label: "Cardápio Digital" },
  { href: "/work/nilo-compass", label: "Nilo Compass" },
];

function useScrollVisibility() {
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
}

export function Navbar() {
  const isVisible = useScrollVisibility();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    closeMobileMenu();
  };

  const contactLabel = language === "pt" ? "Contato" : "Contact";

  const LanguageToggle = ({ className }: { className?: string }) => (
    <div
      className={clsx(
        "flex items-center gap-1 rounded-full border border-border-primary p-1",
        className,
      )}
    >
      <button
        type="button"
        onClick={() => setLanguage("pt")}
        aria-label="Português"
        aria-pressed={language === "pt"}
        className={clsx(
          "flex size-7 items-center justify-center rounded-full text-base transition-opacity",
          language === "pt" ? "opacity-100" : "opacity-40 hover:opacity-70",
        )}
      >
        🇧🇷
      </button>
      <button
        type="button"
        onClick={() => setLanguage("en")}
        aria-label="English"
        aria-pressed={language === "en"}
        className={clsx(
          "flex size-7 items-center justify-center rounded-full text-base transition-opacity",
          language === "en" ? "opacity-100" : "opacity-40 hover:opacity-70",
        )}
      >
        🇺🇸
      </button>
    </div>
  );

  return (
    <header
      className={clsx(
        "fixed top-0 z-50 w-full bg-white shadow-sm transition-transform duration-300",
        isVisible ? "translate-y-0" : "-translate-y-full",
      )}
    >
      <div className="px-[5%]">
        <div className="container flex h-16 items-center justify-between md:h-[72px]">
          <Link
            href="/"
            className="flex-shrink-0 text-xl"
            style={{ fontFamily: "'DM Serif Text', serif" }}
          >
            Karyn Loreyne
          </Link>

          <div className="hidden items-center gap-x-8 lg:flex">
            <nav className="flex items-center gap-x-8">
              {workLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={clsx(
                      "font-['Inter'] text-base font-medium transition-colors hover:text-black",
                      isActive
                        ? "text-black underline underline-offset-4"
                        : "text-black/60",
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
            <LanguageToggle />
            <a
              href="#contact"
              onClick={handleContactClick}
              className="inline-flex items-center justify-center rounded-full bg-[#8AA0FF] px-6 py-2 font-['Inter'] text-sm font-semibold text-black transition hover:opacity-90"
            >
              {contactLabel}
            </a>
          </div>

          <div className="flex items-center gap-x-3 lg:hidden">
            <LanguageToggle />
            <button
              className="flex size-10 items-center justify-center"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-border-primary bg-white lg:hidden"
          >
            <nav className="flex flex-col gap-y-4 px-[5%] py-6">
              {workLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMobileMenu}
                    className={clsx(
                      "font-['Inter'] text-base font-medium transition-colors hover:text-black",
                      isActive
                        ? "text-black underline underline-offset-4"
                        : "text-black/60",
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <a
                href="#contact"
                onClick={handleContactClick}
                className="inline-flex items-center justify-center rounded-full bg-[#8AA0FF] px-6 py-2 font-['Inter'] text-sm font-semibold text-black transition hover:opacity-90"
              >
                {contactLabel}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
