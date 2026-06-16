"use client";

import React from "react";
import { Building2, Stethoscope, User } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext";

export function Layout241() {
  const { language } = useLanguage();
  const t =
    language === "pt"
      ? {
          eyebrow: "Problema",
          heading:
            "Três usuários. Um sistema. Necessidades muito diferentes, e medos muito diferentes.",
          body: "O Chat já existia. Foi construído para interações manuais, uma a uma. Introduzir agentes de IA significava repensar uma experiência com a qual os profissionais já contavam todos os dias. Essas três tensões estavam presentes em cada decisão tomada ao longo do projeto.",
          card1Title: "O negócio quer escalar o cuidado sem aumentar o time.",
          card1Body:
            "Medo: risco operacional e responsabilidade legal. Tensão: mais autonomia para o agente significa menos controle sobre os resultados.",
          card2Title:
            "O profissional de saúde precisa focar nos casos que exigem atenção clínica real.",
          card2Body:
            "Medo: perder o controle e ser responsabilizado pelos erros do agente. Tensão: confiar no agente libera tempo, mas e se ele errar?",
          card3Title:
            "O paciente precisa de atendimento rápido, empático e disponível a qualquer hora.",
          card3Body:
            "Medo: ficar preso com um bot que não consegue ajudar e nunca chegar a uma pessoa real. Tensão: disponibilidade 24/7 parece ótimo, mas e se o agente não resolver o problema e não houver saída?",
        }
      : {
          eyebrow: "Problem",
          heading:
            "Three users. One system. Very different needs, and very different fears.",
          body: "The Chat already existed. It was built for manual, one-on-one interactions. Introducing AI agents meant rethinking an experience that professionals already relied on every day. These three tensions were present in every single decision made throughout the project.",
          card1Title: "Business want to scale care without growing the team",
          card1Body:
            "Fear: operational risk and liability. Tension: more autonomy for the agent means less control over outcomes.",
          card2Title:
            "Healthcare Professional have to focus on cases that need real clinical attention",
          card2Body:
            "Fear: losing control and being responsible for the agent's mistakes. Tension: trusting the agent frees up time — but what if it makes a mistake?",
          card3Title: "Patient need fast, empathetic care, available anytime.",
          card3Body:
            "Fear: being stuck with a bot that can't actually help and never reaching a real person. Tension: 24/7 availability sounds great — but what if the agent can't solve the problem and there's no way out?",
        };

  return (
    <section id="relume" className="bg-malibu-lightest px-[5%] py-16 md:py-24 lg:py-28">
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
                <Building2 className="size-12 text-ebony-clay" strokeWidth={1.5} />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                {t.card1Title}
              </h3>
              <p>{t.card1Body}</p>
            </div>
            <div className="flex w-full flex-col">
              <div className="mb-5 md:mb-6">
                <Stethoscope className="size-12 text-ebony-clay" strokeWidth={1.5} />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                {t.card2Title}
              </h3>
              <p>{t.card2Body}</p>
            </div>
            <div className="flex w-full flex-col">
              <div className="mb-5 md:mb-6">
                <User className="size-12 text-ebony-clay" strokeWidth={1.5} />
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
