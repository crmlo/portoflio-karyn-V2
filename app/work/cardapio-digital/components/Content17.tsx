"use client";

import React from "react";
import { useLanguage } from "../../../context/LanguageContext";

export function Content17() {
  const { language } = useLanguage();
  const t =
    language === "pt"
      ? {
          heading: "End-to-end, do pré-lançamento ao crescimento.",
          body1:
            "Entrei no projeto cerca de dois a três meses antes do primeiro lançamento, como a única product designer. Trabalhei em todo o produto: aprimorando o V1 antes do lançamento, conduzindo um teste A/B fake door para validar o posicionamento de aquisição, liderando a pesquisa pós-lançamento junto com uma colega designer, e desenhando as funcionalidades que surgiram dela.",
          body2:
            "A PM, os engenheiros e uma colega pesquisadora foram meus principais colaboradores.",
        }
      : {
          heading: "End-to-end, from pre-launch to growth",
          body1:
            "I joined the project before launch and stayed through the growth phase, which meant I was part of every major design decision from the beginning. Pre-launch, that meant validating our positioning through A/B testing. Post-launch, it meant leading the research that diagnosed why the product wasn't growing and designing the features that fixed it.",
          body2:
            "The project moved through three distinct phases: positioning validation before launch, a deep discovery sprint when growth stalled, and a full V2 redesign informed by what we found. Each phase had its own constraints and outputs, but the through-line was the same: decisions grounded in evidence.",
        };

  return (
    <section className="bg-black px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-[1fr_1.5fr] md:gap-x-12 lg:gap-x-20">
          <div>
            <h3 className="text-4xl font-bold leading-[1.2] text-white md:text-5xl lg:text-6xl">
              {t.heading}
            </h3>
          </div>
          <div>
            <div className="flex flex-col gap-4">
              <p className="text-white/80 md:text-md">{t.body1}</p>
              <p className="text-white/80 md:text-md">{t.body2}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
