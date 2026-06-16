"use client";

import Image from "next/image";
import React from "react";

export function Layout105_1() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28" style={{ backgroundColor: "#F3F5FF" }}>
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Pivots and decisions</p>
            <h3 className="text-5xl font-bold leading-[1.2] md:text-7xl lg:text-8xl">
              Not every client had every module. So we designed for both
              realities.
            </h3>
          </div>
          <div>
            <p className="mb-5 md:mb-4 md:text-md">
              A significant portion of Nilo's clients used the full product
              suite, but the share that had partial contracts wasn't small
              enough to ignore. Compass had to work well for both. For clients
              with inactive modules, a generic "upgrade" banner wasn't going to
              communicate value. It would just communicate absence.
            </p>
            <p className="md:text-md">
              I proposed a different approach: show managers exactly what they
              were missing, in context. Where Nilo already had the necessary
              integrations running in the background, even with the module
              disabled, we surfaced real data in the preview. The manager could
              see their actual numbers, not projections, and understand precisely
              what they were leaving on the table. What started as a way to
              handle an incomplete contract scenario became a deliberate upsell
              opportunity built into the product itself.
            </p>
          </div>
        </div>
        <Image
          src="/images/placeholder.jpg"
          width={1600}
          height={900}
          className="w-full h-auto rounded-2xl object-cover"
          alt="Module preview design"
          quality={90}
        />
      </div>
    </section>
  );
}
