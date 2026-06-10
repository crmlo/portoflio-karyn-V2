"use client";

import Image from "next/image";
import React from "react";

export function Layout105() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Pre-launch: Validating the positioning</p>
            <h3 className="text-5xl font-bold leading-[1.2] md:text-7xl lg:text-8xl">
              Before we launched, we tested how to talk about it
            </h3>
          </div>
          <div>
            <p className="mb-5 md:mb-4 md:text-md">
              One of the first questions we faced wasn't about the product
              itself, but it was about how to position it. We ran a fake door
              A/B test on the acquisition landing page to understand what would
              drive restaurant sign-ups. Version A led with the product's free
              nature: no fees, no commissions. Version B led with the pain it
              solved: replacing the chaos of managing orders through WhatsApp
              and phone. The results were close. A performed slightly better, so
              we used it as the hero message. But the gap was narrow enough that
              we didn't discard B — we kept its framing and wove it into the
              rest of the page. Both angles were resonating. We just needed to
              know which one to lead with.
            </p>
          </div>
        </div>
        <Image
          src="/images/A-B.png"
          width={1600}
          height={900}
          className="w-full h-auto rounded-2xl object-cover"
          alt="A/B test landing page"
          quality={90}
        />
      </div>
    </section>
  );
}
