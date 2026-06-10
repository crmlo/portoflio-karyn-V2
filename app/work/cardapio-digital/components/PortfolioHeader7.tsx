"use client";

import Image from "next/image";
import React from "react";

export function PortfolioHeader7() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start gap-12 md:mb-18 md:grid-cols-[1.5fr_1fr] lg:mb-20 lg:gap-x-20">
          <div>
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
              How deep research turned a stalling launch into 2 million orders.
            </h1>
            <p className="md:text-md">
              A white-label digital menu built within the iFood ecosystem,
              designed to let restaurants capture their off-platform orders. The
              product grew from 172k to 2 million orders monthly after research
              revealed what restaurants actually needed.
            </p>
            <ul className="mt-5 flex flex-wrap gap-2 md:mt-6">
              <li className="flex list-none">
                <span className="bg-background-secondary px-2 py-1 text-sm font-semibold">Product design</span>
              </li>
              <li className="flex list-none">
                <span className="bg-background-secondary px-2 py-1 text-sm font-semibold">UX research</span>
              </li>
              <li className="flex list-none">
                <span className="bg-background-secondary px-2 py-1 text-sm font-semibold">End-to-end Design</span>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">Company</h3>
              <p>iFood</p>
            </div>
            <div>
              <h3 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">Duration</h3>
              <p>10 months</p>
            </div>
            <div>
              <h3 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">Role</h3>
              <p>Product Designer, UX Designer.</p>
            </div>
            <div>
              <h3 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">Tools</h3>
              <p>Figma, Amplitude, Hotjar, Survey Monkey.</p>
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/images/cardapio-digital.jpg"
            alt="iFood Cardápio Digital case study hero"
            width={1600}
            height={900}
            className="w-full h-auto rounded-2xl object-cover"
            quality={90}
            priority
          />
        </div>
      </div>
    </section>
  );
}
