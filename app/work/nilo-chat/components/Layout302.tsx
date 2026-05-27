"use client";

import React from "react";
import { Eye, ClipboardList, AlertTriangle, Shield } from "lucide-react";

export function Layout302() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">Key Decisions</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              The decisions that mattered most
            </h2>
            <p className="md:text-md">
              Four decisions shaped the entire product:
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-4">
          <div>
            <div className="mb-5 md:mb-6">
              <Eye className="size-12 text-ebony-clay" strokeWidth={1.5} />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              Agent visibility
            </h3>
            <p>
              Full transparency for everyone. The patient always knows they're
              talking to Clara, an AI assistant. Naming the agent and giving her
              a persona actually increased trust instead of reducing it.
            </p>
          </div>
          <div>
            <div className="mb-5 md:mb-6">
              <ClipboardList className="size-12 text-ebony-clay" strokeWidth={1.5} />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              Audit tab
            </h3>
            <p>
              Made available and accessible, not mandatory — but designed to be
              hard to ignore. Without it, coordinators wouldn't approve AI in
              the first place. Trust is built through visibility.
            </p>
          </div>
          <div>
            <div className="mb-5 md:mb-6">
              <AlertTriangle className="size-12 text-ebony-clay" strokeWidth={1.5} />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              Where failure happens
            </h3>
            <p>
              When something fails, the patient receives a calm message that
              care will continue with a professional shortly. Honest without
              being alarming — the patient knows what's happening, just not why.
            </p>
          </div>
          <div>
            <div className="mb-5 md:mb-6">
              <Shield className="size-12 text-ebony-clay" strokeWidth={1.5} />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              Defining guardrails
            </h3>
            <p>
              Product defines the non-negotiable minimum. Clients configure
              within those limits, but can't go below them. Human life comes
              before operational efficiency — and that had to be coded into the
              product.
            </p>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap gap-4 md:mt-18 lg:mt-20" />
      </div>
    </section>
  );
}
