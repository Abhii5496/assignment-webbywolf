import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

export default function Section4({ className }) {
  return (
    <section className={cn("py-20", className)}>
      <div className="relative h-[650px]">
        <div className="absolute h-full w-full  bg-black/60 z-10" />
        <Image
          src="/landing/sec-4.png"
          fill
          className="absolute inset-0 object-cover h-full w-full z-0 bg-bottom"
          alt="img4"
        />
        <div className="h-full w-full p-5 sm:p-10 relative z-20 ">
          <p className="text-4xl font-bold bg-background w-fit p-1">LOGO</p>
          <div className="flex justify-center items-center flex-col  text-background">
            <div className="flex justify-center items-center flex-col max-w-5xl space-y-4 pt-10">
              <h1 className="text-center text-md lg:text-4xl font-bold uppercase">
                Lorem ipsum dolor sit amet consectetur. Quis adipiscing purus
                egestas aliquam viverra mi.
              </h1>
              <p className="text-center text-sm lg:text-lg ">
                Lorem ipsum dolor sit amet consectetur. Mattis justo euismod
                volutpat vestibulum nisi at ac risus amet. Mi accumsan sagittis
                justo pellentesque id sed. Id tellus id luctus id. At quis nunc
                libero urna arcu vulputate sed ut. Nisl porta massa diam
                condimentum nulla quam.
              </p>
              <p className="text-center text-sm lg:text-lg lg:font-semibold">
                Lorem ipsum dolor sit amet consectetur. Volutpat in dictum nec
                condimentum ultrices non. Ornare semper in tincidunt
                pellentesque cras mauris in vitae. At viverra quis eu malesuada
                vel et porttitor. Nulla luctus quam lacus lacus non at.
                Tincidunt morbi feugiat a pulvinar euismod natoque nulla ligula.
                Tincidunt cursus vitae leo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
