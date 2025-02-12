import { ArrowLeft, ArrowRight, Phone, PhoneCall } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Section2() {
  return (
    <section className="p-5 sm:p-10">
      <div className="flex flex-col-reverse sm:flex-row gap-8  lg:p-20 lg:shadow-sm lg:shadow-gray-500 ">
        <div className="flex w-full sm:w-1/2 justify-center flex-col">
          <div className="space-y-4 pb-4">
            <p className="text-button-secondary">Lorem ipsum dolor sit.</p>
            <h2 className="uppercase text-3xl font-semibold w-full lg:w-3/6">
              Lorem ipsum dolor sit amet.
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
              alias, modi placeat rerum omnis nihil.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-2 items-center ">
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
            </div>
            <div className="flex gap-2 items-center">
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
            </div>
            <div className="flex gap-2 items-center">
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
            </div>
          </div>
          <div className="flex gap-5 pt-7 items-center">
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
          </div>
        </div>
        <div className="relative py-10 h-[300px] sm:h-[600px] w-full sm:w-1/2">
          <Image
            src="/landing/sec-2-main.png"
            className="h-full object-cover w-full"
            fill
            alt="img-2"
          />
        </div>
      </div>
    </section>
  );
}
