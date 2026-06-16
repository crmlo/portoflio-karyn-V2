"use client";

import Image from "next/image";
import React from "react";
import { useLanguage } from "../../../context/LanguageContext";

export function Blog46() {
  const { language } = useLanguage();
  const t =
    language === "pt"
      ? {
          eyebrow: "Evolução do produto",
          heading: "A pesquisa não só respondeu perguntas. Ela reescreveu o roadmap.",
          v1Body:
            "O V1 que recebi cobria o fluxo central de pedidos: navegação no menu, carrinho e checkout básico. O que a pesquisa deixou claro foi o quanto faltava para os restaurantes realmente operarem seu negócio por ele.",
          v2Body:
            "O V2 que construímos a partir desses achados era um produto substancialmente diferente. Os novos fluxos incluíam gerenciamento de endereço e opções de retirada, redesign completo do catálogo e checkout, métodos de pagamento (Pix, cartão de crédito, dinheiro na entrega), autenticação de conta iFood, acompanhamento de pedido e melhorias de UX identificadas na análise heurística. Não foi uma iteração. Foi uma reconstrução baseada no que passamos a conhecer.",
        }
      : {
          eyebrow: "Product evolution",
          heading: "The research didn't just answer questions. It rewrote the roadmap.",
          v1Body:
            "The V1 I inherited covered the core ordering flow: menu browsing, cart, and basic checkout. What the research made clear was how much was missing for restaurants to actually run their business through it.",
          v2Body:
            "The V2 we built from those findings was a substantially different product. New flows included address handling and pickup options, a full catalog and checkout redesign, payment methods (Pix, credit card, cash on delivery), iFood account authentication, order tracking, and a series of UX improvements flagged in the heuristic analysis. It wasn't an iteration. It was a rebuild grounded in what we now knew.",
        };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">{t.eyebrow}</p>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              {t.heading}
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8 lg:gap-x-12">
          <div className="flex size-full flex-col items-start justify-start text-start">
            <div className="mb-6 w-full">
              <Image
                src="/images/V1.png"
                width={800}
                height={450}
                alt="V1 product"
                className="aspect-video w-full object-cover rounded-2xl"
                quality={90}
              />
            </div>
            <p className="mb-2 md:text-md">{t.v1Body}</p>
          </div>
          <div className="flex size-full flex-col items-start justify-start text-start">
            <div className="mb-6 w-full">
              <Image
                src="/images/V2.png"
                width={800}
                height={450}
                alt="V2 product"
                className="aspect-video w-full object-cover rounded-2xl"
                quality={90}
              />
            </div>
            <p className="mb-2 md:text-md">{t.v2Body}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
