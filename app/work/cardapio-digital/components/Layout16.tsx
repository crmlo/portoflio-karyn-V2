"use client";

import Image from "next/image";
import React from "react";

export function Layout16() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Quick win</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              The fastest fix wasn't a feature, it was a guide.
            </h2>
            <div className="flex flex-col gap-4">
              <p className="text-base md:text-md">
                A lot of the friction we'd uncovered wasn't about missing
                functionality; it was about understanding. Restaurants didn't
                know what the product was, that it was free, or how to promote
                it to their own customers.
              </p>
              <p className="text-base md:text-md">
                I proposed an educational guide built directly from the
                questions collected in the qualitative interviews. The PM was
                skeptical, so I offered to build it on my own time. It launched
                at a partner event focused on promoting and explaining the
                product, and landed well.
              </p>
              <p className="text-base md:text-md">
                After that, it wasn't a one-off. The guide was incorporated
                into ongoing communications with partner restaurants and made
                available directly in the partner portal.
              </p>
            </div>
          </div>
          <div>
            <Image
              src="/images/Guia-poster.png"
              width={800}
              height={600}
              className="w-full h-auto rounded-2xl object-cover md:hidden"
              alt="Partner educational guide"
              quality={90}
            />
            <Image
              src="/images/Guia.gif"
              width={800}
              height={600}
              className="hidden w-full h-auto rounded-2xl object-cover md:block"
              alt="Partner educational guide"
              quality={90}
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}
