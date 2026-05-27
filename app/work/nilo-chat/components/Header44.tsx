"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header44() {
  return (
    <section id="relume" className="bg-malibu px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="w-full max-w-lg">
          <p className="mb-3 font-semibold text-white md:mb-4">Next</p>
          <h1 className="mb-5 text-6xl font-bold text-white md:mb-6 md:text-9xl lg:text-10xl">
            Want to see the full story?
          </h1>
          <p className="text-white md:text-md">
            This is a preview. The full case study goes deeper — complete
            interface walkthrough, the guardrails framework, agent memory
            constraints and how they shaped design decisions, every exception
            flow mapped, and the full reasoning behind each tradeoff. I walk
            through it all in live presentations. If this sparked your interest,
            I'd love to walk you through it.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
            <a href="https://wa.me/5519987653205" target="_blank" rel="noopener noreferrer">
              <Button title="WhatsApp">WhatsApp</Button>
            </a>
            <a href="mailto:karyn.loreyne@gmail.com">
              <Button title="Email" variant="secondary">
                Email
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
