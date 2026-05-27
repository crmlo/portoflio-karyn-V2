"use client";

import React from "react";
import { Building2, Stethoscope, User } from "lucide-react";

export function Layout241() {
  return (
    <section id="relume" className="bg-malibu-lightest px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col">
          <div className="rb-12 mb-12 md:mb-18 lg:mb-20">
            <div className="w-full max-w-lg">
              <p className="mb-3 font-semibold md:mb-4">Problem</p>
              <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                Three users. One system. Very different needs, and very
                different fears.
              </h2>
              <p className="md:text-md">
                The Chat already existed. It was built for manual, one-on-one
                interactions. Introducing AI agents meant rethinking an
                experience that professionals already relied on every day. These
                three tensions were present in every single decision made
                throughout the project.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div className="flex w-full flex-col">
              <div className="mb-5 md:mb-6">
                <Building2 className="size-12 text-ebony-clay" strokeWidth={1.5} />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Business want to scale care without growing the team
              </h3>
              <p>
                Fear: operational risk and liability. Tension: more autonomy for
                the agent means less control over outcomes.
              </p>
            </div>
            <div className="flex w-full flex-col">
              <div className="mb-5 md:mb-6">
                <Stethoscope className="size-12 text-ebony-clay" strokeWidth={1.5} />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Healthcare Professional have to focus on cases that need real
                clinical attention
              </h3>
              <p>
                Fear: losing control and being responsible for the agent's
                mistakes. Tension: trusting the agent frees up time — but what
                if it makes a mistake?
              </p>
            </div>
            <div className="flex w-full flex-col">
              <div className="mb-5 md:mb-6">
                <User className="size-12 text-ebony-clay" strokeWidth={1.5} />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Patient need fast, empathetic care, available anytime.
              </h3>
              <p>
                Fear: being stuck with a bot that can't actually help and never
                reaching a real person. Tension: 24/7 availability sounds great
                — but what if the agent can't solve the problem and there's no
                way out?
              </p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8" />
        </div>
      </div>
    </section>
  );
}
