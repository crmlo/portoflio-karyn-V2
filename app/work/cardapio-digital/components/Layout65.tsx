"use client";

import React from "react";
import { useLanguage } from "../../../context/LanguageContext";

export function Layout65() {
  const { language } = useLanguage();
  const t =
    language === "pt"
      ? {
          eyebrow: "O problema que a pesquisa revelou",
          heading:
            "O produto foi lançado. Três meses depois, ainda não sabíamos por que não estava funcionando.",
          body1:
            "O lançamento aconteceu no prazo. Mas três meses depois, os números estavam bem abaixo do esperado. Tínhamos 12 mil restaurantes ativos e 172 mil pedidos, contra uma meta de 200 mil pedidos naquele ponto, a caminho de 3 milhões até março de 2022. O primeiro instinto do time foi pressionar mais: mais ligações para restaurantes, mais contatos, mais follow-up. Passamos cerca de um mês fazendo exatamente isso. Gerou alguns dados, mas nada profundo o suficiente para explicar a fricção real.",
          body2:
            "O que faltava não era esforço. Era compreensão. Não tínhamos uma visão clara de quem eram de fato nossos restaurantes, como operavam fora do iFood, se haviam entendido o que o produto fazia, ou por que hesitavam em adotar algo que era, para a maioria deles, totalmente gratuito. Foi quando minha colega e eu propusemos fazer isso da forma correta.",
        }
      : {
          eyebrow: "The problem that research uncovered",
          heading:
            "The product launched. Three months later, we still didn't know why it wasn't working.",
          body1:
            "The launch happened on schedule. But three months in, the numbers were well below expectations. We had 12k active restaurants and 172k orders placed, against a goal of 200k orders by that point, on a path toward 3MM by March 2022. The team's first instinct was to push harder: more calls to restaurants, more outreach, more follow-up. We spent about a month doing exactly that. It generated some data, but nothing deep enough to explain the real friction.",
          body2:
            "What we were missing wasn't effort. It was understanding. We didn't have a clear picture of who our restaurants actually were, how they operated outside iFood, whether they had understood what the product did, or why they were hesitant to adopt something that was, for most of them, completely free. That's when my colleague and I proposed doing it properly.",
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
          <div className="flex flex-col gap-4">
            <p className="text-white/80 md:text-md">{t.body1}</p>
            <p className="text-white/80 md:text-md">{t.body2}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
