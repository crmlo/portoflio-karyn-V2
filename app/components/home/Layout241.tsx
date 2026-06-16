"use client";

import React from "react";
import { Compass, Layers, Pen } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export function Layout241() {
  const { language } = useLanguage();
  const t =
    language === "pt"
      ? {
          eyebrow: "Como trabalho",
          heading: "Não comece pelas telas. Comece pelo problema.",
          body: "Um bom design resolve o problema certo, no nível certo. Isso significa entender o usuário, o contexto de negócio e as restrições antes de qualquer coisa ser desenhada. A estrutura vem primeiro. As telas vêm depois.",
          card1Title: "Estratégia e Pesquisa",
          card1Body:
            "Cada projeto recebe a pesquisa que realmente precisa. Às vezes é um sprint completo de discovery com entrevistas e síntese. Às vezes é uma auditoria focada. O objetivo é sempre o mesmo: entender o problema real antes de propor qualquer coisa.",
          card2Title: "Sistemas e Escala",
          card2Body:
            "Um bom design antecipa o que vem a seguir. Cada componente, fluxo e decisão é feito pensando na complexidade futura, para que o produto possa crescer sem precisar ser reconstruído do zero.",
          card3Title: "Execução e Entrega",
          card3Body:
            "As melhores interfaces são as que os usuários não percebem. Colaboração próxima com engenharia, fluxos assistidos por IA e atenção aos detalhes que fazem a experiência parecer natural em vez de projetada.",
        }
      : {
          eyebrow: "How I work",
          heading: "Don't start with screens. Start with the problem.",
          body: "Good design solves the right problem at the right level. That means understanding the user, the business context, and the constraints before anything gets drawn. Structure comes first. Screens come after.",
          card1Title: "Strategy & Research",
          card1Body:
            "Every project gets the research it actually needs. Sometimes that's a full discovery sprint with interviews and synthesis. Sometimes it's a focused audit. The goal is always the same: understand the real problem before proposing anything.",
          card2Title: "Systems & Scale",
          card2Body:
            "Good design anticipates what comes next. Every component, flow, and decision is made with future complexity in mind, so the product can grow without having to be rebuilt from scratch.",
          card3Title: "Craft & Delivery",
          card3Body:
            "The best interfaces are the ones users don't notice. Close collaboration with engineering, AI-assisted workflows, and attention to detail that makes the experience feel effortless rather than designed.",
        };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28" style={{ backgroundColor: "#F3F5FF" }}>
      <div className="container">
        <div className="flex flex-col">
          <div className="rb-12 mb-12 md:mb-18 lg:mb-20">
            <div className="w-full max-w-lg">
              <p className="mb-3 font-semibold md:mb-4">{t.eyebrow}</p>
              <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                {t.heading}
              </h2>
              <p className="md:text-md">{t.body}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div className="flex w-full flex-col">
              <div className="mb-5 md:mb-6">
                <Compass className="size-12" strokeWidth={1.5} />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                {t.card1Title}
              </h3>
              <p>{t.card1Body}</p>
            </div>
            <div className="flex w-full flex-col">
              <div className="mb-5 md:mb-6">
                <Layers className="size-12" strokeWidth={1.5} />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                {t.card2Title}
              </h3>
              <p>{t.card2Body}</p>
            </div>
            <div className="flex w-full flex-col">
              <div className="mb-5 md:mb-6">
                <Pen className="size-12" strokeWidth={1.5} />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                {t.card3Title}
              </h3>
              <p>{t.card3Body}</p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8" />
        </div>
      </div>
    </section>
  );
}
