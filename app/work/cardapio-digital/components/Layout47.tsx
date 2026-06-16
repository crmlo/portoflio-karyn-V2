"use client";

import React from "react";
import { useLanguage } from "../../../context/LanguageContext";

export function Layout47() {
  const { language } = useLanguage();
  const t =
    language === "pt"
      ? {
          eyebrow: "A pesquisa",
          heading:
            "Entender a diferença entre se cadastrar e realmente usar o produto.",
          body: "Um estudo em duas fases que partiu de histórias individuais para padrões identificados em mais de 13 mil restaurantes.",
          qualTitle: "Qualitativa",
          qualStat: "22 entrevistas · 11 engajados, 11 desengajados.",
          qualBody:
            "Na primeira fase, fizemos entrevistas qualitativas com 22 parceiros: 11 usando ativamente o produto e 11 que tinham parado. O objetivo não era só encontrar problemas, era entender o que motivava ou desmotivava os parceiros a usar o Cardápio Digital. A divisão foi intencional: se conseguíssemos entender o que fazia o grupo engajado funcionar, poderíamos avaliar se isso era replicável.",
          quantTitle: "Quantitativa",
          quantStat: "13.944 respondentes.",
          quantBody:
            "Esses achados moldaram completamente a segunda fase. Com um panorama mais claro dos pontos de fricção, construímos uma pesquisa quantitativa enviada a 13.944 parceiros. Foi aí que tivemos a dimensão real: a escala dos gaps de compreensão, como o comportamento diferia da percepção, e exatamente quais gaps de funcionalidade bloqueavam a adoção na base mais ampla.",
        }
      : {
          eyebrow: "The research",
          heading:
            "Understanding the gap between signing up and actually using the product.",
          body: "A two-phase study that moved from individual stories to patterns across more than 13,000 restaurants.",
          qualTitle: "Qualitative",
          qualStat: "22 interviews · 11 engaged, 11 disengaged.",
          qualBody:
            "We talked to partners on both sides of the adoption gap to understand what motivated or blocked them. The goal was to find patterns, not just complaints.",
          quantTitle: "Quantitative",
          quantStat: "13,944 respondents.",
          quantBody:
            "Built directly from what the qualitative revealed. This is where we measured the real scale: comprehension gaps, behavior vs. perception, and which feature gaps were blocking adoption across the broader base.",
        };

  return (
    <section className="bg-[#F3F5FF] px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">{t.eyebrow}</p>
            <h2 className="text-5xl font-bold md:text-7xl lg:text-8xl">
              {t.heading}
            </h2>
          </div>
          <div>
            <p className="mb-6 md:mb-8 md:text-md">{t.body}</p>
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 py-2 sm:grid-cols-2">
              <div>
                <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">{t.qualTitle}</h6>
                <p className="mb-3">{t.qualStat}</p>
                <p>{t.qualBody}</p>
              </div>
              <div>
                <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">{t.quantTitle}</h6>
                <p className="mb-3">{t.quantStat}</p>
                <p>{t.quantBody}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
