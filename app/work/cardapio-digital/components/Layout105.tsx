"use client";

import Image from "next/image";
import React from "react";
import { useLanguage } from "../../../context/LanguageContext";

export function Layout105() {
  const { language } = useLanguage();
  const t =
    language === "pt"
      ? {
          eyebrow: "Pré-lançamento: Validando o posicionamento",
          heading: "Antes de lançar, testamos como falar sobre o produto.",
          body1:
            "Uma das primeiras perguntas que enfrentamos não era sobre o produto em si, era sobre como posicioná-lo. Fizemos um teste A/B fake door na landing page de aquisição para entender o que levaria os restaurantes a se cadastrar.",
          body2:
            "Versão A: destacava a gratuidade do produto, sem taxas, sem comissões. Performou ligeiramente melhor e virou a mensagem principal. Versão B: destacava a dor que resolvia, substituindo o caos de gerenciar pedidos pelo WhatsApp e telefone. O resultado foi próximo o suficiente para não descartarmos essa abordagem: mantivemos essa narrativa ao longo do restante da página.",
          body3: "Os dois ângulos ressoavam. Só precisávamos saber qual usar na abertura.",
        }
      : {
          eyebrow: "Pre-launch: Validating the positioning",
          heading: "Before we launched, we tested how to talk about it",
          body1:
            "One of the first questions we faced wasn't about the product itself, but it was about how to position it. We ran a fake door A/B test on the acquisition landing page to understand what would drive restaurant sign-ups.",
          body2:
            "Version A led with the product's free nature: no fees, no commissions. Version B led with the pain it solved: replacing the chaos of managing orders through WhatsApp and phone.",
          body3:
            "The results were close. A performed slightly better, so we used it as the hero message. But the gap was narrow enough that we didn't discard B — we kept its framing and wove it into the rest of the page. Both angles were resonating. We just needed to know which one to lead with.",
        };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">{t.eyebrow}</p>
            <h3 className="text-5xl font-bold leading-[1.2] md:text-7xl lg:text-8xl">
              {t.heading}
            </h3>
          </div>
          <div className="flex flex-col gap-4">
            <p className="md:text-md">{t.body1}</p>
            <p className="md:text-md">{t.body2}</p>
            <p className="md:text-md">{t.body3}</p>
          </div>
        </div>
        <Image
          src="/images/A-B.png"
          width={1600}
          height={900}
          className="w-full h-auto rounded-2xl object-cover"
          alt="A/B test landing page"
          quality={90}
        />
      </div>
    </section>
  );
}
