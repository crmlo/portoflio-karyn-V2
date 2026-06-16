"use client";

import Image from "next/image";
import React from "react";
import { useLanguage } from "../../../context/LanguageContext";

export function Layout105_1() {
  const { language } = useLanguage();
  const t =
    language === "pt"
      ? {
          eyebrow: "Pivots e decisões",
          heading:
            "Nem todo cliente tinha todos os módulos. Então desenhamos para as duas realidades.",
          body1:
            "Uma parcela significativa dos clientes da Nilo usava o produto completo, mas a parte com contratos parciais não era pequena o suficiente para ignorar. O Compass precisava funcionar bem para os dois. Para clientes com módulos inativos, um banner genérico de \"faça upgrade\" não comunicaria valor. Só comunicaria ausência.",
          body2:
            "Propus uma abordagem diferente: mostrar aos gestores exatamente o que estavam perdendo, em contexto. Onde a Nilo já tinha as integrações necessárias rodando em segundo plano, mesmo com o módulo desativado, exibíamos dados reais no preview.",
          body3:
            "O gestor podia ver seus próprios números reais, não projeções, e entender precisamente o que estava deixando na mesa. O que começou como uma forma de lidar com um cenário de contrato incompleto se tornou uma oportunidade deliberada de upsell incorporada ao próprio produto.",
        }
      : {
          eyebrow: "Pivots and decisions",
          heading:
            "Not every client had every module. So we designed for both realities.",
          body1:
            "A significant portion of Nilo's clients used the full product suite, but the share that had partial contracts wasn't small enough to ignore. Compass had to work well for both. For clients with inactive modules, a generic \"upgrade\" banner wasn't going to communicate value. It would just communicate absence.",
          body2:
            "I proposed a different approach: show managers exactly what they were missing, in context. Where Nilo already had the necessary integrations running in the background, even with the module disabled, we surfaced real data in the preview.",
          body3:
            "The manager could see their actual numbers, not projections, and understand precisely what they were leaving on the table. What started as a way to handle an incomplete contract scenario became a deliberate upsell opportunity built into the product itself.",
        };

  return (
    <section className="bg-white px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">{t.eyebrow}</p>
            <h3 className="text-5xl font-bold leading-[1.2] md:text-7xl lg:text-8xl">
              {t.heading}
            </h3>
          </div>
          <div>
            <p className="mb-5 md:mb-4 md:text-md">{t.body1}</p>
            <p className="mb-4 md:text-md">{t.body2}</p>
            <p className="md:text-md">{t.body3}</p>
          </div>
        </div>
        <Image
          src="/images/Upsell.png"
          width={1600}
          height={900}
          className="w-full h-auto rounded-2xl object-cover"
          alt="Inactive module upsell design"
          quality={90}
        />
      </div>
    </section>
  );
}
