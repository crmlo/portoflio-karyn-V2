"use client";

import React from "react";

export function PortfolioHeader7() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start gap-12 md:mb-18 md:grid-cols-[1.5fr_1fr] lg:mb-20 lg:gap-x-20">
          <div>
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
              From raw data chaos to clarity: giving healthcare managers the
              data they didn't know they needed.
            </h1>
            <p className="md:text-md">
              Nilo already had a strong product for patient navigation and
              engagement. What was missing was a way for healthcare managers to
              understand what was actually happening in their operations.
              Compass was built to fill that gap: a structured, opinionated
              analytics product that turned a flood of ad-hoc data requests into
              a tool managers could use to make decisions and prove their own
              impact.
            </p>
            <div className="mt-5 flex flex-wrap gap-2 md:mt-6">
              <li className="flex">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener"
                  className="bg-background-secondary px-2 py-1 text-sm font-semibold"
                >
                  Product design
                </a>
              </li>
              <li className="flex">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener"
                  className="bg-background-secondary px-2 py-1 text-sm font-semibold"
                >
                  Data visualization
                </a>
              </li>
              <li className="flex">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener"
                  className="bg-background-secondary px-2 py-1 text-sm font-semibold"
                >
                  Healthcare
                </a>
              </li>
              <li className="flex">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener"
                  className="bg-background-secondary px-2 py-1 text-sm font-semibold"
                >
                  End-to-end design
                </a>
              </li>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">
                Nilo
              </h3>
              <p>Nilo Compass</p>
            </div>
            <div>
              <h3 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">
                2023/2024
              </h3>
              <p>11 months</p>
            </div>
            <div>
              <h3 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">
                Role
              </h3>
              <p>Solo designer</p>
            </div>
            <div>
              <h3 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">
                Tools
              </h3>
              <a href="#" target="_blank" rel="noopener" className="underline">
                Figma
              </a>
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
            className="w-full object-cover"
            alt="Relume placeholder image"
          />
        </div>
      </div>
    </section>
  );
}
