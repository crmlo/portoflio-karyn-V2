"use client";

import React from "react";
import { BookOpen, ShieldCheck } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext";

export function Layout53() {
  const { language } = useLanguage();
  const t =
    language === "pt"
      ? {
          eyebrow: "O que descobrimos",
          heading: "O problema central não era o produto. Era compreensão e confiança.",
          body: "A maior parte dos restaurantes na plataforma eram pequenos negócios informais, não times de marketing com estratégias de crescimento. Para eles, uma nova ferramenta digital significava risco, confusão e mais uma coisa para resolver. Entre os parceiros desengajados, dois padrões apareciam repetidamente:",
          card1Title: "Gap de compreensão",
          card1Body:
            "Os restaurantes não entendiam o que era o produto, como configurá-lo ou como divulgá-lo para seus próprios clientes. O branding do iFood na URL fazia seus clientes pensarem que estavam pedindo pelo iFood, o oposto do que queriam.",
          card2Title: "Gap de confiança",
          card2Body:
            "Eles temiam que o iFood fosse cobrar em algum momento. Mesmo quando viam valor no produto, essa dúvida era suficiente para bloquear a adoção.",
        }
      : {
          eyebrow: "What we found",
          heading: "The core problem wasn't the product. It was comprehension and trust.",
          body: "Most restaurants on the platform were small, informal businesses, not marketing teams with growth strategies. For them, a new digital tool meant risk, confusion, and one more thing to figure out. Among disengaged partners, two patterns kept coming up:",
          card1Title: "Comprehension gap",
          card1Body:
            "Restaurants didn't understand what the product was, how to set it up, or how to promote it. The iFood branding in the URL made their customers think they were ordering through iFood, the opposite of what they wanted.",
          card2Title: "Trust gap",
          card2Body:
            "They feared iFood would charge them eventually. Even when they saw value in the product, that doubt was enough to block adoption.",
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
          <div>
            <p className="mb-6 md:mb-8 md:text-md">{t.body}</p>
            <div className="grid grid-cols-1 gap-6 py-2">
              <div className="flex">
                <div className="mr-4 flex-none self-start">
                  <BookOpen className="size-8" strokeWidth={1.5} />
                </div>
                <div>
                  <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">{t.card1Title}</h6>
                  <p>{t.card1Body}</p>
                </div>
              </div>
              <div className="flex">
                <div className="mr-4 flex-none self-start">
                  <ShieldCheck className="size-8" strokeWidth={1.5} />
                </div>
                <div>
                  <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">{t.card2Title}</h6>
                  <p>{t.card2Body}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
