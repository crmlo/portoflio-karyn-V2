"use client";

import React from "react";
import Image from "next/image";

export function Layout149_3() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="mb-12 md:mb-18 lg:mb-20">
            <div className="mx-auto flex max-w-lg flex-col items-center text-center">
              <p className="mb-3 font-semibold md:mb-4">Agent</p>
              <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                Handoff briefing
              </h2>
              <p className="mb-5 md:mb-6 md:text-md">
                When Clara identifies that a conversation needs a human, she
                doesn't just transfer it. She generates a briefing directly in
                the conversation timeline — the exact reason for the handoff,
                the message that triggered it. The professional starts informed,
                not from zero. In critical situations like suicidal ideation,
                getting context fast can change the outcome entirely.
              </p>
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/images/Handoff.png"
            alt="Handoff briefing"
            width={1600}
            height={900}
            className="w-full h-auto rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
