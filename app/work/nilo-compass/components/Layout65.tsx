"use client";

import React from "react";

export function Layout65() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-5 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Context</p>
            <h2 className="text-5xl font-bold md:text-7xl lg:text-8xl">
              Nilo had the data. No one knew how to use it.
            </h2>
          </div>
          <div>
            <p className="mb-5 md:mb-6 md:text-md">
              Nilo's core products covered patient navigation and engagement
              well. But the data layer for management didn't exist in any
              structured way. Healthcare managers who wanted visibility into
              their operations had to ask the Customer Success team to pull
              reports from Metabase. Manually. Every time. Over time, the CS
              team noticed patterns: some requests came up constantly, others
              made little sense but no one questioned them. And the managers
              themselves often couldn't articulate what they actually needed.
              They asked for data because they knew data existed, not because
              they had a clear question to answer. The result was a system where
              everyone was busy but no one was better informed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
