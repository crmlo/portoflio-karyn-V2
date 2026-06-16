"use client";

import React from "react";
import { useLanguage } from "../../context/LanguageContext";

export function Header64() {
  const { language } = useLanguage();

  return (
    <section id="about" className="bg-black px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg text-center">
        <h1 className="mb-5 text-6xl font-bold text-white md:mb-6 md:text-9xl lg:text-10xl">
          {language === "pt"
            ? "8 anos construindo produtos que funcionam"
            : "8 years building products that work"}
        </h1>
        <p className="text-white md:text-md">
          {language === "pt"
            ? "Sou Karyn Loreyne, Senior Product Designer, e moro no interior de São Paulo, Brasil."
            : "I'm Karyn Loreyne, a Senior Product Designer based in São Paulo, Brazil."}
        </p>
      </div>
    </section>
  );
}
