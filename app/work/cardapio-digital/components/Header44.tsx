"use client";

import React from "react";

export function Header44() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28" style={{ backgroundColor: "#8AA0FF" }}>
      <div className="container">
        <div className="w-full max-w-lg">
          <p className="mb-3 font-semibold md:mb-4">Next</p>
          <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
            Want to see the full research findings and the V2 designs? Let's
            talk.
          </h1>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
            <a
              href="https://wa.me/5519987653205"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-black/80 transition-colors"
            >
              WhatsApp
            </a>
            <a
              href="mailto:karyn.loreyne@gmail.com"
              className="inline-flex items-center justify-center rounded-full border border-black bg-transparent px-6 py-3 text-sm font-semibold text-black hover:bg-black/10 transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
