import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { FadeIn, Reveal } from "../ui/Animations";
import Section8 from "./Section-8";

export default function Section7() {
  return (
    <div>
      <div className="relative h-[1400px] ">
        <Image
          src="/landing/lines-2.svg"
          className="w-full h-full absolute object-cover z-0"
          alt="img"
          fill
        />
        <div className="relative z-10 p-5 sm:p-10  ">
          <div className="grid grid-cols-2 gap-2 h-full ">
            <div className="col-span-2 lg:col-span-1 h-full">
              <div className="grid grid-cols-6 grid-rows-5 lg:grid-rows-6 gap-4 h-full">
                <div className="border-border border-white col-span-5 row-span-3 space-y-3 ">
                  <FadeIn as="h6" className="uppercase font-semibold">
                    No Limit
                  </FadeIn>
                  <FadeIn
                    as="h1"
                    className="uppercase text-xl sm:text-5xl font-bold"
                  >
                    Lorem ipsum dolor sit amet
                  </FadeIn>
                  <p className="">
                    Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae
                    porttitor pharetra tempor quis arcu. Ipsum nullam.
                  </p>
                  <Button>
                    Lorem Ipsum{" "}
                    <span>
                      <ArrowRight />
                    </span>
                  </Button>
                </div>
                <div className="border-border border-white col-span-1 row-span-3 lg:row-span-4 ">
                  <div className="h-full">
                    <div className="relative h-1/2" />
                    <Reveal delay={0.4} className="relative h-1/2">
                      <Image
                        src="https://s3-alpha-sig.figma.com/img/94ff/389f/358746686a56be0b0edab4ac6d930aab?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HdMedSYfyP4A7vSM2fVxE9eNVQO-IyQnUDuapxV7cBOsMFjuONQlJCSJanctsMN4AmyeP7Q6mMlz6XD8T9JeJwwgfWiVYwLUF~sxKrx7HkSSxLiRyRcfdVrpHmtQ3OE4DxG~oK9tW264TQk~PwAq4KNWgByog8UOLvmPOmyfr2i2NL2qg660tdOXJS5rH2swl5VwVMy1pq-zFmsAJrPHfIvMngQlVWyvBsWa1kNTbRZBTvmE-ooP5Vfif8ntqJHKGNE0wxQeA4nt6yMYMgwCvC62DmQcfADxvoZZ7MTsOcUHxNCb1DUTU5kV4NTYYiX9AYCke~TicKuccK5J3vv9HQ__"
                        className="h-full w-full object-cover inset-0"
                        fill
                        alt="img"
                      />
                    </Reveal>
                  </div>
                </div>
                <div className="border-border border-white hidden lg:block lg:col-span-5 lg:row-span-1 "></div>
                <Reveal className="border-border border-white col-span-1 row-span-2 relative">
                  <Image
                    src="https://s3-alpha-sig.figma.com/img/63e5/5435/903bc7a7e32437f507bf13206bef4ac8?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hS~46PMIhV02TxBgkMJ~paT3HhkKfShsZQDJc8Fq~KJjB0sDrMO1bdiQsXs0W9C9d2MejbpUIKQfV9kvFLc~18rzMI14A7l-M08dL6uXaQLNsVCYUzgZipbNphWdJFiwxqye9YX4ZckvUSlHgoES1m9JUEyXJcZBuY41mhBgvyMv7A9ZYWVMHHI8CZCKKk9PNnuMp7N5MJqnekQvd0MR9SfY9QuobUL7KoLaW7DqiC6OMVsO2eZ0QF7pRBehMrSIKYkxSvmNrcW~PfHJZoLMb1yr2YPBuIm5vX28wriCadrri~vG4uH8o9yMQDUSC~DSft6wiyEC-mzIj~F~LdsAsQ__"
                    className="h-full w-full object-cover inset-0"
                    fill
                    alt="img"
                  />
                </Reveal>
                <Reveal
                  delay={0.3}
                  className="border-border border-white col-span-5 row-span-2 relative"
                >
                  <Image
                    className="h-full w-full object-cover inset-0"
                    src="https://s3-alpha-sig.figma.com/img/bf5c/44fe/b37e287d7a7637f82ed230496a608b9d?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=YQo0CDuBc6ucG~Rvkom8IQQTBCHPrH5ABeFtpM78FqGINFkzgL5yaY92u6hW1Pi3y8Rgsoe7HiF~Sd8HtU-N~YpktjTDYhXJsmw0y9EmHi4Bgf9G30Vk2B3d2xIAzEhtlckcx-ExGwRP9nPy~yfRVmNNpUq00WZ1NtTR4SQGzTeH~FTV8D5r1mb9-5EWzbguBqUX48qRIbcFg559sV-xKiOToQwOk8wHgWpvO68ubCn~6fXGy94ENtefewLkFPXWrMvEvSDdzmWT5IctCDpncdTLqI-WIls-g9~3pnALS2YzUwt0FpcxJHOcxJrOGbK76rwjeGIYyt24R78LbooGiw__"
                    fill
                    alt="img"
                  />
                </Reveal>
              </div>
            </div>
            <div className="col-span-2 lg:col-span-1 h-full">
              <div className=" grid grid-cols-6 grid-rows-7 gap-4 h-full">
                <Reveal
                  delay={0.5}
                  className="border-border relative border-white col-span-2 row-span-2 bg-red-500"
                >
                  <Image
                    src="https://s3-alpha-sig.figma.com/img/20bb/6842/8da0911dc3730323e49cb3517ae897ac?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=gabIl1WOJzezkr6gdhNsn54OZzAD1a5RPk~LaDM~IO3QaErlzcvKP5M6VkdzMTY88ziMQULMM9qNscw8~huTNR6U9YGmE4DalBP14jUYl3-qIi-jnenp4o0nuYQPmY0aqmRMakZgPkV-~T7bwHV0WfH~ybWCeqNeY5KvJs3EZcb4XWaoae6kc1LSGsqj64moYewbaG0T-YfnVVZEeBbd1YZU3CTxbBh8r0OVyIeZupaoBAhxVYVBw1MZmMUoBGZmnXR7NNTGiYowqVV9tCEeUFz99IBf8f4NIPbY7DTIjiDuwXSlEbPK8HWxogNcvWLc2kxfzt5Sr8Io7N7sP79y0g__"
                    className="h-full w-full object-cover inset-0"
                    fill
                    alt="img"
                  />
                </Reveal>
                <Reveal
                  delay={0.4}
                  className="border-border relative border-white col-span-5 row-span-2 bg-red-300"
                >
                  <Image
                    src="https://s3-alpha-sig.figma.com/img/ea18/63fd/23286fa487de453717250a6046d8720d?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=OYWpaXOOETx1iCoEhYpRj27X4Z9-58njxuauSimEmw5OsWRJ75uW1-p8-49rz0FrnUxBrorfnKLqzqD190nT~PCdZ8PZ5ZsmDl4bAzrQuvWStbjAbyF5mSRoEK6HQmYqQ-mDFbED1PTBuFqF0NimjBMs-FGs5tKR39iTMfjMaBmMWIgw9Lywh-u1KM3~esl7XgZOizCuUHwMLIEqBkcd0yNxVMp3Zap75s9PH~pbR2trSb0l4oTXVM9-byQELxrBkAxz00Jos2O2EOF~cOoZ9BU7DvCy4q~VblKO3m9N-WRrLvPfXtGhrBCeV94xH33AW9YJG-wdrdpzBfm2pr~hig__"
                    className="h-full w-full object-cover inset-0"
                    fill
                    alt="img"
                  />
                </Reveal>
                <Reveal className="border-border relative border-white col-span-7 row-span-4 bg-gray-400 ">
                  <Image
                    src="https://s3-alpha-sig.figma.com/img/6e07/8e95/4b4e27ee6afe4eefb19ce5ab2124faa0?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=e4WsLfXcSf~lyONSOLUqxx15gr42a65aEunOO5aRnDwtWGepU7vGaxgpAZAai9yYpCLi4zj0rN6EiXlJuGK1DkS2t1wic4gArxkhnD5RNGsZn5a6BWVRIcAfX7eUR9rF6izDD8p3a4xZK96rbNi8OHUjtrcU7SYWrXGRtRFup7g-ZdHjSo336Uafc-cCAdvsDrxkaBkto0zi8WD0J-6DzX9jldU6cQ-FEfOHu84jMf3YxxsMe28jlc~ucNNriuZi3xBjx~2M3kdL3s4i2zenytez7mlNR6lsNjrW0BX80Br5Azv2zUv2QRNzyXXGgr4aVrTjn4Y2VIQzUM0p47xG1w__"
                    className="h-full w-full object-cover inset-0"
                    fill
                    alt="img"
                  />
                </Reveal>
                <Reveal
                  delay={0.3}
                  className="border-border relative border-white col-span-2 row-span-2 bg-green-300"
                >
                  <Image
                    src="https://s3-alpha-sig.figma.com/img/3f33/0e7e/2503a18db023ca88d2372ec66ab52634?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=U11bt~~LKk5vQYNA7XUZzIjdVWbZenTI0IAbTi2zOcR0jK2xjNZEaDXWV5sJdEWeeG-qYnH1yav9tIpVhtc6PPnCWjzMNKYzWAUSdEw1qk5vGCtVOeVpXDxhjkw8sY6sbGyTc~ZQ69WUnNRxRlnNqZjr1wgdWVn7AUAcCShqorQVq6Chk~aS6jZn0DRte02vJnam2gaSusINT8uFEnbEZt2J5AEr1hA1xmihH8GaJ6croE-vFwsoRwI9MRNvqRpAe3qyafCdpHnLw6n~nEaV1pbkkOu8HXB3p46oH2rd~qz2r-Wm45pKQghhY1OWFG4qet8eTbknUfFPTeiY4TqLrA__"
                    className="h-full w-full object-cover inset-0"
                    fill
                    alt="img"
                  />
                </Reveal>
                <Reveal className="border-border relative border-white col-span-5 row-span-2 bg-pink-300">
                  <Image
                    src="https://s3-alpha-sig.figma.com/img/3f33/0e7e/2503a18db023ca88d2372ec66ab52634?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=U11bt~~LKk5vQYNA7XUZzIjdVWbZenTI0IAbTi2zOcR0jK2xjNZEaDXWV5sJdEWeeG-qYnH1yav9tIpVhtc6PPnCWjzMNKYzWAUSdEw1qk5vGCtVOeVpXDxhjkw8sY6sbGyTc~ZQ69WUnNRxRlnNqZjr1wgdWVn7AUAcCShqorQVq6Chk~aS6jZn0DRte02vJnam2gaSusINT8uFEnbEZt2J5AEr1hA1xmihH8GaJ6croE-vFwsoRwI9MRNvqRpAe3qyafCdpHnLw6n~nEaV1pbkkOu8HXB3p46oH2rd~qz2r-Wm45pKQghhY1OWFG4qet8eTbknUfFPTeiY4TqLrA__"
                    className="h-full w-full object-cover inset-0"
                    fill
                    alt="img"
                  />
                </Reveal>
              </div>
            </div>
          </div>
        </div>
        <Section8 />
      </div>
    </div>
  );
}
