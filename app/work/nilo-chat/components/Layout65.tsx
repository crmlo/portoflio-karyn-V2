"use client";

import React from "react";
import { MessageCircle } from "lucide-react";

export function Layout65() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-5 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Insights</p>
            <h2 className="text-5xl font-bold md:text-7xl lg:text-8xl">
              I went in to map scenarios. I came out with a completely different
              problem to solve.
            </h2>
          </div>
          <div>
            <p className="mb-5 md:mb-6 md:text-md">
              What I found had nothing to do with features or workflows. The
              real concern was trust and control, and that reframed the entire
              project. We already knew the technical potential and the safety of
              the system. What was missing was translating that into an
              interface that created a safety net for the people making the
              decisions. The audit tab, the agent performance view, the feedback
              system, the handoff briefing — each of these directly addressed a
              specific trust need, and together they became the unlock for value
              we hadn't even anticipated.
            </p>
            <ul className="grid grid-cols-1 gap-4 py-2">
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <MessageCircle className="size-6 text-ebony-clay" strokeWidth={1.5} />
                </div>
                <p>
                  "If the agent says something wrong to a patient, who answers
                  for that?" - Care coordinator, Grupo Fleury
                </p>
              </li>
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <MessageCircle className="size-6 text-ebony-clay" strokeWidth={1.5} />
                </div>
                <p>
                  "How do I know what the agent is doing while I'm handling
                  other patients?" - Nurse, Grupo Fleury
                </p>
              </li>
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <MessageCircle className="size-6 text-ebony-clay" strokeWidth={1.5} />
                </div>
                <p>
                  "How can I keep track of the agent and take over if
                  necessary?" - Nurse, Grupo Fleury
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
