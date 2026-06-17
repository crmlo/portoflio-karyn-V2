"use client";

import React, { useState } from "react";
import { RxChevronLeft, RxChevronRight } from "react-icons/rx";
import { useLanguage } from "../../context/LanguageContext";

const testimonials = [
  {
    quotePt:
      "A Karyn é a designer que realmente se importa com o usuário. Seu trabalho é guiado por necessidades reais e orientado ao usuário final, com uma preocupação genuína em entregar a melhor experiência e o melhor impacto possíveis. Ela conduz testes, pesquisas, entrevistas e traz muitos insumos para o time.",
    quoteEn:
      "Karyn is the designer who genuinely cares about the user. Her work is guided by real needs and oriented to the final user, with latent concern in delivering the best real experience and impact. She conducts tests, surveys, interviews, and brings a lot of inputs for the team.",
    author: "Eduardo Duccigne",
    contextPt: "Gerente de Design, Nilo",
    contextEn: "Design Manager, Nilo",
  },
  {
    quotePt:
      "Trabalhando com a Karyn em jornadas complexas de cuidado oncológico, fiquei consistentemente impressionado com a rapidez com que ela entendia as nuances clínicas e as traduzia em soluções de design que realmente faziam sentido para os fluxos de trabalho reais que estávamos mapeando juntos.",
    quoteEn:
      "Working with Karyn on complex oncological care journeys, I was consistently impressed by how quickly she grasped the clinical nuances and translated them into design solutions that actually made sense for the real workflows we were mapping together.",
    author: "Marcos Adriano Jota",
    contextPt: "Diretor Nacional, Sociedade Brasileira de Cirurgia Oncológica · Conselheiro, Nilo",
    contextEn: "National Director, Brazilian Society of Surgical Oncology · Advisor, Nilo",
  },
  {
    quotePt:
      "A Karyn aborda cada projeto com um nível de cuidado raro de se ver. Antes de qualquer tela ser desenhada, ela já mapeou o contexto do usuário, identificou os casos de borda e pensou no copy e na validação. Esse rigor se mantém até a entrega, e isso fica evidente na qualidade do que vai ao ar.",
    quoteEn:
      "Karyn approaches every project with a level of thoroughness that's rare. Before a single screen gets designed, she's already mapped the user context, identified the edge cases, and thought through the copy and validation. That rigor carries all the way through to delivery — and it shows in the quality of what ships.",
    author: "Sofia Oliveira",
    contextPt: "Gerente de Produto, Nilo",
    contextEn: "Product Manager, Nilo",
  },
  {
    quotePt:
      "O trabalho da Karyn é extremamente bem documentado. Você consegue olhar o arquivo do Figma que ela cria e saber exatamente o que acontece em cada situação. Cada fluxo é muito bem descrito.",
    quoteEn:
      "Karyn's work is extremely well documented. You can look at the Figma file she creates and know exactly what happens in each situation. Each flow is very well described.",
    author: "Lucas Gomide",
    contextPt: "Engenheiro de Software Senior, Nilo",
    contextEn: "Senior Software Engineer, Nilo",
  },
  {
    quotePt:
      "Ela mostrou muito interesse no Compass, um projeto grande e complexo. Não teve medo de encará-lo de frente e organizar sessões de co-criação complexas.",
    quoteEn:
      "She showed a lot of interest in the Compass — a large and complex project. She was not afraid to face it head-on and organize complex co-creation sessions.",
    author: "Rafael Alves",
    contextPt: "Head de Produto, Nilo",
    contextEn: "Head de Produto, Nilo",
  },
];

const ITEMS_PER_PAGE = 2;
const totalPages = Math.ceil(testimonials.length / ITEMS_PER_PAGE);

export function Testimonials() {
  const { language } = useLanguage();
  const [page, setPage] = useState(0);
  const t =
    language === "pt"
      ? {
          eyebrow: "Depoimentos",
          heading: "O que dizem sobre trabalhar comigo.",
          body: "Diretamente das pessoas com quem construí alguns destes projetos.",
        }
      : {
          eyebrow: "Testimonials",
          heading: "What they say about working with me.",
          body: "Straight from the people I've built with.",
        };

  const prev = () => setPage((p) => (p - 1 + totalPages) % totalPages);
  const next = () => setPage((p) => (p + 1) % totalPages);

  const visible = [
    testimonials[(page * ITEMS_PER_PAGE) % testimonials.length],
    testimonials[(page * ITEMS_PER_PAGE + 1) % testimonials.length],
  ];

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">{t.eyebrow}</p>
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            {t.heading}
          </h2>
          <p className="md:text-md">{t.body}</p>
        </div>

        <div className="overflow-hidden">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-x-8 lg:gap-x-12" style={{ minHeight: "350px" }}>
          {visible.map((item, i) => (
            <div
              key={i}
              className="flex h-full flex-col border border-border-primary p-8 md:p-10" style={{ minHeight: "350px" }}
            >
              <blockquote className="flex-1 text-md font-bold leading-[1.4]">
                "{language === "pt" ? item.quotePt : item.quoteEn}"
              </blockquote>
              <div className="mt-6 border-t border-border-primary pt-6">
                <p className="font-semibold">{item.author}</p>
                <p className="text-sm text-neutral-500">
                  {language === "pt" ? item.contextPt : item.contextEn}
                </p>
              </div>
            </div>
          ))}
        </div>
        </div>

        <div className="mt-8 flex items-center justify-between md:mt-10">
          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                aria-label={`Go to page ${i + 1}`}
                className={`h-2 w-2 rounded-full transition-colors ${
                  i === page ? "bg-black" : "bg-neutral-300"
                }`}
              />
            ))}
          </div>
          <div className="flex gap-3">
            <button
              onClick={prev}
              aria-label="Previous"
              className="flex size-12 items-center justify-center border border-border-primary transition-colors hover:bg-background-secondary"
            >
              <RxChevronLeft className="size-5" />
            </button>
            <button
              onClick={next}
              aria-label="Next"
              className="flex size-12 items-center justify-center border border-border-primary transition-colors hover:bg-background-secondary"
            >
              <RxChevronRight className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
