import Image from "next/image";
import React from "react";
import { FadeIn } from "../ui/Animations";

export default function Section3() {
  return (
    <section className="p-5 lg:p-10 relative">
      <div className="flex flex-col-reverse lg:flex-row w-full h-full gap-5">
        <div className="h-full w-full lg:w-3/5">
          <div className="space-y-2">
            <FadeIn as="p" className="font-semibold text-button-secondary">
              Lorem ipsum dolor sit amet.
            </FadeIn>
            <FadeIn
              delay={0.25}
              as="h2"
              className="uppercase font-bold text-xl sm:text-5xl w-full lg:w-4/5"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </FadeIn>
            <FadeIn delay={0.3} as="p" className="w-full lg:w-3/5 ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Exercitationem molestiae earum sequi laborum similique minus
              inventore ad saepe omnis distinctio? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Laboriosam, deserunt?
            </FadeIn>
          </div>
          <div className="flex flex-col gap-5 py-10 w-full lg:w-4/5">
            <FadeIn delay={0.4} className="flex gap-3 items-start">
              <Image
                src="/landing/sec-3-2.png"
                width={36}
                height={36}
                className="object-contain"
                alt="img-3"
              />
              <div className="">
                <p className="font-semibold">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Impedit, reprehenderit.
                </p>
                <p className="">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Suscipit assumenda eveniet eos commodi ullam veniam dolor hic
                  omnis laborum itaque illo quod, deserunt sequi nostrum, eum,
                  esse magnam quo. Obcaecati.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.45} className="flex gap-3 items-start">
              <Image
                src="/landing/sec-3-2.png"
                width={36}
                height={36}
                className="object-contain"
                alt="img-3"
              />
              <div className="">
                <p className="font-semibold">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Impedit, reprehenderit.
                </p>
                <p className="">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Suscipit assumenda eveniet eos commodi ullam veniam dolor hic
                  omnis laborum itaque illo quod, deserunt sequi nostrum, eum,
                  esse magnam quo. Obcaecati.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.5} className="flex gap-3 items-start">
              <Image
                src="/landing/sec-3-2.png"
                width={36}
                height={36}
                className="object-contain"
                alt="img-3"
              />
              <div className="">
                <p className="font-semibold">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Impedit, reprehenderit.
                </p>
                <p className="">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Suscipit assumenda eveniet eos commodi ullam veniam dolor hic
                  omnis laborum itaque illo quod, deserunt sequi nostrum, eum,
                  esse magnam quo. Obcaecati.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
        <div className="w-full lg:w-2/5 h-full">
          <FadeIn
            initial={{ filter: "blur(25px)" }}
            animate={{ filter: "blur(0px)" }}
            delay={0.4}
            className="relative h-[400px] sm:h-[600px] lg:h-[700px] w-full"
          >
            <Image
              src="/landing/sec-3.png"
              alt="sec-3"
              fill
              className="absolute object-cover h-full w-full inset-0 "
            />
          </FadeIn>
        </div>
      </div>
      <div className="h-2 lg:h-3 absolute w-[90%] bg-gradient-to-r bottom-0 right-0 from-[#043898] via-[#079902] to-[#170041]" />
    </section>
  );
}
