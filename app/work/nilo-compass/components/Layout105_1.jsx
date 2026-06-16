"use client";

import React from "react";

export function Layout105_1() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
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
              communicate value. It would just communicate absence. I proposed a
              different approach: show managers exactly what they were missing,
              in context. Where Nilo already had the necessary integrations
              running in the background, even with the module disabled, we
              surfaced real data in the preview. That was the most powerful
              scenario: the manager could see their actual numbers, not
              projections, and understand precisely what they were leaving on
              the table. Where real data wasn't available, we used projections
              to illustrate the potential. The principle was show, don't tell.
              And what started as a way to handle an incomplete contract
              scenario became a deliberate upsell opportunity built into the
              product itself. A manager seeing their own real operation data in
              a disabled module is a very different conversation than one
              receiving a sales prompt. This was my suggestion, and it became
              one of the more strategically significant features in the product.
            </p>
          </div>
        </div>
        <img
          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
          className="w-full object-cover"
          alt="Relume placeholder image"
        />
      </div>
    </section>
  );
}
