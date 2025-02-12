import Image from "next/image";
import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";
import { motion } from "motion/react";

export default function Section6() {
  return (
    <motion.div
      initial="initial"
      transition={{ staggerChildren: 0.3 }}
      whileInView="animate"
      viewport={{ once: true }}
    >
      <div className="relative p-5 sm:p-20 overflow-hidden">
        <div className="absolute h-[1400px] w-full overflow-hidden p-5 sm:p-20">
          <Image
            src="/landing/lines.svg"
            fill
            className="absolute inset-0 h-full w-full object-cover z-0"
            alt="lines"
          />
        </div>
        <div className="relative z-10">
          <div className="">
            <h6 className="text-button-secondary font-semibold">
              Lorem ipsum dolor sit amet.
            </h6>
            <h2 className="uppercase text-2xl sm:text-4xl">
              Lorem ipsum dolor sit.
            </h2>
            <div className="flex justify-center items-center py-6 sm:py-20">
              <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4 lg:gap-10 [perspective:1000px] [transform-style:preserve-3d]">
                {items.map((item, i) => (
                  <CardItem {...item} i={i} key={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

const items = [
  {
    img: "https://s3-alpha-sig.figma.com/img/559e/e03c/fb70e6f3f8ffb94e9404aaa274005ea6?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cralu62ufb0PBY5okWmBxJf6pKqU~f6Fmkq4MMgAQ6OgTnQ3nkaG6AIjoVbxjHTucmnRgYa2grXUnuZhICefCpDXePfliZfkAm3itpaqdfHJZJTY6DYhNiw2ayH-b2ZKcjKrrPpNPtX98azP881Svo0cfIwi-IfOyBlR0CekJmXTi7uZO3U0L6VKSMKNUbpZJJdHYlrR3Jph741rfby0Fh5su9NS-ZVh7cRPHVdCjFHtjWegu2bOmmEYrCljgPBp~cE1c3e6XZ57LmmGHpd2DB3yKJLRNYs7x7vUvAxqtvuA4cTR3070uZWQmNapHJQ8LGzYtdULPp27LTjP0ZHLHA__",
    title: "Lorem ipsum dolor sit amet consectetur.",
    desc: "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/a9b6/c33d/b5adfd0f031f8d8e38d2ee6ee50b92a9?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=TYbgPJr7HV~XcJ5bB6YP7JiLDg5muGINAoY9JyBIg8LlMXaSbBjDYxbrjBgZSoC49GegssJ5ADi3jEXyD4c53SEDYjzQPrKRI8jV0FvMPXiKwbLTPoxOUnzFm5Zkzb7BZeEH7roHYEz7HsQX-0JU53qxlj2NSr3NZ2hIEyjky5qrwG-L73afkFr99iHnz~Z3UVwR2mZ4QvADrh8SbNhi8wKk7dGIm4s24r07m2jZwVbwOccNcrsLgKJsleY8UR332bVpLQSGNHgZKZkCgx5Y828zmvOhGXsgD3X4bG1pee1RSjLrm7QIhKYD7jbfajetuZWB7rRwCRlNjt28WLtr6w__",
    title: "Lorem ipsum dolor sit amet consectetur.",
    desc: "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/c788/443f/b5012c58242d830b2585155f4ff15967?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=pYcH2ElG9Dn-PLn0AkejImmdhUwc8mPk7DYbzUQetfbio1OAs1Xoz6JZZ-JhaRNRZc~m5x0jtlCz43EtZpkmSwYW0Xe-NRCDPbwT8VGtcG8vtDyTf5eyA16XKisB4crOLo3HgrC6wPjeceoW1LkaLqPffQS6MijOmAwyTpczEyoBU-DoFREMfxmXnlG2D3lo6B~jIknx5KMywf0PT1BWnZWr1pT9cLFx0r8K-tZxfGZ0NJoIVEn7H~WCiuOpU5Gubxbp147AF-168QUH5fd4RnBFMKF0iai-GZZjvJz4QrjO7BQBlztMScMwr4rlGkv8nvWRBRErvyZbTIJG9Xu5bw__",
    title: "Lorem ipsum dolor sit amet consectetur.",
    desc: "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/196f/9736/63cdf3ebd39788215780f7c0a0221327?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hdQYADfAadLJHkpIliDEmnb0TvATYu-JJJqkkAhmCTf4wb5ND2WmMVQigfmR75p7Pa6WfPD73gbDN3VqLR8oaVbyewoT3NhYbd6IsRFqw9rPp-D5dDK3HyCv805YuoWRg437ID-7qK0qtstjYT4v4C-qimHWlbFmsWo4gQCF3N7ow5-8peCqTh5F3oHeW3K8u3WOD-WpW8EN68Tl0466zyDFK3H-0Xd7uYlsTL2JrWkDuCqM9fE5pdHQ2Jce~QWV4N9atqC3Nu-Vuy0e-OPuHufynEU8RUBZ~-n~DmdH9lY7ZBXeBlFjRRq-T9IecVPRt50yRYHyCEMs0pFIp-MSXA__",
    title: "Lorem ipsum dolor sit amet consectetur.",
    desc: "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.",
  },
];

const CardItem = ({ img, title, desc, i }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.3 } }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 * i }}
      className="w-[380px] sm:w-[300px] lg:w-[445px] cursor-pointer"
    >
      <Card className="w-full  overflow-hidden border-0 transition-all duration-300 hover:border border-button-secondary/50">
        <CardHeader className="h-40 w-full relative">
          <Image
            src={img}
            fill
            className="absolute h-full w-full object-cover"
            alt="img"
          />
        </CardHeader>
        <CardContent className="p-4">
          <CardTitle className="p-0">{title}</CardTitle>
          <div className="pt-3">
            <p>{desc}</p>
          </div>
        </CardContent>
        <CardFooter className="px-4">
          <Link
            className="text-button-secondary underline hover:text-primary"
            href={"/"}
          >
            Learn More
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
};
