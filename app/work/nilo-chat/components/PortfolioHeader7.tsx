"use client";

import React from "react";
import Image from "next/image";

export function PortfolioHeader7() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start gap-12 md:mb-18 md:grid-cols-[1.5fr_1fr] lg:mb-20 lg:gap-x-20">
          <div>
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
              Redesigning the core of a healthcare platform that cut human
              triage by 96%.
            </h1>
            <p className="md:text-md">
              From a manual chat tool to an AI-powered platform, serving 3.5
              million patients, 24/7.
            </p>
            <div className="mt-5 flex flex-wrap gap-2 md:mt-6">
              <li className="flex list-none">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener"
                  className="bg-background-secondary px-2 py-1 text-sm font-semibold"
                >
                  Healthcare
                </a>
              </li>
              <li className="flex list-none">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener"
                  className="bg-background-secondary px-2 py-1 text-sm font-semibold"
                >
                  Conversational UI
                </a>
              </li>
              <li className="flex list-none">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener"
                  className="bg-background-secondary px-2 py-1 text-sm font-semibold"
                >
                  AI Agents
                </a>
              </li>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">
                Company
              </h3>
              <p>Nilo</p>
            </div>
            <div>
              <h3 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">
                Duration
              </h3>
              <p>6 months (4 design + build · 2 pilot monitoring) - 2025</p>
            </div>
            <div>
              <h3 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">
                Team
              </h3>
              <p>Sales · Product · Full Stack Engineer · Product Designer</p>
            </div>
            <div>
              <h3 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">
                Tools
              </h3>
              <p>Figma · Figma Make · Claude · ChatGPT</p>
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/images/ChatAI_Hero.png"
            alt="Nilo Chat case study hero"
            width={1600}
            height={900}
            className="w-full h-auto rounded-2xl"
            quality={90}
            priority
          />
        </div>
      </div>
    </section>
  );
}
