"use client";

import React from "react";

export function Layout463() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="ml-[7.5%] grid grid-cols-1 gap-x-12 gap-y-5 md:grid-cols-2 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Audience</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              A product built for strategic decision-makers, not operational
              teams
            </h2>
          </div>
          <div className="mx-[7.5%] md:mt-[25rem]">
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
              <div>
                <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                  Healthcare Managers
                </h6>
                <p>
                  Senior managers responsible for reporting to directors or
                  clients. They consume data to make strategic decisions and
                  prove the value of their own operations. Not the people
                  running day-to-day tasks.
                </p>
              </div>
              <div>
                <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                  Customer Success Team
                </h6>
                <p>
                  The internal team that was manually generating reports and
                  visualizations on demand. Compass was also built to free them
                  from this operational burden.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
