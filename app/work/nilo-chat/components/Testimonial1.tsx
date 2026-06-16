"use client";

import React from "react";
import { useLanguage } from "../../../context/LanguageContext";

export function Testimonial1() {
  const { language } = useLanguage();
  const t =
    language === "pt"
      ? {
          quote:
            "\"Estamos sinalizando erros para ajudar o agente a melhorar, mas por favor não desliguem, já está facilitando muito o nosso trabalho.\"",
          author: "Time de enfermagem, Grupo Fleury",
          context: "Semanas após o lançamento",
        }
      : {
          quote:
            '"We\'re flagging errors to help the agent improve, but please don\'t turn it off, it\'s already making our work so much easier."',
          author: "Nursing team, Grupo Fleury",
          context: "Weeks after launch",
        };

  return (
    <section id="relume" className="bg-malibu-lightest px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container w-full max-w-lg">
        <div className="flex flex-col items-center text-center">
          <blockquote className="text-xl font-bold md:text-2xl">{t.quote}</blockquote>
          <div className="mt-6 flex flex-col items-center justify-center md:mt-8">
            <p className="font-semibold">{t.author}</p>
            <p>{t.context}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
