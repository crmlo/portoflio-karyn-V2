"use client";

import React from "react";
import { useLanguage } from "../../context/LanguageContext";

export function CtaBanner() {
  const { language } = useLanguage();

  const t =
    language === "pt"
      ? {
          heading: "Vamos criar algo incrível juntos!",
          body: "Estou aberta a novas oportunidades: tempo integral, contrato ou só uma boa conversa sobre o que vem a seguir.",
        }
      : {
          heading: "Let's make something great together",
          body: "I'm open to new opportunities, full-time, contract, or just a good conversation about what's next.",
        };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28" style={{ backgroundColor: "#8AA0FF" }}>
      <div className="container">
        <div className="max-w-lg text-left">
          <h2 className="mb-5 text-5xl font-bold text-black md:mb-6 md:text-7xl lg:text-8xl">
            {t.heading}
          </h2>
          <p className="text-black md:text-md">{t.body}</p>
        </div>
      </div>
    </section>
  );
}
