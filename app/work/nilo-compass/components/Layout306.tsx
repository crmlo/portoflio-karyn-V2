"use client";

import Image from "next/image";
import React from "react";

export function Layout306() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">Features</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Key features included
            </h2>
            <p className="md:text-md">
              I worked side by side with the engineering team to ensure every
              experience I designed was technically feasible. This close
              collaboration allowed us to validate technical constraints early
              and refine solutions together. Leveraging the company's design
              system, I created components tailored to this product's unique
              needs.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-4">
          <div>
            <div className="mb-5 md:mb-6">
              <Image
                src="/images/metricas.png"
                width={400}
                height={250}
                alt="Visual status signals"
                className="w-full h-auto rounded-2xl object-cover"
                quality={90}
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              Visual status signals
            </h3>
            <p>
              At-a-glance indicators that flagged when something was off without
              requiring the manager to interpret raw numbers.
            </p>
          </div>
          <div>
            <div className="mb-5 md:mb-6">
              <Image
                src="/images/Export.jpg"
                width={400}
                height={250}
                alt="Exportable reports"
                className="w-full h-auto rounded-2xl object-cover"
                quality={90}
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              Exportable reports
            </h3>
            <p>
              Managers could export data in the most common formats, making it
              easy to share with directors or clients.
            </p>
          </div>
          <div>
            <div className="mb-5 md:mb-6">
              <Image
                src="/images/Filtros.jpg"
                width={400}
                height={250}
                alt="Flexible filtering"
                className="w-full h-auto rounded-2xl object-cover"
                quality={90}
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              Flexible filtering
            </h3>
            <p>
              The filter layer gave managers infinite visualization
              possibilities, but always within a structure tailored to their
              goals.
            </p>
          </div>
          <div>
            <div className="mb-5 md:mb-6">
              <Image
                src="/images/big numbers.jpg"
                width={400}
                height={250}
                alt="Key numbers by theme"
                className="w-full h-auto rounded-2xl object-cover"
                quality={90}
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              All key numbers grouped by theme
            </h3>
            <p>
              Giving managers a consistent mental model of their operation
              across every session.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
