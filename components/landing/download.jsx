import Image from "next/image";
import React from "react";

export default function Download() {
  return (
    <div className="h-[500px] bg-[#F3F3F3] my-20 flex">
      <div className="flex justify-center items-center sm:w-7/12 lg:w-5/12 p-5 lg:p-20 ">
        <div className="space-y-4">
          <h6 className="text-button-secondary font-semibold">Lorem ipsum</h6>
          <h1 className="text-3xl lg:text-5xl font-bold">
            Lorem ipsum dolor sit amet.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab animi
            repudiandae numquam tenetur recusandae ipsum voluptatem quidem fuga
            fugiat adipisci et eligendi illo, reiciendis aliquid dolorum harum
            eius vitae assumenda!
          </p>
          <div className="flex gap-2 lg:pt-16">
            <div className="relative w-40 h-12 hover:cursor-pointer">
              <Image
                src="https://s3-alpha-sig.figma.com/img/a718/bb87/6cd83cdd0ae8eaa2ae11c4bf4fd0eb4a?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=RvobRWPQihnDyb8pDbM6xWFP9l0e7Yw9qfeo5PWwEKDPGbn7IIUinuLxWNJpdTYaKIBvGzv6qK~h1tAyMOsxw6quWMJs8b4SLV7r0Eeu0LGjRQ2wb2QDLrJGGy-UGvRxKMLk2oiQPhteBdpPWldL3rdubm6WZpA67k87r4BOorougyOWd9RKA8CPWsPB9gjudZ1yfOuv6ngE7Q7yccrJOfUQf~cG~rwoXyI71o35-OuuwHX4zoNoD2b36EBZ0lmv7p-MSxeceVfc9Tq~F2XCJ2QmAoJgaSjzlhkJY8XuiQt7DqQRsSBG9KZaWDVmLnmldEDooUB~ZhAozpRzqBpSnA__"
                alt="playstore"
                className="absolute inset-0 h-full w-full"
                fill
              />
            </div>
            <div className="relative w-40 h-12 hover:cursor-pointer">
              <Image
                src="https://s3-alpha-sig.figma.com/img/81c2/04b4/3e567df45105fdea7355b0daa905ac87?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=lnmXgpKPEW7eOtNwQR~jtWs0-biZzws~XIxUVeEtmmso9sCaAp0X58e0r~DjRpH14P3sv~-RHOwDq~b8y3M~OnfNXjBaeTWaCViU8lVw~6kxCFK-tz99J-a-5CPAmAPlit-ZpnsbfmIZTAFn0qJXIu5cBACaM0eDs1DfjwBzuPoHfH7GoyEN6Zvi~OCtJ8OMpJBVSuGjlPiy-H26zEDz4CBlFkYGCQTmCD~LsXw4H607aopQ1~wSFaJM1P9Yp49iH7LGqlGxqD8pV4XvoBDSXhcAn1ZezDkmsagAy7SrZMPK7LS8yHEMEKC5he0MQmF~8FpD8rRav8Ztv4oC1ZiJnw__"
                alt="playstore"
                className="absolute inset-0 h-full w-full"
                fill
              />
            </div>
          </div>
        </div>
      </div>
      <div className="hidden sm:block sm:w-7/12">
        <div className="relative h-full w-full">
          <Image
            src="/landing/hand.png"
            alt="phone"
            fill
            className="absolute inset-0 bottom-0 sm:pt-20 lg:pt-0 sm:h-3/4 lg:h-full w-full"
          />
        </div>
      </div>
    </div>
  );
}
