"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "../../../context/LanguageContext";

export function Content2() {
  const { language } = useLanguage();
  const t =
    language === "pt"
      ? {
          heading: "O problema de mercado",
          body1:
            "A saúde no Brasil enfrenta uma equação estrutural sem solução fácil. A demanda continua crescendo. As margens continuam caindo. A folha de pagamento representa mais da metade dos custos operacionais, então escalar o cuidado significa contratar mais pessoas, e esse ciclo nunca para.",
          body2:
            "A aposta da Nilo: usar IA para quebrar essa equação, especificamente em triagem e agendamento, as interações de maior volume e mais repetitivas em toda a jornada de cuidado. Provar que funciona aqui torna tudo mais fácil de construir e vender.",
          body3:
            "O ponto de entrada era claro: o Chat. Ele já era a infraestrutura conectando pacientes e times de saúde. Introduzir agentes de IA aqui significava que o impacto seria imediato e mensurável sem reconstruir toda a plataforma.",
        }
      : {
          heading: "The market problem",
          body1:
            "Healthcare in Brazil is facing a structural equation with no easy solution. Demand keeps growing. Margins keep shrinking. Payroll represents more than half of operational costs — so scaling care means hiring more people, and that cycle never stops.",
          body2:
            "Nilo's bet: use AI to break this equation — specifically in triage and scheduling, the highest-volume, most repetitive interactions in the entire care journey. Prove it works here, and everything else becomes easier to build and sell.",
          body3:
            "The entry point was clear: the Chat. It was already the infrastructure connecting patients and care teams. Introducing AI agents here meant the impact would be immediate and measurable without rebuilding the entire platform.",
        };

  return (
    <section id="relume" style={{ backgroundColor: "#1B1B1C" }} className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div>
            <Image
              src="/images/MarketProblem.png"
              alt="The market problem"
              width={800}
              height={600}
              className="w-full h-auto rounded-2xl"
              quality={90}
            />
          </div>
          <div>
            <h2 className="rb-5 mb-5 text-5xl font-bold text-white md:mb-6 md:text-7xl lg:text-8xl">
              {t.heading}
            </h2>
            <div className="prose prose-invert">
              <div>
                <p className="text-white">{t.body1}</p>
                <p className="text-white">{t.body2}</p>
                <p className="text-white">{t.body3}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
