import { ArrowLeft, ArrowRight, Phone, PhoneCall } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { FadeIn } from "../ui/Animations";

export default function Section2() {
  return (
    <section className="p-5 sm:p-10 relative">
      <div className="flex flex-col-reverse sm:flex-row gap-8  lg:p-20 lg:shadow-lg  ">
        <div className="flex w-full sm:w-1/2 justify-center flex-col">
          <div className="space-y-4 pb-4">
            <FadeIn as="p" className="text-button-secondary">
              Lorem ipsum dolor sit.
            </FadeIn>
            <FadeIn
              delay={0.3}
              as="h2"
              className="uppercase text-3xl font-semibold w-full lg:w-3/6"
            >
              Lorem ipsum dolor sit amet.
            </FadeIn>
            <FadeIn as="p" delay={0.4}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
              alias, modi placeat rerum omnis nihil.
            </FadeIn>
          </div>
          <div className="flex flex-col gap-4">
            <FadeIn delay={0.4} className="flex gap-2 items-center ">
              <Image
                src="/landing/sec-2-1.png"
                width={100}
                height={100}
                alt="img"
                className="object-cover"
              />
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae, quasi alias? .
              </p>
            </FadeIn>
            <FadeIn delay={0.5} className="flex gap-2 items-center">
              <Image
                src="/landing/sec-2-2.png"
                width={100}
                height={100}
                alt="img"
                className="object-cover"
              />
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae, quasi alias? Laborum nihil .
              </p>
            </FadeIn>
            <FadeIn delay={0.5} className="flex gap-2 items-center">
              <Image
                src="/landing/sec-2-3.png"
                width={100}
                height={100}
                alt="img"
                className="object-cover"
              />
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae, quasi alias? Laborum nihil temporibus quibusdam .
              </p>
            </FadeIn>
          </div>
          <FadeIn delay={0.6} className="flex gap-5 pt-7 items-center">
            <Button>
              Lorem Ipsum{" "}
              <span>
                <ArrowRight />
              </span>
            </Button>
            <Link
              className="text-button-primary inline-flex items-center gap-2.5"
              href="tel:1234567890"
            >
              <span>
                <Phone size={18} className="stroke-[3px]" />
              </span>
              1234567890
            </Link>
          </FadeIn>
        </div>
        <FadeIn
          initial={{ filter: "blur(25px)" }}
          animate={{ filter: "blur(0px)" }}
          delay={0.4}
          className="relative py-10 h-[300px] sm:h-[600px] w-full sm:w-1/2"
        >
          <Image
            src="/landing/sec-2-main.png"
            className="h-full object-cover w-full"
            fill
            alt="img-2"
          />
        </FadeIn>
      </div>
      <div className="h-2 lg:h-3 w-full lg:w-[90%] bg-gradient-to-r bottom-2 absolute lg:bottom-0 left-0 from-[#043898] via-[#079902] to-[#170041]" />
    </section>
  );
}
