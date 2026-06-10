"use client";

import React from "react";

export function Layout47() {
  return (
    <section className="bg-[#F3F5FF] px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">The research</p>
            <h2 className="text-5xl font-bold md:text-7xl lg:text-8xl">
              Understanding the gap between signing up and actually using the
              product.
            </h2>
          </div>
          <div>
            <p className="mb-6 md:mb-8 md:text-md">
              A two-phase study that moved from individual stories to patterns
              across more than 13,000 restaurants.
            </p>
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 py-2 sm:grid-cols-2">
              <div>
                <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">Qualitative</h6>
                <p>
                  22 interviews · 11 engaged, 11 disengaged. We talked to
                  partners on both sides of the adoption gap to understand what
                  motivated or blocked them. The goal was to find patterns, not
                  just complaints.
                </p>
              </div>
              <div>
                <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">Quantitative</h6>
                <p>
                  13,944 respondents. Built directly from what the qualitative
                  revealed. This is where we measured the real scale:
                  comprehension gaps, behavior vs. perception, and which feature
                  gaps were blocking adoption across the broader base.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
