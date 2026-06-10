"use client";

import React from "react";
import { BookOpen, ShieldCheck } from "lucide-react";

export function Layout53() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">What we found</p>
            <h2 className="text-5xl font-bold md:text-7xl lg:text-8xl">
              The core problem wasn't the product. It was comprehension and
              trust.
            </h2>
          </div>
          <div>
            <p className="mb-6 md:mb-8 md:text-md">
              Most restaurants on the platform were small, informal businesses,
              not marketing teams with growth strategies. For them, a new
              digital tool meant risk, confusion, and one more thing to figure
              out. Among disengaged partners, two patterns kept coming up:
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 lg:grid-cols-2">
              <div className="flex">
                <div className="mr-4 flex-none self-start">
                  <BookOpen className="size-8" strokeWidth={1.5} />
                </div>
                <div>
                  <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">Comprehension gap</h6>
                  <p>
                    Restaurants didn't understand what the product was, how to
                    set it up, or how to promote it. The iFood branding in the
                    URL made their customers think they were ordering through
                    iFood, the opposite of what they wanted.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="mr-4 flex-none self-start">
                  <ShieldCheck className="size-8" strokeWidth={1.5} />
                </div>
                <div>
                  <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">Trust gap</h6>
                  <p>
                    They feared iFood would charge them eventually. Even when
                    they saw value in the product, that doubt was enough to
                    block adoption.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
