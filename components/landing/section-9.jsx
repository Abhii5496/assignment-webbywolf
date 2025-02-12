import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { FadeIn } from "../ui/Animations";

export default function Section9() {
  return (
    <div className="p-5 lg:p-20">
      <div className="flex flex-col-reverse sm:flex-row gap-5">
        <div className="space-y-4 w-full sm:w-5/6 pt-10 sm:pt-0">
          <FadeIn
            as="h2"
            className="uppercase text-xl sm:text-3xl lg:text-4xl font-bold"
          >
            Lorem ipsum dolor sit amet
          </FadeIn>
          <FadeIn as="div" className="flex w-full">
            <Button
              variant="outline"
              className="rounded-r-none w-full bg-muted"
            >
              Research
            </Button>
            <Button variant="outline" className="rounded-none w-full">
              Plan
            </Button>
            <Button variant="outline" className="rounded-l-none w-full">
              Design
            </Button>
          </FadeIn>
          <FadeIn as="p">
            Egestas fringilla aliquam leo, habitasse arcu varius lorem elit.
            Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla
            felis ac turpis at amet. Purus malesuada placerat arcu at enim elit
            in accumsan.
          </FadeIn>
          <Button
            variant="link"
            href={"/"}
            className="flex items-center gap-2 pt-20 text-button-secondary
          "
          >
            Check Tools{" "}
            <span>
              <ArrowRight size={17} />
            </span>
          </Button>
        </div>
        <FadeIn
          as="div"
          delay={0.3}
          className="h-80 w-full relative order-1 sm:order-2"
        >
          <Image
            src="https://s3-alpha-sig.figma.com/img/58a2/92f9/cc88b8d1b68a74ca24a02fb0524db98b?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=TZ4LNZuVbeC6hkfH~8lCHVfN-QE~muoSkZrBUjfBBmQ7ryBue4GfiJK3f3MNgVmb2XHWptjVoIkbV8cxanvVxfuJN16EBtFZ~0prQAtnpir8hskAKOhJ7l6OAl3gGGL5lrQsnedIcztxHRfhqLR4dABx-8T1CZUspgRDFeeWI52~IboNgEzpkRJYHWnkdr6fMiuHFkUipc~znNDR4cydwdxeMtABp6MybTMp1qH38Z2r0eEuw5fhm7TloO5Mu-oMnFD8BEHQJlJqMUHZUFl4Zfc-OCsHcIW2K4BNH1zsVEkOhmLdExQSXjQ3~IwNgsdWiBm9BoKV~ec749TkzqKIhQ__"
            className="absolute inset-0 bg-cover object-cover h-full w-full"
            fill
            alt="img"
          />
        </FadeIn>
      </div>
    </div>
  );
}
