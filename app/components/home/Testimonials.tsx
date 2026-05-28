"use client";

import React, { useState } from "react";
import { RxChevronLeft, RxChevronRight } from "react-icons/rx";

const testimonials = [
  {
    quote:
      "We're flagging errors to help the agent improve, but please don't turn it off — it's already making our work so much easier.",
    author: "Nursing team, Grupo Fleury",
    context: "Weeks after launch",
  },
  {
    quote:
      "Karyn has a rare ability to translate complexity into clarity. She held the vision across the whole project and made sure everyone — from engineers to execs — stayed aligned.",
    author: "Product Lead",
    context: "Nilo Health",
  },
  {
    quote:
      "What stood out was how fast she moved without cutting corners. We went from zero to a live product in four months, and the quality was there from day one.",
    author: "Growth team",
    context: "iFood",
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  const visible = [
    testimonials[current % total],
    testimonials[(current + 1) % total],
  ];

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Testimonials</p>
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            What they say about working with me.
          </h2>
          <p className="md:text-md">
            Straight from the people I've built with.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-x-8 lg:gap-x-12">
          {visible.map((t, i) => (
            <div key={i} className="flex flex-col border border-border-primary p-8 md:p-10">
              <blockquote className="flex-1 text-md font-bold leading-[1.4]">
                "{t.quote}"
              </blockquote>
              <div className="mt-6 border-t border-border-primary pt-6">
                <p className="font-semibold">{t.author}</p>
                <p className="text-sm text-neutral-500">{t.context}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between md:mt-10">
          <div className="flex gap-2">
            {Array.from({ length: total }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 w-2 rounded-full transition-colors ${
                  i === current ? "bg-black" : "bg-neutral-300"
                }`}
              />
            ))}
          </div>
          <div className="flex gap-3">
            <button
              onClick={prev}
              aria-label="Previous"
              className="flex size-12 items-center justify-center border border-border-primary transition-colors hover:bg-background-secondary"
            >
              <RxChevronLeft className="size-5" />
            </button>
            <button
              onClick={next}
              aria-label="Next"
              className="flex size-12 items-center justify-center border border-border-primary transition-colors hover:bg-background-secondary"
            >
              <RxChevronRight className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
