"use client";

import React from "react";
import { useLanguage } from "../../../context/LanguageContext";

export function Stats17() {
  const { language } = useLanguage();
  const t =
    language === "pt"
      ? {
          eyebrow: "Piloto · Grupo Fleury · 4 meses",
          heading: "Resultados",
          body: "Após dois meses de piloto ativo, o agente passou de monitoramento em horário parcial para horário comercial completo, e o Fleury expandiu para 24/7 logo depois. Os números falaram por si mesmos, e outros clientes seguiram.",
          stat1: "Redução nas solicitações de triagem humana",
          stat2: "Liberadas por profissional por dia",
          stat3: "Conversas diárias tratadas pela Clara. Apenas 10 chegaram ao time",
          stat4: "Cuidado contínuo. Antes apenas em horário comercial",
        }
      : {
          eyebrow: "Pilot · Grupo Fleury · 4 months",
          heading: "Results",
          body: "After two months of active pilot, the agent moved from part-time monitoring to full business hours — and Fleury expanded to 24/7 shortly after. The numbers spoke for themselves, and other clients followed.",
          stat1: "Reduction in human triage requests",
          stat2: "Freed per professional daily",
          stat3: "Daily conversations handled by Clara - Only 10 reached the team",
          stat4: "Continuous care - previously business hours only",
        };

  return (
    <section id="relume" className="bg-black px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-y-12 lg:grid-cols-2 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold text-text-alternative md:mb-4">
              {t.eyebrow}
            </p>
            <h2 className="mb-5 text-5xl font-bold text-text-alternative md:mb-6 md:text-7xl lg:text-8xl">
              {t.heading}
            </h2>
            <p className="text-text-alternative md:text-md">{t.body}</p>
          </div>
          <div className="grid grid-cols-1 gap-y-8 py-2 md:grid-cols-2 md:gap-x-8 md:gap-y-12">
            <div className="border-l-2 border-border-alternative pl-8">
              <p className="mb-2 text-10xl font-bold leading-[1.3] text-text-alternative md:text-[4rem] lg:text-[5rem]">
                96%
              </p>
              <h3 className="text-md font-bold leading-[1.4] text-text-alternative md:text-xl">
                {t.stat1}
              </h3>
            </div>
            <div className="border-l-2 border-border-alternative pl-8">
              <p className="mb-2 text-10xl font-bold leading-[1.3] text-text-alternative md:text-[4rem] lg:text-[5rem]">
                4h
              </p>
              <h3 className="text-md font-bold leading-[1.4] text-text-alternative md:text-xl">
                {t.stat2}
              </h3>
            </div>
            <div className="border-l-2 border-border-alternative pl-8">
              <p className="mb-2 text-10xl font-bold leading-[1.3] text-text-alternative md:text-[4rem] lg:text-[5rem]">
                240
              </p>
              <h3 className="text-md font-bold leading-[1.4] text-text-alternative md:text-xl">
                {t.stat3}
              </h3>
            </div>
            <div className="border-l-2 border-border-alternative pl-8">
              <p className="mb-2 text-10xl font-bold leading-[1.3] text-text-alternative md:text-[4rem] lg:text-[5rem]">
                24/7
              </p>
              <h3 className="text-md font-bold leading-[1.4] text-text-alternative md:text-xl">
                {t.stat4}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
