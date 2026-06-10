"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header44() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="w-full max-w-lg">
          <p className="mb-3 font-semibold md:mb-4">Next</p>
          <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
            Want to see the full research findings and the V2 designs? Let's
            talk.
          </h1>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
            <Button title="WhatsApp">WhatsApp</Button>
            <Button title="Email" variant="secondary">
              Email
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
