"use client";

import React from "react";
import { Eye, ClipboardList, AlertTriangle, Shield } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext";

export function Layout302() {
  const { language } = useLanguage();
  const t =
    language === "pt"
      ? {
          eyebrow: "Decisões-chave",
          heading: "As decisões que mais importaram.",
          body: "Quatro decisões moldaram o produto inteiro:",
          card1Title: "Visibilidade do agente",
          card1Body:
            "Transparência total para todos. O paciente sempre sabe que está falando com a Clara, uma assistente de IA. Dar nome ao agente e criar uma persona aumentou a confiança em vez de reduzi-la.",
          card2Title: "Aba de auditoria",
          card2Body:
            "Disponível e acessível, não obrigatória, mas desenhada para ser difícil de ignorar. Sem ela, as coordenadoras não aprovariam a IA. Confiança se constrói com visibilidade.",
          card3Title: "Onde a falha acontece",
          card3Body:
            "Quando algo falha, o paciente recebe uma mensagem tranquila de que o cuidado continuará com um profissional em breve. Honesto sem ser alarmante: o paciente sabe o que está acontecendo, apenas não sabe o porquê.",
          card4Title: "Definindo os guardrails",
          card4Body:
            "O produto define o mínimo inegociável. Os clientes configuram dentro desses limites, mas não podem ficar abaixo deles. A vida humana vem antes da eficiência operacional, e isso precisava estar codificado no produto.",
        }
      : {
          eyebrow: "Key Decisions",
          heading: "The decisions that mattered most",
          body: "Four decisions shaped the entire product:",
          card1Title: "Agent visibility",
          card1Body:
            "Full transparency for everyone. The patient always knows they're talking to Clara, an AI assistant. Naming the agent and giving her a persona actually increased trust instead of reducing it.",
          card2Title: "Audit tab",
          card2Body:
            "Made available and accessible, not mandatory — but designed to be hard to ignore. Without it, coordinators wouldn't approve AI in the first place. Trust is built through visibility.",
          card3Title: "Where failure happens",
          card3Body:
            "When something fails, the patient receives a calm message that care will continue with a professional shortly. Honest without being alarming — the patient knows what's happening, just not why.",
          card4Title: "Defining guardrails",
          card4Body:
            "Product defines the non-negotiable minimum. Clients configure within those limits, but can't go below them. Human life comes before operational efficiency — and that had to be coded into the product.",
        };

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">{t.eyebrow}</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              {t.heading}
            </h2>
            <p className="md:text-md">{t.body}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-4">
          <div>
            <div className="mb-5 md:mb-6">
              <Eye className="size-12 text-ebony-clay" strokeWidth={1.5} />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              {t.card1Title}
            </h3>
            <p>{t.card1Body}</p>
          </div>
          <div>
            <div className="mb-5 md:mb-6">
              <ClipboardList className="size-12 text-ebony-clay" strokeWidth={1.5} />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              {t.card2Title}
            </h3>
            <p>{t.card2Body}</p>
          </div>
          <div>
            <div className="mb-5 md:mb-6">
              <AlertTriangle className="size-12 text-ebony-clay" strokeWidth={1.5} />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              {t.card3Title}
            </h3>
            <p>{t.card3Body}</p>
          </div>
          <div>
            <div className="mb-5 md:mb-6">
              <Shield className="size-12 text-ebony-clay" strokeWidth={1.5} />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              {t.card4Title}
            </h3>
            <p>{t.card4Body}</p>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap gap-4 md:mt-18 lg:mt-20" />
      </div>
    </section>
  );
}
