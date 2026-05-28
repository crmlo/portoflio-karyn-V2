"use client";

import React from "react";
import { Compass, Layers, Pen } from "lucide-react";

export function Layout241() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28" style={{ backgroundColor: "#F3F5FF" }}>
      <div className="container">
        <div className="flex flex-col">
          <div className="rb-12 mb-12 md:mb-18 lg:mb-20">
            <div className="w-full max-w-lg">
              <p className="mb-3 font-semibold md:mb-4">How I work</p>
              <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                Don't start with screens. Start with the problem.
              </h2>
              <p className="md:text-md">
                Good design solves the right problem at the right level. That
                means understanding the user, the business context, and the
                constraints before anything gets drawn. Structure comes first.
                Screens come after.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div className="flex w-full flex-col">
              <div className="mb-5 md:mb-6">
                <Compass className="size-12" strokeWidth={1.5} />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Strategy & Research
              </h3>
              <p>
                Every project gets the research it actually needs. Sometimes
                that's a full discovery sprint with interviews and synthesis.
                Sometimes it's a focused audit. The goal is always the same:
                understand the real problem before proposing anything.
              </p>
            </div>
            <div className="flex w-full flex-col">
              <div className="mb-5 md:mb-6">
                <Layers className="size-12" strokeWidth={1.5} />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Systems & Scale
              </h3>
              <p>
                Good design anticipates what comes next. Every component, flow,
                and decision is made with future complexity in mind, so the
                product can grow without having to be rebuilt from scratch.
              </p>
            </div>
            <div className="flex w-full flex-col">
              <div className="mb-5 md:mb-6">
                <Pen className="size-12" strokeWidth={1.5} />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Craft & Delivery
              </h3>
              <p>
                The best interfaces are the ones users don't notice. Close
                collaboration with engineering, AI-assisted workflows, and
                attention to detail that makes the experience feel effortless
                rather than designed.
              </p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8" />
        </div>
      </div>
    </section>
  );
}
