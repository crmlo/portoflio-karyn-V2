"use client";

import React from "react";
import { useLanguage } from "../../context/LanguageContext";

export function Layout262() {
  const { language } = useLanguage();
  const t =
    language === "pt"
      ? {
          card1Title: "O que me move",
          card1Body:
            "Tornar coisas complexas simples e garantir que a experiência se sustente em condições reais, não apenas em um protótipo.",
          card2Title: "Sou conhecida por",
          card2Body:
            "Transformar problemas complexos em decisões claras e garantir que todos, da engenharia à liderança, estejam alinhados sobre o porquê. Documento com cuidado, facilito as conversas difíceis e fico próxima ao time do discovery à entrega. Defendo os usuários, mas nunca perco de vista o negócio.",
          card3Title: "Minhas habilidades",
          card3Body:
            "Product design em produtos digitais complexos. Design visual com hierarquia forte em escala. Design engineering com fluxos assistidos por IA e protótipos funcionais.",
        }
      : {
          card1Title: "What drives me",
          card1Body:
            "Making complex things feel simple and ensuring the experience holds up under real-world conditions, not just in a prototype.",
          card2Title: "I'm known for",
          card2Body:
            "Turning complex problems into clear decisions and making sure everyone from engineering to leadership is aligned on why. I document thoroughly, facilitate the hard conversations, and stay close to the team from discovery to delivery. I advocate for users, but I never lose sight of the business.",
          card3Title: "My skills",
          card3Body:
            "Product design across complex digital products. Visual design with strong hierarchy at scale. Design engineering through AI-assisted workflows and functional prototypes.",
        };

  return (
    <section className="bg-black px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          <div>
            <h3 className="mb-3 text-xl font-bold text-white md:mb-4 md:text-2xl">
              {t.card1Title}
            </h3>
            <p className="text-white/80">{t.card1Body}</p>
          </div>
          <div>
            <h3 className="mb-3 text-xl font-bold text-white md:mb-4 md:text-2xl">
              {t.card2Title}
            </h3>
            <p className="text-white/80">{t.card2Body}</p>
          </div>
          <div>
            <h3 className="mb-3 text-xl font-bold text-white md:mb-4 md:text-2xl">
              {t.card3Title}
            </h3>
            <p className="text-white/80">{t.card3Body}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
