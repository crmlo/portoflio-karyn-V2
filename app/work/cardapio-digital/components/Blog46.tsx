"use client";

import Image from "next/image";
import React from "react";

export function Blog46() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Product evolution</p>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              The research didn't just answer questions. It rewrote the roadmap.
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8 lg:gap-x-12">
          <div className="flex size-full flex-col items-start justify-start text-start">
            <div className="mb-6 w-full">
              <Image
                src="/images/V1.png"
                width={800}
                height={450}
                alt="V1 product"
                className="aspect-video w-full object-cover rounded-2xl"
                quality={90}
              />
            </div>
            <p className="mb-2 text-xl font-bold md:text-2xl">
              The V1 I inherited covered the core ordering flow: menu browsing,
              cart, and basic checkout. What the research made clear was how
              much was missing for restaurants to actually run their business
              through it.
            </p>
          </div>
          <div className="flex size-full flex-col items-start justify-start text-start">
            <div className="mb-6 w-full">
              <Image
                src="/images/V2.png"
                width={800}
                height={450}
                alt="V2 product"
                className="aspect-video w-full object-cover rounded-2xl"
                quality={90}
              />
            </div>
            <p className="mb-2 text-xl font-bold md:text-2xl">
              The V2 we built from those findings was a substantially
              different product. New flows included address handling and
              pickup options, a full catalog and checkout redesign, payment
              methods (Pix, credit card, cash on delivery), iFood account
              authentication, order tracking, and a series of UX improvements
              flagged in the heuristic analysis. It wasn't an iteration. It
              was a rebuild grounded in what we now knew.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
