"use client";

import React from "react";
import Image from "next/image";

export function Content2() {
  return (
    <section id="relume" style={{ backgroundColor: "#1B1B1C" }} className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div>
            <Image
              src="/images/MarketProblem.png"
              alt="The market problem"
              width={800}
              height={600}
              className="w-full h-auto rounded-2xl"
            />
          </div>
          <div>
            <h2 className="rb-5 mb-5 text-5xl font-bold text-white md:mb-6 md:text-7xl lg:text-8xl">
              The market problem
            </h2>
            <div className="prose prose-invert">
              <div>
                <p className="text-white">
                  Healthcare in Brazil is facing a structural equation with no
                  easy solution. Demand keeps growing. Margins keep shrinking.
                  Payroll represents more than half of operational costs — so
                  scaling care means hiring more people, and that cycle never
                  stops.
                </p>
                <p className="text-white">
                  Nilo&apos;s bet: use AI to break this equation — specifically
                  in triage and scheduling, the highest-volume, most repetitive
                  interactions in the entire care journey. Prove it works here,
                  and everything else becomes easier to build and sell.
                </p>
                <p className="text-white">
                  The entry point was clear: the Chat. It was already the
                  infrastructure connecting patients and care teams. Introducing
                  AI agents here meant the impact would be immediate and
                  measurable without rebuilding the entire platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
