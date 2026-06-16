"use client";

import React from "react";
import { useLanguage } from "../../../context/LanguageContext";

export function Layout65_1() {
  const { language } = useLanguage();
  const t =
    language === "pt"
      ? {
          eyebrow: "O problema",
          heading: "O problema não era falta de dados. Era dados sem significado.",
          body: "Os gestores solicitavam tudo que podiam imaginar, sem um framework claro sobre o que realmente importava. O time de CS gerava gráficos sob demanda, mas ninguém perguntava se esses gráficos levavam a melhores decisões.",
        }
      : {
          eyebrow: "The problem",
          heading: "The issue wasn't lack of data. It was data without meaning.",
          body: "Managers were requesting everything they could think of, without a clear framework for what actually mattered. The CS team was generating graphs on demand, but no one was asking whether those graphs led to better decisions.",
        };

  return (
    <section className="bg-black px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-5 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold text-white/60 md:mb-4">{t.eyebrow}</p>
            <h2 className="text-5xl font-bold text-white md:text-7xl lg:text-8xl">
              {t.heading}
            </h2>
          </div>
          <div>
            <p className="mb-5 text-white/80 md:mb-6 md:text-md">{t.body}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
