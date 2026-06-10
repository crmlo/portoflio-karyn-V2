"use client";

import React from "react";

export function Layout41() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">What I learned</p>
            <h2 className="text-5xl font-bold md:text-7xl lg:text-8xl">
              The data was always available. We just hadn't gone looking for it
              properly.
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            <p className="md:text-md">
              The month we spent making calls and sending messages before the
              research wasn't wasted, it showed us that informal outreach had a
              ceiling. You can learn a lot from talking to people, but
              structured research gives you something you can act on at scale.
            </p>
            <p className="md:text-md">
              The findings didn't just answer our questions. They gave the whole
              team a shared language for what to prioritize and why. The other
              thing I carry from this project: education is a product decision.
              The guide I built wasn't a marketing asset. It was a response to a
              real comprehension gap that the product itself hadn't addressed.
              When it worked, it changed how the team thought about onboarding.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
