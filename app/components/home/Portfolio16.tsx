"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import { useLanguage } from "../../context/LanguageContext";

export function Portfolio16() {
  const { language } = useLanguage();
  const t =
    language === "pt"
      ? {
          eyebrow: "Trabalhos selecionados",
          heading: "Trabalhos que foram ao ar e fizeram diferença.",
          body: "Projetos end-to-end onde estratégia, execução e impacto mensurável se encontraram.",
          view: "Ver",
          card1Desc:
            "Redesenhando o produto central de uma plataforma de saúde para a era dos agentes de IA, reduzindo a triagem humana em 96%.",
          card1Tags: ["Saúde", "UI Conversacional", "Agentes de IA"],
          card2Desc:
            "Levando um produto novo do zero a 2 milhões de pedidos em quatro meses, com pesquisa, testes de conversão e iteração constante.",
          card2Tags: ["Food delivery", "Crescimento", "Pesquisa UX"],
          card3Desc:
            "Uma plataforma de inteligência de dados construída em torno das decisões reais que gestores de saúde precisam tomar todos os dias.",
          card3Tags: ["Saúde", "Visualização de dados", "Dashboard"],
        }
      : {
          eyebrow: "Selected Work",
          heading: "Work that shipped and made a difference.",
          body: "End-to-end projects where strategy, execution, and measurable impact came together.",
          view: "View",
          card1Desc:
            "Redesigning a healthcare platform's core product for the age of AI agents, and cutting human triage by 96%.",
          card1Tags: ["Healthcare", "Conversational UI", "AI agents"],
          card2Desc:
            "Taking a new product from zero to 400k orders a month in four months, through research, conversion testing, and relentless iteration.",
          card2Tags: ["Food delivery", "Growth", "UX Research"],
          card3Desc:
            "A data intelligence platform built around the real decisions healthcare managers need to make every day.",
          card3Tags: ["Healthcare", "Data visualization", "Dashboard"],
        };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 max-w-lg md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">{t.eyebrow}</p>
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            {t.heading}
          </h2>
          <p className="md:text-md">{t.body}</p>
        </div>
        <div>
          <article className="grid grid-cols-1 items-center gap-x-12 gap-y-6 border-t border-border-primary py-8 md:grid-cols-2 md:gap-y-0 lg:gap-x-[5rem] lg:py-12">
            <div>
              <a href="/work/nilo-chat" className="flex aspect-[4/3] w-full overflow-hidden rounded-2xl">
                <img
                  src="/images/ChatAI thumblr.png"
                  alt="Nilo Chat AI redesign"
                  className="w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </a>
            </div>
            <div>
              <h3 className="mb-2 text-2xl font-bold md:text-3xl md:leading-[1.3] lg:text-4xl">
                <a href="/work/nilo-chat">Nilo | Chat AI redesign</a>
              </h3>
              <p>{t.card1Desc}</p>
              <ul className="mt-3 flex flex-wrap gap-2 md:mt-4">
                {t.card1Tags.map((tag) => (
                  <li className="flex" key={tag}>
                    <span className="bg-background-secondary px-2 py-1 text-sm font-semibold">{tag}</span>
                  </li>
                ))}
              </ul>
              <Button title={t.view} variant="link" size="link" iconRight={<RxChevronRight />} className="mt-6 md:mt-8" asChild>
                <a href="/work/nilo-chat">{t.view}</a>
              </Button>
            </div>
          </article>
          <article className="grid grid-cols-1 items-center gap-x-12 gap-y-6 border-t border-border-primary py-8 md:grid-cols-2 md:gap-y-0 lg:gap-x-[5rem] lg:py-12">
            <div>
              <a href="/work/cardapio-digital" className="flex aspect-[4/3] w-full overflow-hidden rounded-2xl">
                <img
                  src="/images/cardapio-digital.jpg"
                  alt="iFood Cardápio Digital"
                  className="w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </a>
            </div>
            <div>
              <h3 className="mb-2 text-2xl font-bold md:text-3xl md:leading-[1.3] lg:text-4xl">
                <a href="/work/cardapio-digital">iFood | Cardápio Digital</a>
              </h3>
              <p>{t.card2Desc}</p>
              <ul className="mt-3 flex flex-wrap gap-2 md:mt-4">
                {t.card2Tags.map((tag) => (
                  <li className="flex" key={tag}>
                    <span className="bg-background-secondary px-2 py-1 text-sm font-semibold">{tag}</span>
                  </li>
                ))}
              </ul>
              <Button title={t.view} variant="link" size="link" iconRight={<RxChevronRight />} className="mt-6 md:mt-8" asChild>
                <a href="/work/cardapio-digital">{t.view}</a>
              </Button>
            </div>
          </article>
          <article className="grid grid-cols-1 items-center gap-x-12 gap-y-6 border-t border-border-primary py-8 md:grid-cols-2 md:gap-y-0 lg:gap-x-[5rem] lg:py-12">
            <div>
              <a href="/work/nilo-compass" className="flex aspect-[4/3] w-full overflow-hidden rounded-2xl">
                <img
                  src="/images/nilo-compass.jpg"
                  alt="Nilo Compass"
                  className="w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </a>
            </div>
            <div>
              <h3 className="mb-2 text-2xl font-bold md:text-3xl md:leading-[1.3] lg:text-4xl">
                <a href="/work/nilo-compass">Nilo | Compass</a>
              </h3>
              <p>{t.card3Desc}</p>
              <ul className="mt-3 flex flex-wrap gap-2 md:mt-4">
                {t.card3Tags.map((tag) => (
                  <li className="flex" key={tag}>
                    <span className="bg-background-secondary px-2 py-1 text-sm font-semibold">{tag}</span>
                  </li>
                ))}
              </ul>
              <Button title={t.view} variant="link" size="link" iconRight={<RxChevronRight />} className="mt-6 md:mt-8" asChild>
                <a href="/work/nilo-compass">{t.view}</a>
              </Button>
            </div>
          </article>
        </div>
        <div className="mt-12 flex justify-center md:mt-18 lg:mt-20" />
      </div>
    </section>
  );
}
