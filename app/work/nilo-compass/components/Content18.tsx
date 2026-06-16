"use client";

import Image from "next/image";
import React from "react";
import { useLanguage } from "../../../context/LanguageContext";

export function Content18() {
  const { language } = useLanguage();
  const t =
    language === "pt"
      ? {
          heading: "Da visão geral ao menor detalhe, na mesma ferramenta.",
          body1:
            "O Compass foi estruturado em torno de 11 casos de uso, cada um mapeando um conjunto de métricas e indicadores relacionados. Os gestores podiam navegar entre visões gerais e detalhar dimensões específicas sem perder o contexto.",
          body2:
            "O produto foi desenhado para atender dois modos de trabalho: uma checagem rápida diária e uma sessão analítica profunda, ambos na mesma interface.",
          body3:
            "Cada visualização trazia sinais de status, não apenas números, mas interpretações. Verde significava no caminho certo. Vermelho significava ação necessária. O objetivo era reduzir a carga cognitiva de monitorar uma operação de saúde inteira para algo que um gestor pudesse lidar sem ajuda externa.",
        }
      : {
          heading: "From the big picture to the finest detail, in the same tool.",
          body1:
            "Compass was structured around 11 use cases, each mapping a cluster of related metrics and indicators. Managers could navigate between high-level overviews and drill into specific dimensions without losing context.",
          body2:
            "The product was designed to serve two modes of work: a quick daily check-in and a deep analytical session, both in the same interface.",
          body3:
            "Every visualization carried status signals — not just numbers, but interpretations. Green meant on track. Red meant action required. The goal was to reduce the cognitive load of monitoring an entire healthcare operation to something a manager could handle without external help.",
        };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28" style={{ backgroundColor: "#F3F5FF" }}>
      <div className="container">
        <div className="mb-12 grid grid-cols-1 gap-5 md:mb-18 md:grid-cols-[1fr_1.5fr] md:gap-x-12 lg:mb-20 lg:gap-x-20">
          <div>
            <h3 className="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl">
              {t.heading}
            </h3>
          </div>
          <div className="flex flex-col gap-4">
            <p className="md:text-md">{t.body1}</p>
            <p className="md:text-md">{t.body2}</p>
            <p className="md:text-md">{t.body3}</p>
          </div>
        </div>
        <div>
          <Image
            src="/images/Granularidade.png"
            width={1600}
            height={900}
            className="w-full h-auto rounded-2xl object-cover"
            alt="Compass granularity and detail view"
            quality={90}
          />
        </div>
      </div>
    </section>
  );
}
