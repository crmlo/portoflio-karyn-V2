"use client";

import React from "react";
import { useLanguage } from "../../../context/LanguageContext";

export function Header64() {
  const { language } = useLanguage();
  const t =
    language === "pt"
      ? {
          heading: "O time recebeu a pesquisa com muita energia",
          body: "O Head of Product olhou para os nossos achados e disse: esse é o nosso roadmap. Seguimos por ele.",
        }
      : {
          heading: "The team received the research with a lot of energy",
          body: "The Head of Product looked at our findings and said: this is our roadmap. We followed it.",
        };

  return (
    <section className="bg-[#F3F5FF] px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg text-center">
        <h1 className="mb-5 text-6xl font-bold text-black md:mb-6 md:text-9xl lg:text-10xl">
          {t.heading}
        </h1>
        <p className="text-black/70 md:text-md">{t.body}</p>
      </div>
    </section>
  );
}
