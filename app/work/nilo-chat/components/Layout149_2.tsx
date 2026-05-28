"use client";

import React from "react";
import Image from "next/image";

export function Layout149_2() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="mb-12 md:mb-18 lg:mb-20">
            <div className="mx-auto flex max-w-lg flex-col items-center text-center">
              <p className="mb-3 font-semibold md:mb-4">System</p>
              <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                Exception flows
              </h2>
              <p className="mb-5 md:mb-6 md:text-md">
                Every failure scenario mapped and designed with intention. Agent
                latency, LLM downtime, human handoff — each with its own visual
                language so the professional always knows what they're walking
                into before they say a word to the patient.
              </p>
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/images/Latencia.png"
            alt="Exception flows"
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
