"use client";

import React from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";

export function Contact15() {
  return (
    <section id="contact" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid auto-cols-fr grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-[1fr_.75fr] md:gap-x-20 md:gap-y-16">
          <div className="rb-12 max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">Reach out</p>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Let's talk
            </h2>
            <p className="md:text-md">
              I'm open to full-time roles, contract work, or a conversation
              about what's next.
            </p>
          </div>
          <div className="flex flex-col">
            <div className="grid auto-cols-fr grid-cols-1 gap-x-4 gap-y-6 py-2">
              <div className="flex flex-row">
                <div className="mr-4 md:mb-4">
                  <BiEnvelope className="size-6" />
                </div>
                <div>
                  <h3 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">Email</h3>
                  <a className="underline" href="#">hello@relume.io</a>
                </div>
              </div>
              <div className="flex flex-row">
                <div className="mr-4 md:mb-4">
                  <BiPhone className="size-6" />
                </div>
                <div>
                  <h3 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">WhatsApp</h3>
                  <a className="underline" href="#">wa.me/5519987653205</a>
                </div>
              </div>
              <div className="flex flex-row">
                <div className="mr-4 md:mb-4">
                  <BiMap className="size-6" />
                </div>
                <div>
                  <h3 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">LinkedIn</h3>
                  <p>linkedin.com/in/karynloreyne</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
