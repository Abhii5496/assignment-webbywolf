import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { FadeIn } from "../ui/Animations";

export default function Section4({ className }) {
  return (
    <section className={cn("py-20", className)}>
      <div className="relative h-[650px]">
        <FadeIn
          initial={{ filter: "blur(25px)", opacity: 1 }}
          animate={{ filter: "blur(0px)", opacity: 0.6 }}
          className="absolute h-full w-full  bg-black z-10"
        />
        <Image
          src="/landing/sec-4.png"
          fill
          className="absolute inset-0 object-cover h-full w-full z-0 bg-bottom"
          alt="img4"
        />
        <div className="h-full w-full p-5 sm:p-10 relative z-20 ">
          <FadeIn as="p" className="text-4xl font-bold bg-background w-fit p-1">
            LOGO
          </FadeIn>
          <div className="flex justify-center items-center flex-col  text-background">
            <div className="flex justify-center items-center flex-col max-w-5xl space-y-4 pt-10">
              <FadeIn
                as="h1"
                className="text-center text-md lg:text-4xl font-bold uppercase"
              >
                Lorem ipsum dolor sit amet consectetur. Quis adipiscing purus
                egestas aliquam viverra mi.
              </FadeIn>
              <FadeIn
                as="p"
                delay={0.3}
                className="text-center text-sm lg:text-lg text-background "
              >
                Lorem ipsum dolor sit amet consectetur. Mattis justo euismod
                volutpat vestibulum nisi at ac risus amet. Mi accumsan sagittis
                justo pellentesque id sed. Id tellus id luctus id. At quis nunc
                libero urna arcu vulputate sed ut. Nisl porta massa diam
                condimentum nulla quam.
              </FadeIn>
              <FadeIn
                as="p"
                delay={0.4}
                className="text-center text-sm lg:text-lg lg:font-semibold text-background"
              >
                Lorem ipsum dolor sit amet consectetur. Volutpat in dictum nec
                condimentum ultrices non. Ornare semper in tincidunt
                pellentesque cras mauris in vitae. At viverra quis eu malesuada
                vel et porttitor. Nulla luctus quam lacus lacus non at.
                Tincidunt morbi feugiat a pulvinar euismod natoque nulla ligula.
                Tincidunt cursus vitae leo.
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
