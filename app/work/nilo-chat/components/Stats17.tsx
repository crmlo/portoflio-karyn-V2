"use client";

import React from "react";

export function Stats17() {
  return (
    <section id="relume" className="bg-black px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-y-12 lg:grid-cols-2 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold text-text-alternative md:mb-4">
              Pilot · Grupo Fleury · 4 months
            </p>
            <h2 className="mb-5 text-5xl font-bold text-text-alternative md:mb-6 md:text-7xl lg:text-8xl">
              Results
            </h2>
            <p className="text-text-alternative md:text-md">
              After two months of active pilot, the agent moved from part-time
              monitoring to full business hours — and Fleury expanded to 24/7
              shortly after. The numbers spoke for themselves, and other clients
              followed.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-y-8 py-2 md:grid-cols-2 md:gap-x-8 md:gap-y-12">
            <div className="border-l-2 border-border-alternative pl-8">
              <p className="mb-2 text-10xl font-bold leading-[1.3] text-text-alternative md:text-[4rem] lg:text-[5rem]">
                96%
              </p>
              <h3 className="text-md font-bold leading-[1.4] text-text-alternative md:text-xl">
                Reduction in human triage requests
              </h3>
            </div>
            <div className="border-l-2 border-border-alternative pl-8">
              <p className="mb-2 text-10xl font-bold leading-[1.3] text-text-alternative md:text-[4rem] lg:text-[5rem]">
                4h
              </p>
              <h3 className="text-md font-bold leading-[1.4] text-text-alternative md:text-xl">
                Freed per professional daily
              </h3>
            </div>
            <div className="border-l-2 border-border-alternative pl-8">
              <p className="mb-2 text-10xl font-bold leading-[1.3] text-text-alternative md:text-[4rem] lg:text-[5rem]">
                240
              </p>
              <h3 className="text-md font-bold leading-[1.4] text-text-alternative md:text-xl">
                Daily conversations handled by Clara - Only 10 reached the team
              </h3>
            </div>
            <div className="border-l-2 border-border-alternative pl-8">
              <p className="mb-2 text-10xl font-bold leading-[1.3] text-text-alternative md:text-[4rem] lg:text-[5rem]">
                24/7
              </p>
              <h3 className="text-md font-bold leading-[1.4] text-text-alternative md:text-xl">
                Continuous care - previously business hours only
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
