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
            "Como uma pesquisa aprofundada transformou um lançamento estagnado em 2 milhões de pedidos.",
          body: "O Cardápio Digital foi o produto white-label do iFood para restaurantes: uma ferramenta que permitia ter seu próprio canal de delivery e receber pedidos diretamente, sem a comissão do iFood. A oportunidade de mercado era clara: cerca de 29 milhões de pedidos por ano aconteciam fora da plataforma, pelo WhatsApp, Instagram e telefone. O produto fazia sentido estratégico. Mas após o lançamento, não decolava.",
          tag1: "Product Design",
          tag2: "Pesquisa UX",
          tag3: "Designer End-to-end",
          companyLabel: "Empresa",
          company: "iFood",
          durationLabel: "Período",
          duration: "Abr 2021–Mar 2022",
          roleLabel: "Papel",
          role: "Designer End-to-end",
          toolsLabel: "Ferramentas",
          tools: "Figma, Amplitude, Hotjar.",
        }
      : {
          heading:
            "How deep research turned a stalling launch into 2 million orders.",
          body: "A white-label digital menu built within the iFood ecosystem, designed to let restaurants capture their off-platform orders. The product grew from 172k to 2 million orders monthly after research revealed what restaurants actually needed.",
          tag1: "Product design",
          tag2: "UX research",
          tag3: "End-to-end Design",
          companyLabel: "Company",
          company: "iFood",
          durationLabel: "Duration",
          duration: "10 months",
          roleLabel: "Role",
          role: "Product Designer, UX Research",
          toolsLabel: "Tools",
          tools: "Figma, Amplitude, Hotjar, Survey Monkey.",
        };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start gap-12 md:mb-18 md:grid-cols-[1.5fr_1fr] lg:mb-20 lg:gap-x-20">
          <div>
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
              {t.heading}
            </h1>
            <p className="md:text-md">{t.body}</p>
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
            src="/images/cardapio-digital.jpg"
            alt="iFood Cardápio Digital case study hero"
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
