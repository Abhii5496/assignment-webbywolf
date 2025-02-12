import React from "react";
import { Button } from "../ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Section12() {
  return (
    <div className="p-5 sm:p-20">
      <div className="w-full max-w-3xl mx-auto space-y-5 h-full flex flex-col justify-center items-center">
        <div className="w-full flex justify-center items-center">
          <p className="bg-muted-foreground/60 text-3xl w-fit font-bold p-2 text-center">
            LOGO
          </p>
        </div>
        <h2 className="uppercase font-bold text-xl sm:text-4xl text-center">
          Lorem ipsum dolor sit amet consectetur dui.
        </h2>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Exercitationem provident maiores aut vero magnam, molestiae odit natus
          harum voluptatibus! Ducimus.
        </p>
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
