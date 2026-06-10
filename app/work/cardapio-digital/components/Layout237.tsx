"use client";

import React from "react";
import { CreditCard, QrCode, ShoppingBag } from "lucide-react";

export function Layout237() {
  return (
    <section className="bg-white px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="rb-12 mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Beyond that, we identified nine additional friction points across
              the experience.
            </h2>
            <p className="md:text-md">
              Among engaged partners, the feedback was different. They
              understood the product and wanted to keep using it, but three
              missing features were holding them back:
            </p>
          </div>
          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div className="flex w-full flex-col items-center text-center">
              <div className="rb-5 mb-5 md:mb-6">
                <CreditCard className="size-12" strokeWidth={1.5} />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                No online payment
              </h3>
              <p>Customers could only pay on delivery. Restaurants wanted credit card support.</p>
            </div>
            <div className="flex w-full flex-col items-center text-center">
              <div className="rb-5 mb-5 md:mb-6">
                <QrCode className="size-12" strokeWidth={1.5} />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                No Pix
              </h3>
              <p>The most used digital payment method in Brazil, completely absent.</p>
            </div>
            <div className="flex w-full flex-col items-center text-center">
              <div className="rb-5 mb-5 md:mb-6">
                <ShoppingBag className="size-12" strokeWidth={1.5} />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                No pickup option
              </h3>
              <p>
                Customers had no way to place an order for pickup. For
                restaurants without their own delivery, that was a dealbreaker.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
