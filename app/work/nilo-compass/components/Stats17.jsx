"use client";

import React from "react";

export function Stats17() {
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 items-center gap-y-12 lg:grid-cols-2 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold text-text-alternative md:mb-4">
              Results
            </p>
            <h2 className="mb-5 text-5xl font-bold text-text-alternative md:mb-6 md:text-7xl lg:text-8xl">
              Managers stopped asking for data because they already had it.
            </h2>
            <p className="text-text-alternative md:text-md">
              Within the first few months of Compass running at full capacity,
              the volume of ad-hoc data requests to the CS team dropped by
              approximately 80%. The requests that remained were for rare or
              highly specific metrics that hadn't yet been implemented. The
              qualitative impact was just as significant. Managers reported
              being able to understand their operations without needing help
              interpreting data. They could build reports for directors and
              clients without pulling in the CS team. And Nilo had a clear,
              structured way to demonstrate its own value inside every client
              account. The product launched in phases, starting with the most
              frequently requested data themes and expanding from there. By the
              time I left the project after 11 months, all 11 use cases were
              live and the product continued to evolve.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-y-8 py-2 md:grid-cols-2 md:gap-x-8 md:gap-y-12">
            <div className="border-l-2 border-border-alternative pl-8">
              <p className="mb-2 text-10xl font-bold leading-[1.3] text-text-alternative md:text-[4rem] lg:text-[5rem]">
                ˜80%
              </p>
              <h3 className="text-md font-bold leading-[1.4] text-text-alternative md:text-xl">
                AReduction in ad-hoc CS data requests in the first months
              </h3>
            </div>
            <div className="border-l-2 border-border-alternative pl-8">
              <p className="mb-2 text-10xl font-bold leading-[1.3] text-text-alternative md:text-[4rem] lg:text-[5rem]">
                50%
              </p>
              <h3 className="text-md font-bold leading-[1.4] text-text-alternative md:text-xl">
                Short heading goes here
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <video
          className="absolute inset-0 aspect-video size-full object-cover"
          autoPlay={true}
          loop={true}
          muted={true}
        >
          <source
            src="https://d22po4pjz3o32e.cloudfront.net/placeholder-video.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
}
