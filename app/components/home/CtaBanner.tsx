"use client";

import React from "react";

export function CtaBanner() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28" style={{ backgroundColor: "#8AA0FF" }}>
      <div className="container max-w-lg text-center">
        <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
          Let's make something great together
        </h2>
        <p className="md:text-md">
          I'm open to new opportunities, full-time, contract, or just a good
          conversation about what's next.
        </p>
      </div>
    </section>
  );
}
