"use client";

import Image from "next/image";
import React from "react";
import { useLanguage } from "../../../context/LanguageContext";

export function PortfolioHeader7() {
  const { language } = useLanguage();
  const t =
    language === "pt"
      ? {
          heading:
            "De solicitações avulsas de dados à clareza: dando aos gestores de saúde os dados que eles não sabiam que precisavam.",
          body1:
            "A Nilo já tinha um produto forte para navegação e engajamento de pacientes. O que faltava era uma forma de os gestores de saúde entenderem o que realmente estava acontecendo em suas operações.",
          body2:
            "O Compass foi construído para preencher essa lacuna: um produto de analytics estruturado e propositivo que transformou uma enxurrada de solicitações avulsas de dados em uma ferramenta que os gestores podiam usar para tomar decisões e comprovar seu próprio impacto.",
          tag1: "Arquitetura da Informação",
          tag2: "Visualização de dados",
          tag3: "Design end-to-end",
          companyLabel: "Empresa",
          company: "Nilo",
          durationLabel: "Duração",
          duration: "11 meses",
          roleLabel: "Papel",
          role: "Designer solo",
          toolsLabel: "Ferramentas",
          tools: "Figma",
        }
      : {
          heading:
            "From ad-hoc data requests to clarity: giving healthcare managers the data they didn't know they needed.",
          body1:
            "Nilo already had a strong product for patient navigation and engagement. What was missing was a way for healthcare managers to understand what was actually happening in their operations.",
          body2:
            "Compass was built to fill that gap: a structured, curated analytics product that turned a flood of ad-hoc data requests into a tool managers could use to make decisions and prove their own impact.",
          tag1: "Information Architecture",
          tag2: "Data visualization",
          tag3: "End-to-end design",
          companyLabel: "Company",
          company: "Nilo",
          durationLabel: "Duration",
          duration: "11 months",
          roleLabel: "Role",
          role: "Solo designer",
          toolsLabel: "Tools",
          tools: "Figma",
        };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start gap-12 md:mb-18 md:grid-cols-[1.5fr_1fr] lg:mb-20 lg:gap-x-20">
          <div>
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
              {t.heading}
            </h1>
            <p className="mb-4 md:text-md">{t.body1}</p>
            <p className="md:text-md">{t.body2}</p>
            <ul className="mt-5 flex flex-wrap gap-2 md:mt-6">
              <li className="flex list-none">
                <span className="bg-background-secondary px-2 py-1 text-sm font-semibold">{t.tag1}</span>
              </li>
              <li className="flex list-none">
                <span className="bg-background-secondary px-2 py-1 text-sm font-semibold">{t.tag2}</span>
              </li>
              <li className="flex list-none">
                <span className="bg-background-secondary px-2 py-1 text-sm font-semibold">{t.tag3}</span>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">{t.companyLabel}</h3>
              <p>{t.company}</p>
            </div>
            <div>
              <h3 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">{t.durationLabel}</h3>
              <p>{t.duration}</p>
            </div>
            <div>
              <h3 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">{t.roleLabel}</h3>
              <p>{t.role}</p>
            </div>
            <div>
              <h3 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">{t.toolsLabel}</h3>
              <p>{t.tools}</p>
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/images/nilo-compass.jpg"
            alt="Nilo Compass case study hero"
            width={1600}
            height={900}
            className="w-full h-auto rounded-2xl object-cover"
            quality={90}
            priority
          />
        </div>
      </div>
    </section>
  );
}
