"use client";

import React from "react";
import { useLanguage } from "../../../context/LanguageContext";

export function Layout463() {
  const { language } = useLanguage();
  const t =
    language === "pt"
      ? {
          eyebrow: "Público",
          heading: "Um produto feito para tomadores de decisão estratégicos, não para times operacionais",
          card1Title: "Gestores de Saúde",
          card1Body:
            "Gestores sênior responsáveis por reportar para diretores ou clientes. Consomem dados para tomar decisões estratégicas e comprovar o valor de suas próprias operações. Não são as pessoas que executam as tarefas do dia a dia.",
          card2Title: "Time de Customer Success",
          card2Body:
            "O time interno que gerava relatórios e visualizações manualmente sob demanda. O Compass também foi construído para liberar esse time dessa carga operacional.",
        }
      : {
          eyebrow: "Audience",
          heading: "A product built for strategic decision-makers, not operational teams",
          card1Title: "Healthcare Managers",
          card1Body:
            "Senior managers responsible for reporting to directors or clients. They consume data to make strategic decisions and prove the value of their own operations. Not the people running day-to-day tasks.",
          card2Title: "Customer Success Team",
          card2Body:
            "The internal team that was manually generating reports and visualizations on demand. Compass was also built to free them from this operational burden.",
        };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28" style={{ backgroundColor: "#F3F5FF" }}>
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-x-12 gap-y-8 md:grid-cols-2 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">{t.eyebrow}</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              {t.heading}
            </h2>
          </div>
          <div>
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
              <div>
                <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                  {t.card1Title}
                </h6>
                <p>{t.card1Body}</p>
              </div>
              <div>
                <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                  {t.card2Title}
                </h6>
                <p>{t.card2Body}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
