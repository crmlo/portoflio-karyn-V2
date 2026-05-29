"use client";

import React from "react";

export function Testimonial1() {
  return (
    <section id="relume" className="bg-malibu-lightest px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container w-full max-w-lg">
        <div className="flex flex-col items-center text-center">
          <blockquote className="text-xl font-bold md:text-2xl">
            "We're flagging errors to help the agent improve, but please don't
            turn it off, it's already making our work so much easier."
          </blockquote>
          <div className="mt-6 flex flex-col items-center justify-center md:mt-8">
            <p className="font-semibold">Nursing team, Grupo Fleury</p>
            <p>Weeks after launch</p>
          </div>
        </div>
      </div>
    </section>
  );
}
