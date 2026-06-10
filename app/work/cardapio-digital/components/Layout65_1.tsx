"use client";

import React from "react";
import { CheckCircle } from "lucide-react";

export function Layout65_1() {
  return (
    <section className="bg-black px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-5 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold text-white/60 md:mb-4">Results</p>
            <h2 className="text-5xl font-bold text-white md:text-7xl lg:text-8xl">
              From 172k to 2MM orders in four months.
            </h2>
          </div>
          <div>
            <p className="mb-5 text-white/80 md:mb-6 md:text-md">
              By January 2022, roughly four months after the research was
              completed and the first improvements shipped, Cardápio Digital had
              reached 2MM orders placed. That's more than 10x the volume we had
              in September. We hadn't hit the March goal of 3MM yet, but the
              growth curve had changed completely. The team knew we were on the
              right track. I followed the product through March 2022, when I
              left the project.
            </p>
            <ul className="grid grid-cols-1 gap-4 py-2">
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start text-white">
                  <CheckCircle className="size-6" strokeWidth={1.5} />
                </div>
                <p className="text-white/80">Sep/21: 12k active restaurants, 172k orders</p>
              </li>
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start text-white">
                  <CheckCircle className="size-6" strokeWidth={1.5} />
                </div>
                <p className="text-white/80">Jan/22: 2MM orders placed</p>
              </li>
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start text-white">
                  <CheckCircle className="size-6" strokeWidth={1.5} />
                </div>
                <p className="text-white/80">
                  Research scale: 22 qualitative interviews + 13,944 survey
                  respondents
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
