"use client";

import React from "react";
import { useLanguage } from "../../../context/LanguageContext";

export function Stats17() {
  const { language } = useLanguage();
  const t =
    language === "pt"
      ? {
          eyebrow: "Resultados",
          heading: "Os gestores pararam de pedir dados porque já os tinham.",
          body1:
            "Dentro dos primeiros meses do Compass operando em capacidade total, o volume de solicitações avulsas de dados ao time de CS caiu aproximadamente 80%. As solicitações que restaram eram para métricas raras ou muito específicas que ainda não haviam sido implementadas.",
          body2:
            "Os gestores relataram conseguir entender suas operações sem precisar de ajuda para interpretar os dados. Podiam montar relatórios para diretores e clientes sem acionar o time de CS. E a Nilo passou a ter uma forma clara e estruturada de demonstrar seu próprio valor dentro de cada conta de cliente.",
          stat: "~80%",
          statLabel: "Redução nas solicitações avulsas de dados ao CS nos primeiros meses",
        }
      : {
          eyebrow: "Results",
          heading: "Managers stopped asking for data because they already had it.",
          body1:
            "Within the first few months of Compass running at full capacity, the volume of ad-hoc data requests to the CS team dropped by approximately 80%. The requests that remained were for rare or highly specific metrics that hadn't yet been implemented.",
          body2:
            "Managers reported being able to understand their operations without needing help interpreting data. They could build reports for directors and clients without pulling in the CS team. And Nilo had a clear, structured way to demonstrate its own value inside every client account.",
          stat: "~80%",
          statLabel: "Reduction in ad-hoc CS data requests in the first months",
        };

  return (
    <section className="bg-black px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-y-12 lg:grid-cols-2 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold text-white/60 md:mb-4">
              {t.eyebrow}
            </p>
            <h2 className="mb-5 text-5xl font-bold text-white md:mb-6 md:text-7xl lg:text-8xl">
              {t.heading}
            </h2>
            <p className="mb-4 text-white/80 md:text-md">{t.body1}</p>
            <p className="text-white/80 md:text-md">{t.body2}</p>
          </div>
          <div className="grid grid-cols-1 gap-y-8 py-2">
            <div className="border-l-2 border-white/30 pl-8">
              <p className="mb-2 text-[4rem] font-bold leading-[1.2] text-white lg:text-[5rem]">
                {t.stat}
              </p>
              <h3 className="text-md font-bold leading-[1.4] text-white/80 md:text-xl">
                {t.statLabel}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
