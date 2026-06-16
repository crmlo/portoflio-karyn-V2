"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext";

export function Layout65() {
  const { language } = useLanguage();
  const t =
    language === "pt"
      ? {
          eyebrow: "Insights",
          heading:
            "Entrei para mapear cenários. Saí com um problema completamente diferente para resolver.",
          body: "O que encontrei não tinha nada a ver com funcionalidades ou fluxos. A preocupação real era confiança e controle, e isso reconfigurou o projeto inteiro. Já sabíamos o potencial técnico e a segurança do sistema. O que faltava era traduzir isso em uma interface que criasse uma rede de segurança para as pessoas tomando as decisões. A aba de auditoria, a visão de performance do agente, o sistema de feedback, o briefing de handoff: cada um desses endereçava diretamente uma necessidade específica de confiança, e juntos se tornaram o desbloqueio de valor que não havíamos antecipado.",
          quote1:
            '"Se o agente disser algo errado para um paciente, quem responde por isso?" - Coordenadora de cuidado, Grupo Fleury',
          quote2:
            '"Como eu sei o que o agente está fazendo enquanto estou atendendo outros pacientes?" - Enfermeira, Grupo Fleury',
          quote3:
            '"Como posso acompanhar o agente e assumir se necessário?" - Enfermeira, Grupo Fleury',
        }
      : {
          eyebrow: "Insights",
          heading:
            "I went in to map scenarios. I came out with a completely different problem to solve.",
          body: "What I found had nothing to do with features or workflows. The real concern was trust and control, and that reframed the entire project. We already knew the technical potential and the safety of the system. What was missing was translating that into an interface that created a safety net for the people making the decisions. The audit tab, the agent performance view, the feedback system, the handoff briefing — each of these directly addressed a specific trust need, and together they became the unlock for value we hadn't even anticipated.",
          quote1:
            '"If the agent says something wrong to a patient, who answers for that?" - Care coordinator, Grupo Fleury',
          quote2:
            '"How do I know what the agent is doing while I\'m handling other patients?" - Nurse, Grupo Fleury',
          quote3:
            '"How can I keep track of the agent and take over if necessary?" - Nurse, Grupo Fleury',
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
            <p className="mb-5 md:mb-6 md:text-md">{t.body}</p>
            <ul className="grid grid-cols-1 gap-4 py-2">
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <MessageCircle className="size-6 text-ebony-clay" strokeWidth={1.5} />
                </div>
                <p>{t.quote1}</p>
              </li>
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <MessageCircle className="size-6 text-ebony-clay" strokeWidth={1.5} />
                </div>
                <p>{t.quote2}</p>
              </li>
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <MessageCircle className="size-6 text-ebony-clay" strokeWidth={1.5} />
                </div>
                <p>{t.quote3}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
