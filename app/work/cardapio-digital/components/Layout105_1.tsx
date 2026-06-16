"use client";

import Image from "next/image";
import React from "react";
import { useLanguage } from "../../../context/LanguageContext";

export function Layout105_1() {
  const { language } = useLanguage();
  const t =
    language === "pt"
      ? {
          eyebrow: "O trabalho complexo: pagamento online e Pix",
          heading: "Os restaurantes nos disseram exatamente o que faltava. Nós construímos.",
          body: "A maior lacuna de funcionalidade era clara: os restaurantes queriam que seus clientes pudessem pagar online, por cartão de crédito ou Pix, não apenas na entrega. Não era uma adição simples. Significava desenhar o fluxo completo de login e cadastro para os clientes finais, incluindo validação por email e SMS, conformidade com privacidade e segurança, considerações de LGPD e integração com a infraestrutura de autenticação existente do iFood.",
        }
      : {
          eyebrow: "The complex work: online payment and Pix",
          heading: "Restaurants told us exactly what was missing. We built it.",
          body: "The most requested feature gap was clear: restaurants wanted their customers to be able to pay online by credit card or Pix not just on delivery. This wasn't a small addition. It meant designing the full login and sign-up flow for end customers, including email and SMS validation, privacy and security compliance, LGPD considerations, and integration with iFood's existing authentication infrastructure.",
        };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">{t.eyebrow}</p>
            <h3 className="text-5xl font-bold leading-[1.2] md:text-7xl lg:text-8xl">
              {t.heading}
            </h3>
          </div>
          <div>
            <p className="mb-5 md:mb-4 md:text-md">{t.body}</p>
          </div>
        </div>
        <Image
          src="/images/POL.png"
          width={1200}
          height={675}
          className="w-full object-cover rounded-2xl"
          alt="Payment flow design"
          quality={90}
        />
      </div>
    </section>
  );
}
