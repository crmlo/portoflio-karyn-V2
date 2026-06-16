"use client";

import React from "react";

export function Stats17() {
  return (
    <section className="bg-black px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-y-12 lg:grid-cols-2 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold text-white/60 md:mb-4">
              Results
            </p>
            <h2 className="mb-5 text-5xl font-bold text-white md:mb-6 md:text-7xl lg:text-8xl">
              Managers stopped asking for data because they already had it.
            </h2>
            <p className="mb-4 text-white/80 md:text-md">
              Within the first few months of Compass running at full capacity,
              the volume of ad-hoc data requests to the CS team dropped by
              approximately 80%. The requests that remained were for rare or
              highly specific metrics that hadn't yet been implemented.
            </p>
            <p className="text-white/80 md:text-md">
              Managers reported being able to understand their operations
              without needing help interpreting data. They could build reports
              for directors and clients without pulling in the CS team. And
              Nilo had a clear, structured way to demonstrate its own value
              inside every client account.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-y-8 py-2">
            <div className="border-l-2 border-white/30 pl-8">
              <p className="mb-2 text-[4rem] font-bold leading-[1.2] text-white lg:text-[5rem]">
                ~80%
              </p>
              <h3 className="text-md font-bold leading-[1.4] text-white/80 md:text-xl">
                Reduction in ad-hoc CS data requests in the first months
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
