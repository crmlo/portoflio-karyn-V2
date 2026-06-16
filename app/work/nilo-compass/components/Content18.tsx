"use client";

import Image from "next/image";
import React from "react";

export function Content18() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28" style={{ backgroundColor: "#F3F5FF" }}>
      <div className="container">
        <div className="mb-12 grid grid-cols-1 gap-5 md:mb-18 md:grid-cols-[1fr_1.5fr] md:gap-x-12 lg:mb-20 lg:gap-x-20">
          <div>
            <h3 className="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl">
              From the big picture to the finest detail, in the same tool.
            </h3>
          </div>
          <div className="flex flex-col gap-4">
            <p className="md:text-md">
              Compass was structured around 11 use cases, each mapping a
              cluster of related metrics and indicators. Managers could
              navigate between high-level overviews and drill into specific
              dimensions without losing context.
            </p>
            <p className="md:text-md">
              The product was designed to serve two modes of work: a quick
              daily check-in and a deep analytical session, both in the same
              interface.
            </p>
            <p className="md:text-md">
              Every visualization carried status signals — not just numbers, but
              interpretations. Green meant on track. Red meant action required.
              The goal was to reduce the cognitive load of monitoring an entire
              healthcare operation to something a manager could handle without
              external help.
            </p>
          </div>
        </div>
        <div>
          <Image
            src="/images/Granularidade.png"
            width={1600}
            height={900}
            className="w-full h-auto rounded-2xl object-cover"
            alt="Compass granularity and detail view"
            quality={90}
          />
        </div>
      </div>
    </section>
  );
}
