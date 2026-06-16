"use client";

import React from "react";
import { useLanguage } from "../../../context/LanguageContext";

export function Layout41() {
  const { language } = useLanguage();
  const t =
    language === "pt"
      ? {
          eyebrow: "Reflexão",
          heading:
            "Os dados sempre estiveram disponíveis. A gente só não tinha ido buscá-los do jeito certo.",
          body1:
            "O mês que passamos fazendo ligações e enviando mensagens antes da pesquisa não foi desperdiçado: nos mostrou que o contato informal tinha um limite. A pesquisa estruturada gera algo com o que você pode agir em escala.",
          body2:
            "Os achados não só responderam nossas perguntas. Deram a todo o time uma linguagem compartilhada para priorizar e entender o porquê. O outro aprendizado que carrego deste projeto: educação é uma decisão de produto. O guia que criei não era um ativo de marketing. Era uma resposta a um gap real de compreensão que o produto não havia endereçado. Quando funcionou, mudou a forma como o time pensava sobre onboarding.",
        }
      : {
          eyebrow: "What I learned",
          heading:
            "The data was always available. We just hadn't gone looking for it properly.",
          body1:
            "The month we spent making calls and sending messages before the research wasn't wasted, it showed us that informal outreach had a ceiling. You can learn a lot from talking to people, but structured research gives you something you can act on at scale.",
          body2:
            "The findings didn't just answer our questions. They gave the whole team a shared language for what to prioritize and why. The other thing I carry from this project: education is a product decision. The guide I built wasn't a marketing asset. It was a response to a real comprehension gap that the product itself hadn't addressed. When it worked, it changed how the team thought about onboarding.",
        };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">{t.eyebrow}</p>
            <h2 className="text-5xl font-bold md:text-7xl lg:text-8xl">
              {t.heading}
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            <p className="md:text-md">{t.body1}</p>
            <p className="md:text-md">{t.body2}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
