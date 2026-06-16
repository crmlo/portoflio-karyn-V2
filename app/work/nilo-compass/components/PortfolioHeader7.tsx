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
              From raw data chaos to clarity: giving healthcare managers the
              data they didn't know they needed.
            </h1>
            <p className="mb-4 md:text-md">
              Nilo already had a strong product for patient navigation and
              engagement. What was missing was a way for healthcare managers to
              understand what was actually happening in their operations.
            </p>
            <p className="md:text-md">
              Compass was built to fill that gap: a structured, opinionated
              analytics product that turned a flood of ad-hoc data requests into
              a tool managers could use to make decisions and prove their own
              impact.
            </p>
            <ul className="mt-5 flex flex-wrap gap-2 md:mt-6">
              <li className="flex list-none">
                <span className="bg-background-secondary px-2 py-1 text-sm font-semibold">Information Architecture</span>
              </li>
              <li className="flex list-none">
                <span className="bg-background-secondary px-2 py-1 text-sm font-semibold">Data visualization</span>
              </li>
              <li className="flex list-none">
                <span className="bg-background-secondary px-2 py-1 text-sm font-semibold">End-to-end design</span>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">Company</h3>
              <p>Nilo</p>
            </div>
            <div>
              <h3 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">Duration</h3>
              <p>11 months</p>
            </div>
            <div>
              <h3 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">Role</h3>
              <p>Solo designer</p>
            </div>
            <div>
              <h3 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">Tools</h3>
              <p>Figma</p>
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/images/nilo-compass.jpg"
            alt="Nilo Compass case study hero"
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
