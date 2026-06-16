"use client";

import React from "react";
import { CheckCircle } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext";

export function Layout65_1() {
  const { language } = useLanguage();
  const t =
    language === "pt"
      ? {
          eyebrow: "Resultados",
          heading: "De 172 mil para 2 milhões de pedidos em quatro meses.",
          body: "Em janeiro de 2022, aproximadamente quatro meses após a conclusão da pesquisa e o lançamento das primeiras melhorias, o Cardápio Digital havia atingido 2 milhões de pedidos. A curva de crescimento havia mudado completamente. Ainda não havíamos atingido a meta de março de 3 milhões, mas o time sabia que estávamos no caminho certo. Acompanhei o produto até março de 2022, quando saí do projeto.",
          stat1: "Set/21: 12 mil restaurantes ativos, 172 mil pedidos",
          stat2: "Jan/22: 2 milhões de pedidos realizados",
          stat3: "Escala da pesquisa: 22 entrevistas qualitativas + 13.944 respondentes",
        }
      : {
          eyebrow: "Results",
          heading: "From 172k to 2MM orders in four months.",
          body: "By January 2022, roughly four months after the research was completed and the first improvements shipped, Cardápio Digital had reached 2MM orders placed. That's more than 10x the volume we had in September. We hadn't hit the March goal of 3MM yet, but the growth curve had changed completely. The team knew we were on the right track. I followed the product through March 2022, when I left the project.",
          stat1: "Sep/21: 12k active restaurants, 172k orders",
          stat2: "Jan/22: 2MM orders placed",
          stat3: "Research scale: 22 qualitative interviews + 13,944 survey respondents",
        };

  return (
    <section className="bg-black px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-5 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold text-white/60 md:mb-4">{t.eyebrow}</p>
            <h2 className="text-5xl font-bold text-white md:text-7xl lg:text-8xl">
              {t.heading}
            </h2>
          </div>
          <div>
            <p className="mb-5 text-white/80 md:mb-6 md:text-md">{t.body}</p>
            <ul className="grid grid-cols-1 gap-4 py-2">
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start text-white">
                  <CheckCircle className="size-6" strokeWidth={1.5} />
                </div>
                <p className="text-white/80">{t.stat1}</p>
              </li>
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start text-white">
                  <CheckCircle className="size-6" strokeWidth={1.5} />
                </div>
                <p className="text-white/80">{t.stat2}</p>
              </li>
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start text-white">
                  <CheckCircle className="size-6" strokeWidth={1.5} />
                </div>
                <p className="text-white/80">{t.stat3}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
