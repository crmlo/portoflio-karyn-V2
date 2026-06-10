"use client";

import { useMediaQuery } from "@relume_io/relume-ui";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

interface ConditionalRenderProps {
  condition: boolean;
  children: React.ReactNode;
}

const ConditionalRender = ({ condition, children }: ConditionalRenderProps) => {
  return condition ? <>{children}</> : null;
};

const useScrollAnimation = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const heroWidth = useTransform(scrollYProgress, [0, 1], ["100vw", "55vw"]);
  const scaleHeight = useTransform(scrollYProgress, [0, 1], ["100vh", "90vh"]);
  const position = useTransform(scrollYProgress, [0, 1], ["-5%", "0%"]);
  const cardsXPosition = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
  const cardsWidth = useTransform(scrollYProgress, [0, 1], ["100vw", "35vw"]);
  const cardPositions = (index: number) =>
    useTransform(
      scrollYProgress,
      [0, 0 + index * 0.01, 0.2 + index * 0.5, 1],
      ["100%", "100%", "0%", "0%"],
    );
  const motionHeroStyles = { width: heroWidth, height: scaleHeight, y: position, x: position };
  const motionCardsStyles = { width: cardsWidth, height: scaleHeight, y: position, x: cardsXPosition };
  return { containerRef, cardPositions, motionHeroStyles, motionCardsStyles };
};

export function Layout518() {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const isTablet = useMediaQuery("(min-width: 768px)");
  const scrollState = useScrollAnimation();

  return (
    <section
      ref={scrollState.containerRef}
      className="relative px-[5%] py-16 md:px-0 md:py-24 lg:h-[250vh] lg:py-0"
    >
      {/* Mobile */}
      <ConditionalRender condition={isMobile}>
        <div className="relative mb-6 flex items-center justify-center px-6 py-16 md:mb-8 md:px-8 md:py-24">
          <div className="max-w-md text-center text-white">
            <p className="mb-3 font-semibold md:mb-4">Audience</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              iFood Partner Restaurants
            </h2>
          </div>
          <div className="absolute inset-0 -z-10">
            <img src="/images/App+Painel.png" className="size-full object-cover" alt="Cardápio Digital app and panel" />
            <div className="absolute inset-0 bg-black/50" />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-6 md:gap-y-8">
          <div className="flex border border-border-primary p-8 text-center">
            <div className="mx-auto flex max-w-md flex-col items-center justify-center">
              <div className="mb-4 w-full overflow-hidden rounded-2xl">
                <Image src="/images/Parceiro.png" width={600} height={400} className="w-full h-auto object-cover" alt="iFood partner restaurant" quality={90} />
              </div>
              <h3 className="mb-3 text-4xl font-bold leading-[1.2] md:mb-4 md:text-5xl">
                iFood Partner Restaurants
              </h3>
              <p>
                iFood partners who already sell outside the platform through
                WhatsApp, phone, or their own digital menu tools. They run their
                own delivery channel alongside iFood and need a simpler way to
                manage it.
              </p>
            </div>
          </div>
          <div className="flex border border-border-primary p-8 text-center">
            <div className="mx-auto flex max-w-md flex-col items-center justify-center">
              <div className="mb-4 w-full overflow-hidden rounded-2xl">
                <Image src="/images/Cliente.png" width={600} height={400} className="w-full h-auto object-cover" alt="End customer" quality={90} />
              </div>
              <h3 className="mb-3 text-4xl font-bold leading-[1.2] md:mb-4 md:text-5xl">
                Partner's Customers
              </h3>
              <p>
                The end consumer who places orders directly through the
                restaurant's Digital Menu, bypassing iFood's platform and fees.
              </p>
            </div>
          </div>
        </div>
      </ConditionalRender>

      {/* Tablet / Desktop */}
      <ConditionalRender condition={isTablet}>
        <div className="mx-auto w-[90vw] lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-full lg:items-center lg:justify-center lg:overflow-hidden">
          <div className="grid grid-cols-1 gap-y-6 md:gap-y-8 lg:h-[90vh] lg:w-[90vw] lg:grid-cols-[55vw_35vw] lg:gap-y-0">
            <motion.div
              style={scrollState.motionHeroStyles}
              className="relative flex items-center justify-center px-6 py-16 md:px-8 md:py-24 lg:p-3"
            >
              <div className="max-w-md text-center text-white">
                <p className="mb-3 font-semibold md:mb-4">Audience</p>
                <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                  iFood Partner Restaurants
                </h2>
              </div>
              <div className="absolute inset-0 -z-10">
                <img src="/images/App+Painel.png" className="size-full object-cover" alt="Cardápio Digital app and panel" />
                <div className="absolute inset-0 bg-black/50" />
              </div>
            </motion.div>
            <motion.div
              style={scrollState.motionCardsStyles}
              className="grid grid-cols-1 gap-y-6 md:gap-y-8 lg:pl-8"
            >
              <motion.div
                style={{ x: scrollState.cardPositions(0) }}
                className="flex border border-border-primary p-8 text-center lg:max-w-[640px]"
              >
                <div className="mx-auto flex max-w-md flex-col items-center justify-center lg:max-w-full">
                  <div className="mb-4 w-full overflow-hidden rounded-2xl">
                    <Image src="/images/Parceiro.png" width={600} height={400} className="w-full h-auto object-cover" alt="iFood partner restaurant" quality={90} />
                  </div>
                  <h3 className="mb-3 text-4xl font-bold leading-[1.2] md:mb-4 md:text-5xl lg:text-6xl">
                    iFood Partner Restaurants
                  </h3>
                  <p>
                    iFood partners who already sell outside the platform through
                    WhatsApp, phone, or their own digital menu tools. They run
                    their own delivery channel alongside iFood and need a simpler
                    way to manage it.
                  </p>
                </div>
              </motion.div>
              <motion.div
                style={{ x: scrollState.cardPositions(1) }}
                className="flex border border-border-primary p-8 text-center lg:max-w-[640px]"
              >
                <div className="mx-auto flex max-w-md flex-col items-center justify-center lg:max-w-full">
                  <div className="mb-4 w-full overflow-hidden rounded-2xl">
                    <Image src="/images/Cliente.png" width={600} height={400} className="w-full h-auto object-cover" alt="End customer" quality={90} />
                  </div>
                  <h3 className="mb-3 text-4xl font-bold leading-[1.2] md:mb-4 md:text-5xl lg:text-6xl">
                    Partner's Customers
                  </h3>
                  <p>
                    The end consumer who places orders directly through the
                    restaurant's Digital Menu, bypassing iFood's platform and fees.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </ConditionalRender>
    </section>
  );
}
