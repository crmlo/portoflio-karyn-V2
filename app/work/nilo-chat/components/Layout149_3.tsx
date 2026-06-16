"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "../../../context/LanguageContext";

export function Layout149_3() {
  const { language } = useLanguage();
  const t =
    language === "pt"
      ? {
          eyebrow: "Agente",
          heading: "Briefing de handoff",
          body: "Quando a Clara identifica que uma conversa precisa de um humano, ela não apenas transfere. Ela gera um briefing diretamente na timeline da conversa: o motivo exato do handoff, a mensagem que o acionou. O profissional começa informado, não do zero. Em situações críticas como ideação suicida, ter contexto rápido pode mudar completamente o desfecho.",
        }
      : {
          eyebrow: "Agent",
          heading: "Handoff briefing",
          body: "When Clara identifies that a conversation needs a human, she doesn't just transfer it. She generates a briefing directly in the conversation timeline — the exact reason for the handoff, the message that triggered it. The professional starts informed, not from zero. In critical situations like suicidal ideation, getting context fast can change the outcome entirely.",
        };

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="mb-12 md:mb-18 lg:mb-20">
            <div className="mx-auto flex max-w-lg flex-col items-center text-center">
              <p className="mb-3 font-semibold md:mb-4">{t.eyebrow}</p>
              <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                {t.heading}
              </h2>
              <p className="mb-5 md:mb-6 md:text-md">{t.body}</p>
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/images/Handoff.png"
            alt="Handoff briefing"
            width={1600}
            height={900}
            className="w-full h-auto rounded-2xl"
            quality={90}
          />
        </div>
      </div>
    </section>
  );
}
