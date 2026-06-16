"use client";

import React from "react";
import { LayoutGrid, Eye, TrendingUp } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext";

export function Layout237() {
  const { language } = useLanguage();
  const t =
    language === "pt"
      ? {
          heading: "Três coisas estavam quebradas",
          body: "O problema mais profundo era que os gestores não sabiam o que pedir. E uma ferramenta que simplesmente desse a eles mais dados para solicitar não resolveria isso.",
          card1Title: "Sem estrutura",
          card1Body:
            "Os dados eram entregues em resposta a solicitações, não organizados em torno de temas ou decisões significativas.",
          card2Title: "Sem interpretação",
          card2Body:
            "Os gestores recebiam números brutos sem contexto sobre o que era bom, o que era crítico ou o que exigia ação.",
          card3Title: "Sem prova de impacto",
          card3Body:
            "Sem dados claros e acessíveis, os gestores não conseguiam demonstrar o valor de suas operações para diretores ou clientes, e a Nilo não conseguia demonstrar seu próprio valor para os gestores.",
        }
      : {
          heading: "Three things were broken",
          body: "The deeper problem was that managers didn't know what to ask for. And a tool that simply gave them more data to request wouldn't solve that.",
          card1Title: "No structure",
          card1Body:
            "Data was delivered in response to requests, not organized around meaningful themes or decisions.",
          card2Title: "No interpretation",
          card2Body:
            "Managers received raw numbers with no context about what was good, what was critical, or what required action.",
          card3Title: "No proof of impact",
          card3Body:
            "Without clear, accessible data, managers couldn't demonstrate the value of their own operations to directors or clients, and Nilo couldn't demonstrate its own value to managers.",
        };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28" style={{ backgroundColor: "#F3F5FF" }}>
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              {t.heading}
            </h2>
            <p className="md:text-md">{t.body}</p>
          </div>
          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div className="flex w-full flex-col items-center text-center">
              <div className="mb-5 md:mb-6">
                <LayoutGrid className="size-12" strokeWidth={1.5} />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                {t.card1Title}
              </h3>
              <p>{t.card1Body}</p>
            </div>
            <div className="flex w-full flex-col items-center text-center">
              <div className="mb-5 md:mb-6">
                <Eye className="size-12" strokeWidth={1.5} />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                {t.card2Title}
              </h3>
              <p>{t.card2Body}</p>
            </div>
            <div className="flex w-full flex-col items-center text-center">
              <div className="mb-5 md:mb-6">
                <TrendingUp className="size-12" strokeWidth={1.5} />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                {t.card3Title}
              </h3>
              <p>{t.card3Body}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
