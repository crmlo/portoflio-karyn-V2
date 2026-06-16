"use client";

import React from "react";
import { useLanguage } from "../../../context/LanguageContext";

export function Header44() {
  const { language } = useLanguage();
  const t =
    language === "pt"
      ? {
          eyebrow: "Próximo",
          heading:
            "Este é um preview. O case completo inclui as sessões de co-criação, os achados da validação e as telas finais em detalhes. Quer ver a história completa? Fale comigo.",
        }
      : {
          eyebrow: "Next",
          heading:
            "This is a preview. The complete case includes the co-creation sessions, validation findings, and the final screens in detail. Want to see the full story? Let's talk.",
        };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28" style={{ backgroundColor: "#8AA0FF" }}>
      <div className="container">
        <div className="w-full max-w-lg">
          <p className="mb-3 font-semibold text-black md:mb-4">{t.eyebrow}</p>
          <h1 className="mb-5 text-6xl font-bold text-black md:mb-6 md:text-9xl lg:text-10xl">
            {t.heading}
          </h1>
        </div>
      </div>
    </section>
  );
}
