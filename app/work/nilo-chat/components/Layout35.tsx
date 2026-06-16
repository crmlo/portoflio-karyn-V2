"use client";

import React from "react";
import { useLanguage } from "../../../context/LanguageContext";

export function Layout35() {
  const { language } = useLanguage();
  const t =
    language === "pt"
      ? {
          eyebrow: "Processo",
          heading:
            "O negócio queria. O cliente estava alinhado. Mas as pessoas que realmente operam o dia a dia podiam encerrar tudo.",
          body1:
            "O Grupo Fleury era o parceiro de piloto ideal: liderança já alinhada, ganho estratégico claro para produto e cliente. Com isso garantido, partimos para o discovery para entender o dia a dia das coordenadoras de cuidado, mapear os cenários do agente e definir como ele deveria operar.",
          body2:
            "Mas o que encontramos em campo mudou tudo. As coordenadoras sabiam que a IA poderia transformar a operação, mas precisavam ter confiança de que o agente seria confiável e que elas permaneceriam no controle. E como são responsáveis perante as operadoras de saúde, o apoio delas não era opcional. Sem ele, nada vai ao ar. Se conseguíssemos conquistar a confiança delas no Fleury, funcionaria em qualquer lugar.",
        }
      : {
          eyebrow: "Process",
          heading:
            "The business wanted it. The client was aligned. But the people who actually run the operation could shut it all down.",
          body1:
            "Grupo Fleury was the ideal pilot partner — leadership already aligned, clear strategic win for both product and client. With that secured, we moved into discovery to understand care coordinators' day-to-day workflows, map the agent's scenarios, and define how it should operate.",
          body2:
            "But what we found in the field changed everything. Coordinators knew AI could transform the operation but they needed confidence that the agent would be reliable and that they'd stay in control. And since they're accountable to healthcare operators, their buy-in wasn't optional. Without it, nothing goes live. If we could earn their trust at Fleury, it would work everywhere.",
        };

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="w-full max-w-md">
          <p className="mb-3 font-semibold md:mb-4">{t.eyebrow}</p>
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            {t.heading}
          </h2>
          <p className="md:text-md">{t.body1}</p>
          <p className="mt-4 md:text-md">{t.body2}</p>
        </div>
      </div>
    </section>
  );
}
