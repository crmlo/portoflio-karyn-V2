"use client";

import React from "react";
import { useLanguage } from "../../../context/LanguageContext";

export function Layout65() {
  const { language } = useLanguage();
  const t =
    language === "pt"
      ? {
          eyebrow: "Contexto",
          heading: "A Nilo tinha os dados. Ninguém sabia como usá-los.",
          body1:
            "Os produtos principais da Nilo cobriam navegação e engajamento de pacientes muito bem. Mas a camada de dados para gestão não existia de forma estruturada. Gestores de saúde que queriam visibilidade sobre suas operações precisavam pedir ao time de Customer Success para gerar relatórios no Metabase. Manualmente. Toda vez.",
          body2:
            "Com o tempo, o time de CS começou a perceber padrões: algumas solicitações apareciam o tempo todo, outras faziam pouco sentido mas ninguém questionava. E os próprios gestores muitas vezes não conseguiam articular o que realmente precisavam. Pediam dados porque sabiam que existiam dados, não porque tinham uma pergunta clara para responder. O resultado era um sistema onde todos estavam ocupados mas ninguém estava mais bem informado.",
        }
      : {
          eyebrow: "Context",
          heading: "Nilo had the data. No one knew how to use it.",
          body1:
            "Nilo's core products covered patient navigation and engagement well. But the data layer for management didn't exist in any structured way. Healthcare managers who wanted visibility into their operations had to ask the Customer Success team to pull reports from Metabase. Manually. Every time.",
          body2:
            "Over time, the CS team noticed patterns: some requests came up constantly, others made little sense but no one questioned them. And the managers themselves often couldn't articulate what they actually needed. They asked for data because they knew data existed, not because they had a clear question to answer. The result was a system where everyone was busy but no one was better informed.",
        };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-5 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">{t.eyebrow}</p>
            <h2 className="text-5xl font-bold md:text-7xl lg:text-8xl">
              {t.heading}
            </h2>
          </div>
          <div>
            <p className="mb-4 md:text-md">{t.body1}</p>
            <p className="md:text-md">{t.body2}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
