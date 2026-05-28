"use client";

import React from "react";

const logos = [
  { src: "/images/Nilo.png", alt: "Nilo" },
  { src: "/images/iFood.png", alt: "iFood" },
  { src: "/images/Viveo.png", alt: "Viveo" },
  { src: "/images/Coca-Cola.png", alt: "Coca-Cola" },
  { src: "/images/Shell.png", alt: "Shell" },
  { src: "/images/Raizen.png", alt: "Raízen" },
  { src: "/images/Comgas.png", alt: "Comgás" },
  { src: "/images/IBM.png", alt: "IBM" },
];

export function Logo3() {
  return (
    <section className="overflow-hidden py-12 md:py-16 lg:py-20" style={{ backgroundColor: "#F3F5FF" }}>
      <div className="container mb-8 w-full max-w-lg px-[5%] md:mb-10 lg:mb-12">
        <h2 className="text-center text-base font-bold leading-[1.2] md:text-md md:leading-[1.2]">
          Companies I've worked with
        </h2>
      </div>
      <div className="flex items-center pt-7 md:pt-0">
        <div className="flex shrink-0 animate-loop-horizontally items-center">
          {logos.map((logo) => (
            <img
              key={logo.alt}
              className="mx-7 max-h-12 shrink-0 rounded-2xl md:mx-10 md:max-h-14"
              src={logo.src}
              alt={logo.alt}
            />
          ))}
        </div>
        <div className="flex shrink-0 animate-loop-horizontally items-center">
          {logos.map((logo) => (
            <img
              key={logo.alt + "-dup"}
              className="mx-7 max-h-12 shrink-0 rounded-2xl md:mx-10 md:max-h-14"
              src={logo.src}
              alt={logo.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
