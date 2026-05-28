"use client";

import React from "react";
import Image from "next/image";

export function Layout1() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Context</p>
            <h1 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Nilo is infrastructure for healthcare and Chat is where everything
              runs through.
            </h1>
            <p className="md:text-md">
              Nilo is a SaaS platform helping hospitals, clinics, and health
              operators deliver continuous, personalized care. With over 3
              million patients and 6,000 healthcare professionals on the
              platform, it serves clients like Grupo Fleury, Hospital Albert
              Einstein, Unimed, and Porto Saúde. The platform has four modules:
              acquisition & engagement, care navigation, data & analytics, and
              AI agents. Chat sits at the center of all of them — it's the
              interface through which millions of patients' health data flows
              every single day. Without it, care navigation and engagement
              campaigns would be nearly impossible to deliver.
            </p>
          </div>
          <div>
            <Image
              src="/images/Context.png"
              alt="Nilo platform context"
              width={800}
              height={600}
              className="w-full h-auto rounded-2xl"
              quality={90}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
