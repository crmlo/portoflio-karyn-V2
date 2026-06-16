"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext";

export function Layout65_1() {
  const { language } = useLanguage();
  const t =
    language === "pt"
      ? {
          eyebrow:
            "O que não é mostrado aqui. A documentação completa está disponível na apresentação completa.",
          heading: "Tem mais craft por baixo.",
          item1:
            "Framework de guardrails: definindo o que o agente faz de forma autônoma, o que aciona um fallback e o que ele nunca trata sozinho",
          item2:
            "Restrições de memória do agente: desenhando em torno do fato de que a Clara não tem memória longitudinal, e como isso moldou cada padrão de interação",
          item3:
            "Fluxos de exceção: latência, queda do LLM, handoffs críticos, cada um com sua própria linguagem visual intencional",
          item4:
            "Sistema de feedback: como as coordenadoras avaliam a performance do agente e como isso alimenta a melhoria do modelo",
          item5:
            "Tabela de capacidades: o mapa completo de tópicos, níveis de autonomia, comportamentos do agente e gatilhos",
        }
      : {
          eyebrow:
            "What's not shown here. The complete documentation is available in the full presentation.",
          heading: "There's more craft under the hood.",
          item1:
            "Guardrails framework: defining what the agent does autonomously, what triggers a fallback, and what it never handles alone",
          item2:
            "Agent memory constraints: designing around the fact that Clara has no longitudinal memory, and how that shaped every interaction pattern",
          item3:
            "Exception flows: latency, LLM downtime, critical handoffs, each with its own intentional visual language",
          item4:
            "Feedback loop system: how coordinators rate agent performance and how that feeds back into model improvement",
          item5:
            "Capabilities table: the full map of topics, autonomy levels, agent behaviors, and triggers",
        };

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-5 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">{t.eyebrow}</p>
            <h2 className="text-5xl font-bold md:text-7xl lg:text-8xl">
              {t.heading}
            </h2>
          </div>
          <div>
            <ul className="grid grid-cols-1 gap-4 py-2">
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <CheckCircle2 className="size-6 text-ebony-clay" strokeWidth={1.5} />
                </div>
                <p>{t.item1}</p>
              </li>
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <CheckCircle2 className="size-6 text-ebony-clay" strokeWidth={1.5} />
                </div>
                <p>{t.item2}</p>
              </li>
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <CheckCircle2 className="size-6 text-ebony-clay" strokeWidth={1.5} />
                </div>
                <p>{t.item3}</p>
              </li>
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <CheckCircle2 className="size-6 text-ebony-clay" strokeWidth={1.5} />
                </div>
                <p>{t.item4}</p>
              </li>
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <CheckCircle2 className="size-6 text-ebony-clay" strokeWidth={1.5} />
                </div>
                <p>{t.item5}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
