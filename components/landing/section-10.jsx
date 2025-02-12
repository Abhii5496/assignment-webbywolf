import React from "react";
import { FadeIn } from "../ui/Animations";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export default function Section10() {
  return (
    <div className="p-5 lg:p-20 relative flex flex-col gap-5 bg-[#F1F1F1] mt-40 ">
      <div className="flex flex-col-reverse sm:flex-row gap-5">
        <div className="space-y-4 w-full sm:w-1/2 -mt-20 sm:mt-0">
          <FadeIn
            as="h2"
            className="text-button-secondary text-xl lg:text-4xl font-bold uppercase"
          >
            Lorem ipsum dolor sit amet consectetur. Dignissim tellus.
          </FadeIn>

          <FadeIn as="p">
            Lorem ipsum dolor sit amet consectetur. In malesuada morbi mi
            blandit laoreet urna sapien quam pulvinar. Dolor aliquet est tortor
            tincidunt ultricies feugiat mauris. Aliquam platea turpis porta nisl
            felis. Massa in facilisis semper libero eget eu quisque bibendum
            platea. Tortor fames.
          </FadeIn>
          <Button>
            Lorem Ipsum{" "}
            <span>
              <ArrowRight size={18} />
            </span>
          </Button>
        </div>
        <FadeIn
          as="div"
          className="w-full sm:w-1/2 -top-[10%] overflow-visible"
        >
          <div className="relative h-80">
            <Image
              src="https://s3-alpha-sig.figma.com/img/b516/b95a/7c5e758d7b71c4a5b876a7ed582abb38?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ow9whcGMcEox1BcKJbNUtr0DIAXIIXMUmK5tHM2CYphTebI~gZ6xvbsV8jgmHt0W2ToV61kz7iyREqB8CwAqj1YqE8vYR-ICIBqJiOl5Ns0pvo-aWi5H9Alea3O39EqxtQHosmlgE~-PYkD-zAbqeK3QFN2Ghb3aWVI-03p1OGZKF9pJxjvpwkzMJ8CrgNA-vAjcU5HcKADfBfkWo5XnIrwsHKz2s8R03A9wUb7y6IN-YkF~Q8h2xquMzSV3U8j-VWkm3-UK2otmunNiDXEAKf4l77xuNbBPGCQJLrwxomFY45CCudqqIB2pBVXt~DCG~Y1s8LIPMQCur4xe3CiQCg__"
              className="absolute inset-x-0 -top-20 -translate-y-1/3 lg:-translate-y-1/2 object-cover h-full  w-full"
              fill
              alt="img"
            />
          </div>
        </FadeIn>
      </div>
      <FadeIn
        as="div"
        className="relative lg:absolute z-10 lg:left-20  left-0 lg:-bottom-1/2 space-y-4 lg:p-10 p-5 shadow-lg lg:w-1/3 w-full bg-background"
      >
        <h6 className="font-bold">Lorem ipsum dolor sit.</h6>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur. Habitant vestibulum vitae amet
          habitasse semper.
        </p>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur. Egestas congue mattis ut
          placerat vitae amet suspendisse fermentum velit. Nibh dolor nunc id
          tristique sit.{" "}
        </p>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur. Hac netus consectetur amet
          quisque scelerisque facilisi. Ultrices lectus viverra pharetra
          commodo.{" "}
        </p>
      </FadeIn>
      <div className="h-2 lg:h-3 absolute w-[90%] z-0 bg-gradient-to-r bottom-0 left-0 from-[#043898] via-[#079902] to-[#170041]" />
    </div>
  );
}
