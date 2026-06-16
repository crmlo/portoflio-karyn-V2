"use client";

import React from "react";
import { BarChart2, MessageSquare, Monitor, Users } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext";

export function Layout298() {
  const { language } = useLanguage();
  const t =
    language === "pt"
      ? {
          eyebrow: "Aprendizado contínuo",
          heading: "Construímos ciclos de feedback para nunca mais ficar sem dados",
          body: "Um dos aprendizados dos primeiros meses, quando o time operava sem dados reais, foi o custo de não ter visibilidade contínua sobre o comportamento dos usuários. Após a pesquisa, colocamos quatro canais em funcionamento:",
          card1Title: "Amplitude",
          card1Body:
            "Acompanhava o funil completo, do acesso ao menu até a conclusão do pedido. Taxas de conversão, pontos de abandono e volume de pedidos.",
          card2Title: "Widget de feedback do Hotjar",
          card2Body:
            "Disponível em cada etapa do fluxo de compra para capturar sinais de fricção em tempo real.",
          card3Title: "Gravações de sessão",
          card3Body:
            "Filtradas por rage clicks e abandono de fluxo para identificar problemas de usabilidade que não apareciam nas pesquisas.",
          card4Title: "Check-ins com usuários engajados",
          card4Body:
            "Conversas regulares com os restaurantes parceiros mais ativos à medida que novas funcionalidades eram lançadas.",
        }
      : {
          eyebrow: "Continuous learning",
          heading: "We built feedback loops so we'd never be guessing again",
          body: "One of the things I took away from the early months was the cost of not having ongoing insight into user behavior. After the research, we put four channels in place:",
          card1Title: "Amplitude",
          card1Body:
            "Conversion rates, drop-off points, and order volume across the full funnel.",
          card2Title: "Hotjar feedback widget",
          card2Body:
            "Available at every step of the purchase flow for real-time friction signals.",
          card3Title: "Session recordings",
          card3Body:
            "Filtered for rage clicks and flow abandonment to catch usability issues that didn't show up in surveys.",
          card4Title: "Heavy user check-ins",
          card4Body:
            "Regular conversations with the most engaged partner restaurants as new features shipped.",
        };

  return (
    <section className="bg-[#F3F5FF] px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-start">
          <div className="mx-auto mb-12 max-w-lg md:mb-18 lg:mb-20">
            <div>
              <p className="mb-3 text-center font-semibold md:mb-4">
                {t.eyebrow}
              </p>
              <h2 className="mb-5 text-center text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                {t.heading}
              </h2>
              <p className="text-center md:text-md">{t.body}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-4">
            <div className="w-full">
              <div className="mb-5 flex justify-center md:mb-6">
                <BarChart2 className="size-12" strokeWidth={1.5} />
              </div>
              <h3 className="mb-3 text-center text-xl font-bold md:mb-4 md:text-2xl">
                {t.card1Title}
              </h3>
              <p className="text-center">{t.card1Body}</p>
            </div>
            <div className="w-full">
              <div className="mb-5 flex justify-center md:mb-6">
                <MessageSquare className="size-12" strokeWidth={1.5} />
              </div>
              <h3 className="mb-3 text-center text-xl font-bold md:mb-4 md:text-2xl">
                {t.card2Title}
              </h3>
              <p className="text-center">{t.card2Body}</p>
            </div>
            <div className="w-full">
              <div className="mb-5 flex justify-center md:mb-6">
                <Monitor className="size-12" strokeWidth={1.5} />
              </div>
              <h3 className="mb-3 text-center text-xl font-bold md:mb-4 md:text-2xl">
                {t.card3Title}
              </h3>
              <p className="text-center">{t.card3Body}</p>
            </div>
            <div className="w-full">
              <div className="mb-5 flex justify-center md:mb-6">
                <Users className="size-12" strokeWidth={1.5} />
              </div>
              <h3 className="mb-3 text-center text-xl font-bold md:mb-4 md:text-2xl">
                {t.card4Title}
              </h3>
              <p className="text-center">{t.card4Body}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
