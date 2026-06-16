"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "../../../context/LanguageContext";

export function Layout1_1() {
  const { language } = useLanguage();
  const t =
    language === "pt"
      ? {
          eyebrow: "Solução",
          heading: "Quatro superfícies. Um sistema conectado.",
          body: "A solução não eram funcionalidades isoladas. As decisões tomadas em uma superfície afetavam diretamente a experiência nas outras.",
        }
      : {
          eyebrow: "Solution",
          heading: "Four surfaces. One connected system.",
          body: "The solution wasn't isolated features. Decisions made on one surface directly affected the experience on the others.",
        };

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">{t.eyebrow}</p>
            <h1 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              {t.heading}
            </h1>
            <p className="md:text-md">{t.body}</p>
          </div>
          <div>
            <Image
              src="/images/ChatAI_Hero.png"
              alt="Four connected surfaces"
              width={800}
              height={600}
              className="w-full h-auto rounded-2xl"
              quality={90}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
