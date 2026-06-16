"use client";

import React from "react";
import { useLanguage } from "../../context/LanguageContext";

export function Header1() {
  const { language } = useLanguage();

  return (
    <section id="work" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
              {language === "pt"
                ? "Olá! Eu sou a Karyn, e desenho produtos que resolvem problemas difíceis e que realmente funcionam."
                : "I'm Karyn, and I design products that solve hard problems and actually work."}
            </h1>
            <p className="md:text-md">
              {language === "pt"
                ? "Sou designer com quatorze anos de experiência, oito deles criando produtos digitais complexos. Conecto estratégia e execução para entregar experiências que funcionam para os usuários e geram resultados reais para os negócios."
                : "I'm a designer with fourteen years of experience, eight of them building complex digital products. I bridge strategy and craft to deliver experiences that work for users and drive real results for businesses."}
            </p>
          </div>
          <div className="flex justify-center">
            <div className="aspect-square w-full max-w-sm overflow-hidden rounded-full">
              <img
                src="/images/Avatar.jpg"
                className="h-full w-full object-cover"
                alt="Karyn Loreyne"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
