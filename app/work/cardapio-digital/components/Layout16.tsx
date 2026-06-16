"use client";

import Image from "next/image";
import React from "react";
import { useLanguage } from "../../../context/LanguageContext";

export function Layout16() {
  const { language } = useLanguage();
  const t =
    language === "pt"
      ? {
          eyebrow: "Quick win",
          heading: "A solução mais rápida não foi uma funcionalidade, foi um guia.",
          body1:
            "Grande parte da fricção que identificamos não era sobre funcionalidade ausente, era sobre compreensão. Os restaurantes não sabiam o que era o produto, que era gratuito ou como divulgá-lo para seus próprios clientes.",
          body2:
            "Propus criar um guia educativo construído diretamente a partir das dúvidas coletadas nas entrevistas qualitativas. A PM estava cética, então me ofereci para fazê-lo no meu próprio tempo. Foi lançado em um evento para parceiros focado em promover e explicar o produto, e teve uma ótima recepção.",
          body3:
            "Depois disso, não foi algo pontual: o guia foi incorporado às comunicações contínuas com os restaurantes parceiros e disponibilizado diretamente no portal do parceiro.",
        }
      : {
          eyebrow: "Quick win",
          heading: "The fastest fix wasn't a feature, it was a guide.",
          body1:
            "A lot of the friction we'd uncovered wasn't about missing functionality; it was about understanding. Restaurants didn't know what the product was, that it was free, or how to promote it to their own customers.",
          body2:
            "I proposed an educational guide built directly from the questions collected in the qualitative interviews. The PM was skeptical, so I offered to build it on my own time. It launched at a partner event focused on promoting and explaining the product, and landed well.",
          body3:
            "After that, it wasn't a one-off. The guide was incorporated into ongoing communications with partner restaurants and made available directly in the partner portal.",
        };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">{t.eyebrow}</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              {t.heading}
            </h2>
            <div className="flex flex-col gap-4">
              <p className="text-base md:text-md">{t.body1}</p>
              <p className="text-base md:text-md">{t.body2}</p>
              <p className="text-base md:text-md">{t.body3}</p>
            </div>
          </div>
          <div>
            <Image
              src="/images/Guia-poster.png"
              width={800}
              height={600}
              className="w-full h-auto rounded-2xl object-cover md:hidden"
              alt="Partner educational guide"
              quality={90}
            />
            <Image
              src="/images/Guia.gif"
              width={800}
              height={600}
              className="hidden w-full h-auto rounded-2xl object-cover md:block"
              alt="Partner educational guide"
              quality={90}
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}
