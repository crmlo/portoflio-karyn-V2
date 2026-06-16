"use client";

import React from "react";
import { useLanguage } from "../../context/LanguageContext";

export function CtaBanner() {
  const { language } = useLanguage();

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const t =
    language === "pt"
      ? {
          heading: "Vamos criar algo incrível juntos!",
          body: "Estou aberta a novas oportunidades: tempo integral, contrato ou só uma boa conversa sobre o que vem a seguir.",
          cta: "Fale comigo",
        }
      : {
          heading: "Let's make something great together",
          body: "I'm open to new opportunities, full-time, contract, or just a good conversation about what's next.",
          cta: "Let's talk",
        };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28" style={{ backgroundColor: "#8AA0FF" }}>
      <div className="container max-w-lg text-left">
        <h2 className="mb-5 text-5xl font-bold text-black md:mb-6 md:text-7xl lg:text-8xl">
          {t.heading}
        </h2>
        <p className="text-black md:text-md">{t.body}</p>
        <a
          href="#contact"
          onClick={handleContactClick}
          className="mt-6 inline-flex items-center justify-center rounded-full bg-black px-6 py-3 font-['Inter'] text-sm font-semibold text-white transition hover:opacity-90 md:mt-8"
        >
          {t.cta}
        </a>
      </div>
    </section>
  );
}
