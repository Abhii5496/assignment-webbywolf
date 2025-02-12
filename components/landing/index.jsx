"use client";
import React from "react";
import Header from "./header";
import Hero from "./hero";
import Section2 from "./section-2";
import Section3 from "./section-3";
import Section4 from "./section-4";
import Section5 from "./section-5";
import Section6 from "./section-6";
import Quote from "./quote";
import Download from "./download";
import Section7 from "./section-7";
import BeforeQuote from "./BeforeQuote";
import CarouselSection from "./CarouselSection";
import Section9 from "./section-9";
import Section10 from "./section-10";
import Section11 from "./section-11";
import { FAQs } from "./FAQs";
import Section12 from "./section-12";
import Footer from "./StickyFooter/Footer";

export default function Landing() {
  return (
    <>
      <Header />
      <Hero />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <BeforeQuote className="py-0" />
      <Quote />
      <Download />
      <Section7 />
      {/* <CarouselSection /> */}
      <Section9 />
      <Section10 />
      <Section11 />
      <FAQs />
      <Section12 />
      <Footer />
    </>
  );
}
