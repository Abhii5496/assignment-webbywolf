import React from "react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { motion } from "motion/react";
import { FadeIn } from "../ui/Animations";

export default function CarouselSection() {
  const [api, setApi] = React.useState();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  console.log(current);
  return (
    <div className="overflow-hidden">
      <div className="bg-button-secondary ">
        <div className="flex sm:justify-between flex-col sm:flex-row items-start sm:items-center text-background p-5 pt-10 pb-0 lg:pb-0 lg:p-20">
          <div className="space-y-3">
            <p className="font-semibold">Join other Sun harvesters</p>
            <h2 className="uppercase font-bold text-3xl">
              Lorem ipsum dolor sit amet
            </h2>
            <p className="w-full lg:w-2/4">
              Dui euismod iaculis libero, aliquet vitae et elementum porttitor.
              Eleifend mi tristique condimentum congue fusce nunc, donec magnis
              commodo.
            </p>
          </div>
          <Button className="bg-background px-10 text-black shadow-sm my-10 sm:my-0 shadow-black font-medium">
            Lorem Ipsum
          </Button>
        </div>
        <div className="p-5 pt-10 lg:p-20 lg:pr-0 ">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
            }}
            className="w-full flex flex-col "
          >
            <CarouselContent className="">
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 "
                >
                  <CarouselCard active={current === index + 1} i={index} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-start gap-6 ">
              <CarouselPrevious className="relative translate-x-0 translate-y-0 left-0 right-0 my-10" />
              <CarouselNext className="relative translate-x-0 translate-y-0 left-0 right-0 my-10" />
            </div>
          </Carousel>
          <div></div>
        </div>
      </div>
    </div>
  );
}

const CarouselCard = ({ active, i }) => {
  return (
    <FadeIn as="div" className="w-full sm:w-[350px]" delay={i * 0.1}>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Create project</CardTitle>
        </CardHeader>
        <CardContent className="w-full">
          <div className="">
            <p className="">
              Purus maecenas quis elit eu, aliquet. Tellus porttitor ut
              sollicitudin sit non fringilla. Quam nunc volutpat senectus neque
              eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet
              curabitur commodo euismod.
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full w-10 h-10"
            >
              <Image
                src="https://s3-alpha-sig.figma.com/img/3ecb/1e9a/a85b510d3d1428b1c489a04f38d17d22?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=TmFFYspiz9ytkosxoYbtik-tNHB1kTGB4LjV0h8Hy80edzmUM5CPUzixfOUL0Msdk7v9sPk0ILdJ6tFK0k~iWfFGczPtU96DdnDyeVM8we8mtN4Hxm6J5XgtssNH7HYu6XCGQK9Fz-rEXp19kTxkDl~HNoJVvYz9UIb3hayfnZS8YcffOAA06XNLV8-M3cxQpNT--0GBBFdb-wVgme02s2vYj0xglbDHrAB~2MwhSG2hxchQGw6oEzH5pDp1dq0AbrYRrEJYeKWydBZCmBPNTYKaVONmDWxrc7xmEctQ96~ForEMi4XZcbR0o-CXwnTwqjdR2gpbmvQ-mzrSAYFuOA__"
                height={35}
                width={35}
                className="rounded-full"
                alt="avatar"
              />{" "}
            </Button>
            <p>Jane Cooper</p>
          </div>
        </CardFooter>
      </Card>
    </FadeIn>
  );
};
