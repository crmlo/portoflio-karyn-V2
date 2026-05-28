"use client";

import React from "react";
import Image from "next/image";

export function Layout149_1() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="mb-12 md:mb-18 lg:mb-20">
            <div className="mx-auto flex max-w-lg flex-col items-center text-center">
              <p className="mb-3 font-semibold md:mb-4">Coordinator</p>
              <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                Audit tab
              </h2>
              <p className="mb-5 md:mb-6 md:text-md">
                Conversation management with full agent visibility. Timeline,
                Clara identification, AI-generated topic summary, and one-click
                takeover control at any moment.
              </p>
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/images/Auditoria.png"
            alt="Audit tab interface"
            width={1600}
            height={900}
            className="w-full h-auto rounded-2xl"
            quality={90}
          />
        </div>
      </div>
    </section>
  );
}
