"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header1() {
  return (
    <section id="work" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
              I'm Karyn, and I design products that solve hard problems and actually work.
            </h1>
            <p className="md:text-md">
              I'm a designer with fourteen years of experience, eight of them
              building complex digital products. I bridge strategy and craft to
              deliver experiences that work for users and drive real results for
              businesses.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="Work">Work</Button>
              <Button title="About" variant="secondary">About</Button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="aspect-square w-full max-w-sm overflow-hidden rounded-full">
              <img
                src="/images/Avatar.jpg"
                className="h-full w-full object-cover"
                alt="Karyn Loreyne"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
