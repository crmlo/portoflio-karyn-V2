"use client";

import React from "react";
import { CreditCard, QrCode, ShoppingBag } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext";

export function Layout237() {
  const { language } = useLanguage();
  const t =
    language === "pt"
      ? {
          heading: "Entre os parceiros engajados, o feedback era diferente.",
          body: "Eles entendiam o produto e queriam continuar usando, mas três funcionalidades ausentes os seguravam:",
          card1Title: "Sem pagamento online",
          card1Body:
            "Os clientes só podiam pagar na entrega. Os restaurantes queriam suporte a cartão de crédito.",
          card2Title: "Sem Pix",
          card2Body: "O método de pagamento mais usado no Brasil, completamente ausente.",
          card3Title: "Sem opção de retirada",
          card3Body:
            "Os clientes não tinham como fazer pedido para retirar no local. Para restaurantes sem entregador próprio, isso era um impeditivo.",
        }
      : {
          heading:
            "Beyond that, we identified nine additional friction points across the experience.",
          body: "Among engaged partners, the feedback was different. They understood the product and wanted to keep using it, but three missing features were holding them back:",
          card1Title: "No online payment",
          card1Body:
            "Customers could only pay on delivery. Restaurants wanted credit card support.",
          card2Title: "No Pix",
          card2Body: "The most used digital payment method in Brazil, completely absent.",
          card3Title: "No pickup option",
          card3Body:
            "Customers had no way to place an order for pickup. For restaurants without their own delivery, that was a dealbreaker.",
        };

  return (
    <section className="bg-white px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="rb-12 mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              {t.heading}
            </h2>
            <p className="md:text-md">{t.body}</p>
          </div>
          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div className="flex w-full flex-col items-center text-center">
              <div className="rb-5 mb-5 md:mb-6">
                <CreditCard className="size-12" strokeWidth={1.5} />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                {t.card1Title}
              </h3>
              <p>{t.card1Body}</p>
            </div>
            <div className="flex w-full flex-col items-center text-center">
              <div className="rb-5 mb-5 md:mb-6">
                <QrCode className="size-12" strokeWidth={1.5} />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                {t.card2Title}
              </h3>
              <p>{t.card2Body}</p>
            </div>
            <div className="flex w-full flex-col items-center text-center">
              <div className="rb-5 mb-5 md:mb-6">
                <ShoppingBag className="size-12" strokeWidth={1.5} />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                {t.card3Title}
              </h3>
              <p>{t.card3Body}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
