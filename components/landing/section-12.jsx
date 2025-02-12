import React from "react";
import { Button } from "../ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { FadeIn } from "../ui/Animations";

export default function Section12() {
  return (
    <div className="p-5 sm:p-20">
      <div className="w-full max-w-3xl mx-auto space-y-5 h-full flex flex-col justify-center items-center">
        <FadeIn as="div" className="w-full flex justify-center items-center">
          <p className="bg-muted-foreground/60 text-3xl w-fit font-bold p-2 text-center">
            LOGO
          </p>
        </FadeIn>
        <FadeIn
          delay={0.4}
          as="h2"
          className="uppercase font-bold text-xl sm:text-4xl text-center"
        >
          Lorem ipsum dolor sit amet consectetur dui.
        </FadeIn>
        <FadeIn as="p" delay={0.6} className="text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Exercitationem provident maiores aut vero magnam, molestiae odit natus
          harum voluptatibus! Ducimus.
        </FadeIn>
        <Button>
          Lorem ipsum{" "}
          <span>
            <ArrowRight />
          </span>
        </Button>
      </div>
    </div>
  );
}
