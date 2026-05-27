"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";

export function Layout65_1() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-5 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">
              What's not shown here. The complete documentation is available in
              the full presentation.
            </p>
            <h2 className="text-5xl font-bold md:text-7xl lg:text-8xl">
              There's more craft under the hood.
            </h2>
          </div>
          <div>
            <ul className="grid grid-cols-1 gap-4 py-2">
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <CheckCircle2 className="size-6 text-ebony-clay" strokeWidth={1.5} />
                </div>
                <p>
                  Guardrails framework: defining what the agent does
                  autonomously, what triggers a fallback, and what it never
                  handles alone
                </p>
              </li>
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <CheckCircle2 className="size-6 text-ebony-clay" strokeWidth={1.5} />
                </div>
                <p>
                  Agent memory constraints: designing around the fact that Clara
                  has no longitudinal memory, and how that shaped every
                  interaction pattern
                </p>
              </li>
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <CheckCircle2 className="size-6 text-ebony-clay" strokeWidth={1.5} />
                </div>
                <p>
                  Exception flows: latency, LLM downtime, critical handoffs,
                  each with its own intentional visual language
                </p>
              </li>
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <CheckCircle2 className="size-6 text-ebony-clay" strokeWidth={1.5} />
                </div>
                <p>
                  Feedback loop system: how coordinators rate agent performance
                  and how that feeds back into model improvement
                </p>
              </li>
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <CheckCircle2 className="size-6 text-ebony-clay" strokeWidth={1.5} />
                </div>
                <p>
                  Capabilities table: the full map of topics, autonomy levels,
                  agent behaviors, and triggers
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
