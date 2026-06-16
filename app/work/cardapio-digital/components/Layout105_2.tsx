"use client";

import Image from "next/image";
import React from "react";
import { useLanguage } from "../../../context/LanguageContext";

export function Layout105_2() {
  const { language } = useLanguage();
  const t =
    language === "pt"
      ? {
          heading:
            "O fluxo tinha quatro etapas conectadas: escolher o método de pagamento, fazer login ou criar uma conta, validar a identidade e, por fim, inserir os dados do cartão ou código Pix.",
          body1:
            "Cada etapa tinha casos de borda que exigiam decisões explícitas de design: o que acontece quando o código SMS não chega, como tratar clientes que já têm conta no iFood, como apresentar o ambiente de autenticação do iFood sem fazer o cliente sentir que está pedindo pelo iFood.",
          body2:
            "Acertar esse último ponto era particularmente delicado: precisávamos que a infraestrutura do iFood parecesse um sinal de confiança, não uma fonte de confusão.",
        }
      : {
          heading:
            "The flow had four connected stages: choosing a payment method, logging in or signing up, validating identity, and finally entering card or Pix details.",
          body1:
            "Each stage had edge cases that needed explicit design decisions: what happens when the SMS code doesn't arrive, how to handle customers who already have an iFood account, how to present iFood's authentication environment without making the customer feel like they're ordering through iFood.",
          body2:
            "Getting that last part right was particularly delicate: we needed the iFood infrastructure to feel like a trust signal, not a source of confusion.",
        };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <div>
            <h3 className="text-5xl font-bold leading-[1.2] md:text-7xl lg:text-8xl">
              {t.heading}
            </h3>
          </div>
          <div>
            <div className="flex flex-col gap-4">
              <p className="md:text-md">{t.body1}</p>
              <p className="md:text-md">{t.body2}</p>
            </div>
          </div>
        </div>
        <Image
          src="/images/Login.png"
          width={1200}
          height={675}
          className="w-full object-cover rounded-2xl"
          alt="Authentication flow design"
          quality={90}
        />
      </div>
    </section>
  );
}
