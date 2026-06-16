"use client";

import Image from "next/image";
import React from "react";

export function Layout105() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Solution</p>
            <h3 className="text-5xl font-bold leading-[1.2] md:text-7xl lg:text-8xl">
              Opinionated by design: data organized, interpreted, and ready to
              act on.
            </h3>
          </div>
          <div>
            <p className="mb-5 md:mb-4 md:text-md">
              Compass was built around the idea that a healthcare manager
              shouldn't have to think hard to understand their operation. Every
              design decision reinforced that principle. Data was organized into
              themed dashboards, not a blank canvas. Each theme had a curated
              set of metrics, pre-defined visualizations, and contextual signals
              that indicated whether a number was good, critical, or required
              attention. Managers didn't need to configure anything. They opened
              Compass and the picture was already there.
            </p>
          </div>
        </div>
        <Image
          src="/images/CompassHome.png"
          width={1600}
          height={900}
          className="w-full h-auto rounded-2xl object-cover"
          alt="Compass solution overview"
          quality={90}
        />
      </div>
    </section>
  );
}
