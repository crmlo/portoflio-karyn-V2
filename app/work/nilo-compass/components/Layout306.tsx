"use client";

import Image from "next/image";
import React from "react";
import { useLanguage } from "../../../context/LanguageContext";

export function Layout306() {
  const { language } = useLanguage();
  const t =
    language === "pt"
      ? {
          eyebrow: "Funcionalidades",
          heading: "Principais funcionalidades",
          body1:
            "Trabalhei lado a lado com o time de engenharia para garantir que cada experiência que desenhei fosse tecnicamente viável.",
          body2:
            "Essa colaboração próxima nos permitiu validar restrições técnicas cedo e refinar soluções juntos. Aproveitando o design system da empresa, criei componentes adaptados às necessidades únicas deste produto.",
          card1Title: "Sinais visuais de status",
          card1Body:
            "Indicadores de fácil leitura que sinalizavam quando algo estava fora do esperado, sem exigir que o gestor interpretasse números brutos.",
          card2Title: "Relatórios exportáveis",
          card2Body:
            "Os gestores podiam exportar dados nos formatos mais comuns, facilitando o compartilhamento com diretores ou clientes.",
          card3Title: "Filtros flexíveis",
          card3Body:
            "A camada de filtros dava aos gestores possibilidades infinitas de visualização, mas sempre dentro de uma estrutura adaptada aos seus objetivos.",
          card4Title: "Todos os números-chave agrupados por caso de uso",
          card4Body:
            "Dando aos gestores um modelo mental consistente de sua operação em cada sessão.",
        }
      : {
          eyebrow: "Features",
          heading: "Key features included",
          body1:
            "I worked side by side with the engineering team to ensure every experience I designed was technically feasible.",
          body2:
            "This close collaboration allowed us to validate technical constraints early and refine solutions together. Leveraging the company's design system, I created components tailored to this product's unique needs.",
          card1Title: "Visual status signals",
          card1Body:
            "At-a-glance indicators that flagged when something was off without requiring the manager to interpret raw numbers.",
          card2Title: "Exportable reports",
          card2Body:
            "Managers could export data in the most common formats, making it easy to share with directors or clients.",
          card3Title: "Flexible filtering",
          card3Body:
            "The filter layer gave managers infinite visualization possibilities, but always within a structure tailored to their goals.",
          card4Title: "All key numbers grouped by theme",
          card4Body:
            "Giving managers a consistent mental model of their operation across every session.",
        };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">{t.eyebrow}</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              {t.heading}
            </h2>
            <p className="mb-4 md:text-md">{t.body1}</p>
            <p className="md:text-md">{t.body2}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-4">
          <div>
            <div className="mb-5 md:mb-6">
              <Image
                src="/images/BigNumbers.jpg"
                width={400}
                height={250}
                alt="Visual status signals"
                className="w-full h-auto rounded-2xl object-cover"
                quality={90}
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              {t.card1Title}
            </h3>
            <p>{t.card1Body}</p>
          </div>
          <div>
            <div className="mb-5 md:mb-6">
              <Image
                src="/images/Export.jpg"
                width={400}
                height={250}
                alt="Exportable reports"
                className="w-full h-auto rounded-2xl object-cover"
                quality={90}
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              {t.card2Title}
            </h3>
            <p>{t.card2Body}</p>
          </div>
          <div>
            <div className="mb-5 md:mb-6">
              <Image
                src="/images/Filtros.jpg"
                width={400}
                height={250}
                alt="Flexible filtering"
                className="w-full h-auto rounded-2xl object-cover"
                quality={90}
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              {t.card3Title}
            </h3>
            <p>{t.card3Body}</p>
          </div>
          <div>
            <div className="mb-5 md:mb-6">
              <Image
                src="/images/CasodeUso.jpg"
                width={400}
                height={250}
                alt="Key numbers by theme"
                className="w-full h-auto rounded-2xl object-cover"
                quality={90}
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              {t.card4Title}
            </h3>
            <p>{t.card4Body}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
