"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "../../../context/LanguageContext";

export function PortfolioHeader7() {
  const { language } = useLanguage();
  const t =
    language === "pt"
      ? {
          heading:
            "Redesenhando o produto central de uma plataforma de saúde que reduziu a triagem humana em 96%.",
          body: "De uma ferramenta de chat manual para uma plataforma com IA, atendendo 3,5 milhões de pacientes, 24 horas por dia.",
          tags: ["Saúde", "UI Conversacional", "Agentes de IA"],
          companyLabel: "Empresa",
          durationLabel: "Duração",
          teamLabel: "Time",
          toolsLabel: "Ferramentas",
          duration: "6 meses (4 design + build · 2 monitoramento de piloto) - 2025",
          team: "Vendas · Produto · Engenheiro Full Stack · Product Designer",
        }
      : {
          heading:
            "Redesigning the core of a healthcare platform that cut human triage by 96%.",
          body: "From a manual chat tool to an AI-powered platform, serving 3.5 million patients, 24/7.",
          tags: ["Healthcare", "Conversational UI", "AI Agents"],
          companyLabel: "Company",
          durationLabel: "Duration",
          teamLabel: "Team",
          toolsLabel: "Tools",
          duration: "6 months (4 design + build · 2 pilot monitoring) - 2025",
          team: "Sales · Product · Full Stack Engineer · Product Designer",
        };

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start gap-12 md:mb-18 md:grid-cols-[1.5fr_1fr] lg:mb-20 lg:gap-x-20">
          <div>
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
              {t.heading}
            </h1>
            <p className="md:text-md">{t.body}</p>
            <div className="mt-5 flex flex-wrap gap-2 md:mt-6">
              {t.tags.map((tag) => (
                <li className="flex list-none" key={tag}>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener"
                    className="bg-background-secondary px-2 py-1 text-sm font-semibold"
                  >
                    {tag}
                  </a>
                </li>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">
                {t.companyLabel}
              </h3>
              <p>Nilo</p>
            </div>
            <div>
              <h3 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">
                {t.durationLabel}
              </h3>
              <p>{t.duration}</p>
            </div>
            <div>
              <h3 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">
                {t.teamLabel}
              </h3>
              <p>{t.team}</p>
            </div>
            <div>
              <h3 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">
                {t.toolsLabel}
              </h3>
              <p>Figma · Figma Make · Claude · ChatGPT</p>
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/images/ChatAI_Hero.png"
            alt="Nilo Chat case study hero"
            width={1600}
            height={900}
            className="w-full h-auto rounded-2xl"
            quality={90}
            priority
          />
        </div>
      </div>
    </section>
  );
}
