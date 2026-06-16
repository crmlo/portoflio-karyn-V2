"use client";

import Image from "next/image";
import React from "react";
import { Users, ClipboardCheck } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext";

export function Layout10() {
  const { language } = useLanguage();
  const t =
    language === "pt"
      ? {
          eyebrow: "Abordagem",
          heading:
            "Não perguntamos quais dados eles queriam. Descobrimos quais decisões precisavam tomar.",
          body1:
            "Em vez de construir uma ferramenta de BI configurável e deixar os gestores escolherem suas próprias métricas, adotamos uma abordagem propositiva: definimos os dados que importavam, organizamos em temas e entregamos de forma já interpretada.",
          body2:
            "Isso exigiu três fontes de conhecimento trabalhando juntas: o time de CS, que entendia com o que os gestores realmente tinham dificuldade; uma pesquisadora interna com expertise acadêmica e de mercado em métricas de saúde; e os próprios gestores, que validaram o que construímos e deram feedback onde não se encaixava na realidade deles.",
          card1Title: "Co-criação com CS e pesquisa",
          card1Body:
            "Conduzi sessões de co-criação com o time de CS e a pesquisadora interna de saúde da Nilo para mapear os temas de dados mais relevantes e definir quais métricas e indicadores faziam sentido para nossos clientes. Identificamos 11 casos de uso, cada um agrupando métricas e indicadores relacionados.",
          card2Title: "Validação com gestores",
          card2Body:
            "Em seguida, validei esses temas, métricas e visualizações diretamente com os gestores que usariam o produto. O feedback deles moldou como priorizamos e o que refinamos antes de construir.",
        }
      : {
          eyebrow: "Approach",
          heading:
            "We didn't ask what data they wanted. We figured out what decisions they needed to make.",
          body1:
            "Rather than building a configurable BI tool and letting managers choose their own metrics, we took a curated approach: we defined the data that mattered, organized it into themes, and delivered it in a way that was already interpreted.",
          body2:
            "This required three sources of knowledge working together: the CS team, who understood what managers actually struggled with; an internal researcher with academic and market expertise in healthcare metrics; and the managers themselves, who validated what we built and pushed back where it didn't fit their reality.",
          card1Title: "Co-creation with CS and research",
          card1Body:
            "I ran co-creation sessions with the CS team and Nilo's internal healthcare researcher to map the most relevant data themes and define which metrics and indicators made sense for our clients. We identified 11 use cases, each clustering related metrics and indicators.",
          card2Title: "Validation with managers",
          card2Body:
            "I then validated these themes, metrics, and visualizations directly with the managers who would use the product. Their feedback shaped how we prioritized and what we refined before building.",
        };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">{t.eyebrow}</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              {t.heading}
            </h2>
            <p className="mb-4 md:text-md">{t.body1}</p>
            <p className="mb-6 md:mb-8 md:text-md">{t.body2}</p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div className="flex">
                <div className="mr-4 flex-none self-start">
                  <Users className="size-8" strokeWidth={1.5} />
                </div>
                <div>
                  <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                    {t.card1Title}
                  </h6>
                  <p>{t.card1Body}</p>
                </div>
              </div>
              <div className="flex">
                <div className="mr-4 flex-none self-start">
                  <ClipboardCheck className="size-8" strokeWidth={1.5} />
                </div>
                <div>
                  <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                    {t.card2Title}
                  </h6>
                  <p>{t.card2Body}</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Image
              src="/images/CoCriacao.png"
              width={800}
              height={600}
              className="w-full h-auto rounded-2xl object-cover"
              alt="Compass use cases"
              quality={90}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
