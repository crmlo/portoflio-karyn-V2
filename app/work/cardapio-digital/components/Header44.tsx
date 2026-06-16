"use client";

import React from "react";
import { useLanguage } from "../../../context/LanguageContext";

export function Header44() {
  const { language } = useLanguage();
  const t =
    language === "pt"
      ? {
          eyebrow: "Próximo",
          heading: "Quer ver os achados completos da pesquisa e os designs do V2? Fale comigo.",
        }
      : {
          eyebrow: "Next",
          heading: "Want to see the full research findings and the V2 designs? Let's talk.",
        };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28" style={{ backgroundColor: "#8AA0FF" }}>
      <div className="container">
        <div className="w-full max-w-lg">
          <p className="mb-3 font-semibold md:mb-4">{t.eyebrow}</p>
          <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
            {t.heading}
          </h1>
        </div>
      </div>
    </section>
  );
}
