"use client";

import React from "react";

export function Layout65() {
  return (
    <section className="bg-black px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-5 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold text-white/60 md:mb-4">The problem that research uncovered</p>
            <h2 className="text-5xl font-bold text-white md:text-7xl lg:text-8xl">
              The product launched. Three months later, we still didn't know why
              it wasn't working.
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-white/80 md:text-md">
              The launch happened on schedule. But three months in, the numbers
              were well below expectations. We had 12k active restaurants and
              172k orders placed, against a goal of 200k orders by that point,
              on a path toward 3MM by March 2022. The team's first instinct was
              to push harder: more calls to restaurants, more outreach, more
              follow-up. We spent about a month doing exactly that. It generated
              some data, but nothing deep enough to explain the real friction.
            </p>
            <p className="text-white/80 md:text-md">
              What we were missing wasn't effort. It was understanding. We
              didn't have a clear picture of who our restaurants actually were,
              how they operated outside iFood, whether they had understood what
              the product did, or why they were hesitant to adopt something that
              was, for most of them, completely free. That's when my colleague
              and I proposed doing it properly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
