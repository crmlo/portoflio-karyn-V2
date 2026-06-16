"use client";

import Image from "next/image";
import React from "react";
import { Users, ClipboardCheck } from "lucide-react";

export function Layout10() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Approach</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              We didn't ask what data they wanted. We figured out what decisions
              they needed to make.
            </h2>
            <p className="mb-4 md:text-md">
              Rather than building a configurable BI tool and letting managers
              choose their own metrics, we took an opinionated approach: we
              defined the data that mattered, organized it into themes, and
              delivered it in a way that was already interpreted.
            </p>
            <p className="mb-6 md:mb-8 md:text-md">
              This required three sources of knowledge working together: the
              CS team, who understood what managers actually struggled with;
              an internal researcher with academic and market expertise in
              healthcare metrics; and the managers themselves, who validated
              what we built and pushed back where it didn't fit their reality.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div className="flex">
                <div className="mr-4 flex-none self-start">
                  <Users className="size-8" strokeWidth={1.5} />
                </div>
                <div>
                  <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                    Co-creation with CS and research
                  </h6>
                  <p>
                    I ran co-creation sessions with the CS team and Nilo's
                    internal healthcare researcher to map the most relevant data
                    themes and define which metrics and indicators made sense for
                    our clients. We identified 11 use cases, each clustering
                    related metrics and indicators.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="mr-4 flex-none self-start">
                  <ClipboardCheck className="size-8" strokeWidth={1.5} />
                </div>
                <div>
                  <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                    Validation with managers
                  </h6>
                  <p>
                    I then validated these themes, metrics, and visualizations
                    directly with the managers who would use the product. Their
                    feedback shaped how we prioritized and what we refined before
                    building.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Image
              src="/images/CoCriacao.png"
              width={800}
              height={600}
              className="w-full h-auto rounded-2xl object-cover"
              alt="Compass use cases"
              quality={90}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
