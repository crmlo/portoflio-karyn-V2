"use client";

import React from "react";

export function Layout1_2() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Patient</p>
            <h1 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              WhatsApp
            </h1>
            <p className="md:text-md">
              Entry point with no install, no friction. Reminders, campaigns,
              health questionnaires, and care requests all via WhatsApp.
              Clinical consultations happen via video call inside the Nilo
              platform.
            </p>
          </div>
          <div>
            <img
              src="/images/ChatAi_WhatsApp.gif"
              className="w-full h-auto max-h-[600px] object-contain rounded-2xl"
              alt="WhatsApp patient surface"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
