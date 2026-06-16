"use client";

import React from "react";
import { LayoutGrid, Eye, TrendingUp } from "lucide-react";

export function Layout237() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28" style={{ backgroundColor: "#F3F5FF" }}>
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Three things were broken
            </h2>
            <p className="md:text-md">
              The deeper problem was that managers didn't know what to ask for.
              And a tool that simply gave them more data to request wouldn't
              solve that.
            </p>
          </div>
          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div className="flex w-full flex-col items-center text-center">
              <div className="mb-5 md:mb-6">
                <LayoutGrid className="size-12" strokeWidth={1.5} />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                No structure
              </h3>
              <p>
                Data was delivered in response to requests, not organized around
                meaningful themes or decisions.
              </p>
            </div>
            <div className="flex w-full flex-col items-center text-center">
              <div className="mb-5 md:mb-6">
                <Eye className="size-12" strokeWidth={1.5} />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                No interpretation
              </h3>
              <p>
                Managers received raw numbers with no context about what was
                good, what was critical, or what required action.
              </p>
            </div>
            <div className="flex w-full flex-col items-center text-center">
              <div className="mb-5 md:mb-6">
                <TrendingUp className="size-12" strokeWidth={1.5} />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                No proof of impact
              </h3>
              <p>
                Without clear, accessible data, managers couldn't demonstrate
                the value of their own operations to directors or clients, and
                Nilo couldn't demonstrate its own value to managers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
