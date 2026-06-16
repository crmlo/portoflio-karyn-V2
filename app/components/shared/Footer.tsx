"use client";

import React from "react";
import { BiEnvelope, BiLogoLinkedin, BiPhone } from "react-icons/bi";
import { useLanguage } from "../../context/LanguageContext";

export function Footer() {
  const { language } = useLanguage();
  const t =
    language === "pt"
      ? {
          eyebrow: "Entrar em contato",
          heading: "Entrar em contato",
          body: "Respondo a todas as mensagens.",
        }
      : {
          eyebrow: "Reach out",
          heading: "Get in touch",
          body: "I respond to every message.",
        };

  return (
    <footer id="contact" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid auto-cols-fr grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-[1fr_.75fr] md:gap-x-20 md:gap-y-16">
          <div className="max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">{t.eyebrow}</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              {t.heading}
            </h2>
            <p className="md:text-md">{t.body}</p>
          </div>
          <div className="flex flex-col">
            <div className="grid auto-cols-fr grid-cols-1 gap-x-4 gap-y-6 py-2">
              <div className="flex flex-row">
                <div className="mr-4 md:mb-4">
                  <BiEnvelope className="size-6" />
                </div>
                <div>
                  <h3 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">Email</h3>
                  <a className="underline" href="mailto:karyn.loreyne@gmail.com">
                    karyn.loreyne@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex flex-row">
                <div className="mr-4 md:mb-4">
                  <BiPhone className="size-6" />
                </div>
                <div>
                  <h3 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">WhatsApp</h3>
                  <a className="underline" href="https://wa.me/5519987653205">
                    wa.me/5519987653205
                  </a>
                </div>
              </div>
              <div className="flex flex-row">
                <div className="mr-4 md:mb-4">
                  <BiLogoLinkedin className="size-6" />
                </div>
                <div>
                  <h3 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">LinkedIn</h3>
                  <a
                    className="underline"
                    href="https://linkedin.com/in/karynloreyne"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/karynloreyne
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
