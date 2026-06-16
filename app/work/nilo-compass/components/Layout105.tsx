"use client";

import Image from "next/image";
import React from "react";
import { useLanguage } from "../../../context/LanguageContext";

export function Layout105() {
  const { language } = useLanguage();
  const t =
    language === "pt"
      ? {
          eyebrow: "Solução",
          heading:
            "Propositivo por design: dados organizados, interpretados e prontos para agir.",
          body1:
            "O Compass foi construído em torno da ideia de que um gestor de saúde não deveria precisar pensar muito para entender sua operação. Cada decisão de design reforçou esse princípio. Os dados foram organizados em dashboards por caso de uso, não em uma tela em branco.",
          body2:
            "Cada caso de uso tinha um conjunto curado de métricas, visualizações pré-definidas e sinais contextuais que indicavam se um número estava bom, crítico ou exigia atenção. Os gestores não precisavam configurar nada. Abriam o Compass e o panorama já estava lá.",
        }
      : {
          eyebrow: "Solution",
          heading:
            "Curated by design: data organized, interpreted, and ready to act on.",
          body1:
            "Compass was built around the idea that a healthcare manager shouldn't have to think hard to understand their operation. Every design decision reinforced that principle. Data was organized into themed dashboards, not a blank canvas.",
          body2:
            "Each theme had a curated set of metrics, pre-defined visualizations, and contextual signals that indicated whether a number was good, critical, or required attention. Managers didn't need to configure anything. They opened Compass and the picture was already there.",
        };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">{t.eyebrow}</p>
            <h3 className="text-5xl font-bold leading-[1.2] md:text-7xl lg:text-8xl">
              {t.heading}
            </h3>
          </div>
          <div>
            <p className="mb-4 md:text-md">{t.body1}</p>
            <p className="mb-5 md:mb-4 md:text-md">{t.body2}</p>
          </div>
        </div>
        <Image
          src="/images/CompassHome.png"
          width={1600}
          height={900}
          className="w-full h-auto rounded-2xl object-cover"
          alt="Compass solution overview"
          quality={90}
        />
      </div>
    </section>
  );
}
