"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Portfolio16() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 max-w-lg md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Selected Work</p>
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Work that shipped and made a difference.
          </h2>
          <p className="md:text-md">
            End-to-end projects where strategy, execution, and measurable impact
            came together.
          </p>
        </div>
        <div>
          <article className="grid grid-cols-1 items-center gap-x-12 gap-y-6 border-t border-border-primary py-8 md:grid-cols-2 md:gap-y-0 lg:gap-x-[5rem] lg:py-12">
            <div>
              <a href="/work/nilo-chat" className="flex aspect-[4/3] w-full overflow-hidden rounded-2xl">
                <img
                  src="/images/ChatAI thumblr.png"
                  alt="Nilo Chat AI redesign"
                  className="w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </a>
            </div>
            <div>
              <h3 className="mb-2 text-2xl font-bold md:text-3xl md:leading-[1.3] lg:text-4xl">
                <a href="/work/nilo-chat">Nilo | Chat AI redesign</a>
              </h3>
              <p>
                Redesigning a healthcare platform's core product for the age of
                AI agents, and cutting human triage by 96%.
              </p>
              <ul className="mt-3 flex flex-wrap gap-2 md:mt-4">
                <li className="flex">
                  <span className="bg-background-secondary px-2 py-1 text-sm font-semibold">Healthcare</span>
                </li>
                <li className="flex">
                  <span className="bg-background-secondary px-2 py-1 text-sm font-semibold">Conversational UI</span>
                </li>
                <li className="flex">
                  <span className="bg-background-secondary px-2 py-1 text-sm font-semibold">AI agents</span>
                </li>
              </ul>
              <Button title="View" variant="link" size="link" iconRight={<RxChevronRight />} className="mt-6 md:mt-8" asChild>
                <a href="/work/nilo-chat">View</a>
              </Button>
            </div>
          </article>
          <article className="grid grid-cols-1 items-center gap-x-12 gap-y-6 border-t border-border-primary py-8 md:grid-cols-2 md:gap-y-0 lg:gap-x-[5rem] lg:py-12">
            <div>
              <a href="/work/cardapio-digital" className="flex aspect-[4/3] w-full overflow-hidden rounded-2xl">
                <img
                  src="/images/cardapio-digital.jpg"
                  alt="iFood Cardápio Digital"
                  className="w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </a>
            </div>
            <div>
              <h3 className="mb-2 text-2xl font-bold md:text-3xl md:leading-[1.3] lg:text-4xl">
                <a href="/work/cardapio-digital">iFood | Cardápio Digital</a>
              </h3>
              <p>
                Taking a new product from zero to 400k orders a month in four
                months, through research, conversion testing, and relentless
                iteration.
              </p>
              <ul className="mt-3 flex flex-wrap gap-2 md:mt-4">
                <li className="flex">
                  <span className="bg-background-secondary px-2 py-1 text-sm font-semibold">Food delivery</span>
                </li>
                <li className="flex">
                  <span className="bg-background-secondary px-2 py-1 text-sm font-semibold">Growth</span>
                </li>
                <li className="flex">
                  <span className="bg-background-secondary px-2 py-1 text-sm font-semibold">UX Research</span>
                </li>
              </ul>
              <Button title="View" variant="link" size="link" iconRight={<RxChevronRight />} className="mt-6 md:mt-8" asChild>
                <a href="/work/cardapio-digital">View</a>
              </Button>
            </div>
          </article>
          <article className="grid grid-cols-1 items-center gap-x-12 gap-y-6 border-t border-border-primary py-8 md:grid-cols-2 md:gap-y-0 lg:gap-x-[5rem] lg:py-12">
            <div>
              <a href="/work/nilo-compass" className="flex aspect-[4/3] w-full overflow-hidden rounded-2xl">
                <img
                  src="/images/Compass_thumblr.jpg"
                  alt="Nilo Compass"
                  className="w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </a>
            </div>
            <div>
              <h3 className="mb-2 text-2xl font-bold md:text-3xl md:leading-[1.3] lg:text-4xl">
                <a href="/work/nilo-compass">Nilo | Compass</a>
              </h3>
              <p>
                A data intelligence platform built around the real decisions
                healthcare managers need to make every day.
              </p>
              <ul className="mt-3 flex flex-wrap gap-2 md:mt-4">
                <li className="flex">
                  <span className="bg-background-secondary px-2 py-1 text-sm font-semibold">Healthcare</span>
                </li>
                <li className="flex">
                  <span className="bg-background-secondary px-2 py-1 text-sm font-semibold">Data visualization</span>
                </li>
                <li className="flex">
                  <span className="bg-background-secondary px-2 py-1 text-sm font-semibold">Dashboard</span>
                </li>
              </ul>
              <Button title="View" variant="link" size="link" iconRight={<RxChevronRight />} className="mt-6 md:mt-8" asChild>
                <a href="/work/nilo-compass">View</a>
              </Button>
            </div>
          </article>
        </div>
        <div className="mt-12 flex justify-center md:mt-18 lg:mt-20" />
      </div>
    </section>
  );
}
