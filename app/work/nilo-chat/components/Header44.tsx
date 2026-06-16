"use client";

import React from "react";
import { useLanguage } from "../../../context/LanguageContext";

export function Header44() {
  const { language } = useLanguage();
  const t =
    language === "pt"
      ? {
          eyebrow: "Próximo",
          heading: "Quer ver a história completa?",
          body: "Este é um preview. O case completo vai mais fundo: walkthrough completo da interface, o framework de guardrails, restrições de memória do agente e como moldaram as decisões de design, cada fluxo de exceção mapeado e o raciocínio completo por trás de cada tradeoff. Apresento tudo em apresentações ao vivo. Se isso despertou seu interesse, adoraria te mostrar.",
        }
      : {
          eyebrow: "Next",
          heading: "Want to see the full story?",
          body: "This is a preview. The full case study goes deeper — complete interface walkthrough, the guardrails framework, agent memory constraints and how they shaped design decisions, every exception flow mapped, and the full reasoning behind each tradeoff. I walk through it all in live presentations. If this sparked your interest, I'd love to walk you through it.",
        };

  return (
    <section id="relume" className="bg-malibu px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="w-full max-w-lg">
          <p className="mb-3 font-semibold text-black md:mb-4">{t.eyebrow}</p>
          <h1 className="mb-5 text-6xl font-bold text-black md:mb-6 md:text-9xl lg:text-10xl">
            {t.heading}
          </h1>
          <p className="text-black/80 md:text-md">{t.body}</p>
        </div>
      </div>
    </section>
  );
}
