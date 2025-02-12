import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { FadeIn } from "../ui/Animations";

export default function BeforeQuote({ className }) {
  return (
    <section className={cn("py-20", className)}>
      <div className="relative h-[650px]">
        <div className="absolute h-full w-full  bg-black/60 z-10" />
        <Image
          src="/landing/sec-4-dup.png"
          fill
          className="absolute inset-0 object-cover h-full w-full z-0 bg-bottom"
          alt="img4"
        />
        <div className="h-full w-full p-5 sm:p-10 relative z-20 ">
          <FadeIn as="p" className="text-4xl font-bold bg-background w-fit p-1">
            LOGO
          </FadeIn>
          <div className="flex justify-center items-center h-full w-full text-background">
            <FadeIn
              as="h1"
              delay={0.3}
              className="sm:text-4xl text-2xl font-bold uppercase text-center lg:px-20"
            >
              dolor sit amet consectetur. Quis adipiscing purus egestas aliquam
              viverra mi. dolor sit amet consectetur. Quis adipiscing
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
