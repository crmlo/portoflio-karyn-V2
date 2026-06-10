"use client";

import Image from "next/image";
import React from "react";

export function Layout13() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Opportunity</p>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              A 29-million-order market hiding in plain sight
            </h2>
            <p className="mb-5 md:mb-6 md:text-md">
              iFood's partner restaurants were already selling outside the
              platform, through WhatsApp, phone calls, and social media. iFood
              saw an addressable market of approximately 29 million orders per
              year and built Cardápio Digital to capture it: a free, white-label
              tool that gave restaurants their own digital menu and ordering
              channel, with no commission on the first 100 orders per month. The
              value proposition was strong on paper. The challenge was making
              restaurants see it the same way.
            </p>
          </div>
          <div>
            <Image
              src="/images/placeholder.jpg"
              width={800}
              height={600}
              className="w-full h-auto rounded-2xl object-cover"
              alt="Market opportunity"
              quality={90}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
