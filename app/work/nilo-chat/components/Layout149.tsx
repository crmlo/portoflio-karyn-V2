"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "../../../context/LanguageContext";

export function Layout149() {
  const { language } = useLanguage();
  const t =
    language === "pt"
      ? {
          eyebrow: "Profissional",
          body: "Gerenciamento de conversas com visibilidade total do agente. Timeline, identificação da Clara, resumo do tópico gerado por IA e controle de assumir com um clique a qualquer momento.",
        }
      : {
          eyebrow: "Professional",
          body: "Conversation management with full agent visibility. Timeline, Clara identification, AI-generated topic summary, and one-click takeover control at any moment.",
        };

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="mb-12 md:mb-18 lg:mb-20">
            <div className="mx-auto flex max-w-lg flex-col items-center text-center">
              <p className="mb-3 font-semibold md:mb-4">{t.eyebrow}</p>
              <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                Chat
              </h2>
              <p className="mb-5 md:mb-6 md:text-md">{t.body}</p>
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/images/Chat%20completo.png"
            alt="Professional chat interface"
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
