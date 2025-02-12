import React from "react";
import { FadeIn } from "../ui/Animations";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "motion/react";

export default function Section11() {
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
  return (
    <div className="p-5 lg:p-20 lg:mt-60">
      <motion.div
        initial={{ opacity: 0, filter: "blur(20px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        className="space-y-4"
      >
        <h2 className="uppercase text-xl lg:text-3xl font-bold text-center text-button-secondary">
          Lorem ipsum dolor sit amet
        </h2>
        <p className=" text-center">
          Aliquet sed nulla tincidunt pulvinar sed fames sit facilisis dictumst.
          Ornare faucibus quis velit fringilla aliquam ultricies. Malesuada ut
          aliquam at ac est nisi, interdum etiam dignissim. Sed ut vestibulum
          eget purus ornare. Risus elit et fringilla habitant ut facilisi.
        </p>
      </motion.div>
      <div className="">
        <Carousel
          setApi={setApi}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent>
            {imgs.map((img, i) => (
              <CarouselItem key={i}>
                <CarouselCard img={img} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="flex gap-1 justify-center items-center sm:mt-0 -mt-28">
          {Array.from({ length: count }).map((_, i) => (
            <span
              className={`block h-1.5 rounded-full transition-all duration-300 bg-button-secondary  ${
                i + 1 === current ? "w-6" : "w-2"
              }`}
              key={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const CarouselCard = ({ img }) => {
  return (
    <div className="w-full relative py-10  overflow-hidden ">
      <motion.div
        initial={{ opacity: 0, filter: "blur(20px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="relative h-80 w-full sm:w-2/3"
      >
        <Image
          src={img}
          alt="img"
          className="h-full w-full object-cover inset-0"
          fill
        />
      </motion.div>
      <div className="relative sm:absolute sm:-right-1/2 -translate-y-1/2 top-1/2   space-y-4 w-full justify-center ">
        <div className="max-w-xl bg-white p-10 border-gray-500 border/50 shadow-lg ">
          <FadeIn
            as="h2"
            className="pb-4 text-2xl font-bold text-button-secondary"
          >
            Artist & Investor
          </FadeIn>
          <FadeIn as="p">
            Enim sagittis, sit porttitor morbi lobortis amet, libero adipiscing
            auctor. Malesuada tristique libero, id netus tincidunt. Egestas ac
            arcu amet nisl quis est ...
          </FadeIn>
          <Button variant="link" className="text-button-secondary px-0 py-5">
            Read Full Story{" "}
            <span>
              <ArrowRight size={18} />
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

const imgs = [
  "https://s3-alpha-sig.figma.com/img/94ff/389f/358746686a56be0b0edab4ac6d930aab?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HdMedSYfyP4A7vSM2fVxE9eNVQO-IyQnUDuapxV7cBOsMFjuONQlJCSJanctsMN4AmyeP7Q6mMlz6XD8T9JeJwwgfWiVYwLUF~sxKrx7HkSSxLiRyRcfdVrpHmtQ3OE4DxG~oK9tW264TQk~PwAq4KNWgByog8UOLvmPOmyfr2i2NL2qg660tdOXJS5rH2swl5VwVMy1pq-zFmsAJrPHfIvMngQlVWyvBsWa1kNTbRZBTvmE-ooP5Vfif8ntqJHKGNE0wxQeA4nt6yMYMgwCvC62DmQcfADxvoZZ7MTsOcUHxNCb1DUTU5kV4NTYYiX9AYCke~TicKuccK5J3vv9HQ__",
  "https://s3-alpha-sig.figma.com/img/63e5/5435/903bc7a7e32437f507bf13206bef4ac8?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hS~46PMIhV02TxBgkMJ~paT3HhkKfShsZQDJc8Fq~KJjB0sDrMO1bdiQsXs0W9C9d2MejbpUIKQfV9kvFLc~18rzMI14A7l-M08dL6uXaQLNsVCYUzgZipbNphWdJFiwxqye9YX4ZckvUSlHgoES1m9JUEyXJcZBuY41mhBgvyMv7A9ZYWVMHHI8CZCKKk9PNnuMp7N5MJqnekQvd0MR9SfY9QuobUL7KoLaW7DqiC6OMVsO2eZ0QF7pRBehMrSIKYkxSvmNrcW~PfHJZoLMb1yr2YPBuIm5vX28wriCadrri~vG4uH8o9yMQDUSC~DSft6wiyEC-mzIj~F~LdsAsQ__",
  "https://s3-alpha-sig.figma.com/img/bf5c/44fe/b37e287d7a7637f82ed230496a608b9d?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=YQo0CDuBc6ucG~Rvkom8IQQTBCHPrH5ABeFtpM78FqGINFkzgL5yaY92u6hW1Pi3y8Rgsoe7HiF~Sd8HtU-N~YpktjTDYhXJsmw0y9EmHi4Bgf9G30Vk2B3d2xIAzEhtlckcx-ExGwRP9nPy~yfRVmNNpUq00WZ1NtTR4SQGzTeH~FTV8D5r1mb9-5EWzbguBqUX48qRIbcFg559sV-xKiOToQwOk8wHgWpvO68ubCn~6fXGy94ENtefewLkFPXWrMvEvSDdzmWT5IctCDpncdTLqI-WIls-g9~3pnALS2YzUwt0FpcxJHOcxJrOGbK76rwjeGIYyt24R78LbooGiw__",
  "https://s3-alpha-sig.figma.com/img/20bb/6842/8da0911dc3730323e49cb3517ae897ac?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=gabIl1WOJzezkr6gdhNsn54OZzAD1a5RPk~LaDM~IO3QaErlzcvKP5M6VkdzMTY88ziMQULMM9qNscw8~huTNR6U9YGmE4DalBP14jUYl3-qIi-jnenp4o0nuYQPmY0aqmRMakZgPkV-~T7bwHV0WfH~ybWCeqNeY5KvJs3EZcb4XWaoae6kc1LSGsqj64moYewbaG0T-YfnVVZEeBbd1YZU3CTxbBh8r0OVyIeZupaoBAhxVYVBw1MZmMUoBGZmnXR7NNTGiYowqVV9tCEeUFz99IBf8f4NIPbY7DTIjiDuwXSlEbPK8HWxogNcvWLc2kxfzt5Sr8Io7N7sP79y0g__",
];
