"use client";

import Image from "next/image";
import React from "react";
import { useLanguage } from "../../../context/LanguageContext";

export function Layout13() {
  const { language } = useLanguage();
  const t =
    language === "pt"
      ? {
          eyebrow: "Oportunidade",
          heading: "Um mercado de 29 milhões de pedidos escondido à vista de todos.",
          body: "Os restaurantes parceiros do iFood já vendiam fora da plataforma: pelo WhatsApp, telefone e redes sociais. O iFood enxergou um mercado endereçável de aproximadamente 29 milhões de pedidos por ano e criou o Cardápio Digital para capturá-lo: uma ferramenta gratuita e white-label que dava aos restaurantes seu próprio menu digital e canal de pedidos, sem comissão nos primeiros 100 pedidos por mês. A proposta de valor era forte no papel. O desafio era fazer os restaurantes verem da mesma forma.",
        }
      : {
          eyebrow: "Opportunity",
          heading: "A 29-million-order market hiding in plain sight",
          body: "iFood's partner restaurants were already selling outside the platform, through WhatsApp, phone calls, and social media. iFood saw an addressable market of approximately 29 million orders per year and built Cardápio Digital to capture it: a free, white-label tool that gave restaurants their own digital menu and ordering channel, with no commission on the first 100 orders per month. The value proposition was strong on paper. The challenge was making restaurants see it the same way.",
        };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">{t.eyebrow}</p>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              {t.heading}
            </h2>
            <p className="mb-5 md:mb-6 md:text-md">{t.body}</p>
          </div>
          <div>
            <Image
              src="/images/Oportunidade.png"
              width={800}
              height={600}
              className="w-full h-auto rounded-2xl object-cover"
              alt="Market opportunity"
              quality={90}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
