"use client";

import Image from "next/image";
import React from "react";
import { Store, Utensils } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext";

export function Layout518() {
  const { language } = useLanguage();
  const t =
    language === "pt"
      ? {
          eyebrow: "Público",
          heading: "Dois públicos, um produto.",
          body: "O Cardápio Digital atendia dois grupos distintos, cada um com seus próprios pontos de fricção e motivações. Entender os dois era essencial para o design.",
          card1Title: "Restaurantes parceiros do iFood",
          card1Body:
            "Parceiros do iFood que já vendem fora da plataforma pelo WhatsApp ou telefone, e precisam de uma forma mais simples de gerenciar isso.",
          card2Title: "Clientes dos parceiros",
          card2Body:
            "O consumidor final que faz pedidos diretamente pelo Cardápio Digital do restaurante, sem passar pela plataforma do iFood.",
        }
      : {
          eyebrow: "Audience",
          heading: "Two audiences, one product, different needs",
          body: "Cardápio Digital served two distinct groups, each with their own friction points and motivations. Understanding both was essential to the design.",
          card1Title: "iFood Partner Restaurants",
          card1Body:
            "iFood partners who already sell outside the platform through WhatsApp or phone, and need a simpler way to manage it.",
          card2Title: "Partner's Customers",
          card2Body:
            "The end consumer who places orders directly through the restaurant's Digital Menu, bypassing iFood's platform and fees.",
        };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">{t.eyebrow}</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              {t.heading}
            </h2>
            <p className="md:text-md">{t.body}</p>
          </div>
        </div>
        <div className="grid place-items-center gap-x-8 gap-y-12 sm:grid-cols-2 md:gap-y-16 lg:grid-cols-[1fr_1.5fr_1fr] lg:gap-x-12">
          <div className="grid w-full grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16">
            <div className="flex flex-col items-center text-center">
              <div className="mb-5 md:mb-6">
                <Store className="size-12" strokeWidth={1.5} />
              </div>
              <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                {t.card1Title}
              </h3>
              <p>{t.card1Body}</p>
            </div>
          </div>
          <div className="relative order-last w-full sm:col-span-2 lg:order-none lg:col-span-1">
            <Image
              src="/images/App+Painel.png"
              width={800}
              height={600}
              alt="Cardápio Digital app and partner panel"
              className="h-auto w-full object-cover rounded-2xl"
              quality={90}
            />
          </div>
          <div className="grid w-full grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16">
            <div className="flex flex-col items-center text-center">
              <div className="mb-5 md:mb-6">
                <Utensils className="size-12" strokeWidth={1.5} />
              </div>
              <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                {t.card2Title}
              </h3>
              <p>{t.card2Body}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
