// /components/Section/Section.tsx
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const Section = ({
  title,
  heading,
  subtitle,
  description,
  image,
  children,
  bottom = true,
  className,
  layout = "left",
}) => {
  return (
    <section
      className={cn(
        "w-full py-7 md:py-16 px-6 md:px-6 relative font-roboto shadow-lg bg-white",
        {
          "shadow-[-12px_-18px_15px_-3px_rgba(0,0,0,0.1)]": layout === "right",
        },
        { "shadow-[12px_-18px_15px_-3px_rgba(0,0,0,0.1)]": layout === "left" },
        className
      )}
    >
      <div
        className={cn(
          "container mx-auto flex flex-col-reverse md:flex-row gap-4 ",
          { "md:flex-row-reverse": layout === "left" },
          className
        )}
      >
        <div
          className={`md:w-1/2 ${
            layout === "left" ? "md:order-1" : "md:order-2"
          } mb-8 md:mb-0`}
        >
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold  uppercase"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {heading}
          </h2>
          {subtitle && (
            <h3
              className="text-sm sm:text-md lg:text-xl "
              data-aos="fade-up"
              data-aos-delay="250"
            >
              {subtitle}
            </h3>
          )}
          {children}
          <p className="font-medium " data-aos="fade-up" data-aos-delay="300">
            {description}
          </p>
        </div>

        <div className="md:w-1/2 relative flex justify-center items-center">
          <Image
            width={500}
            height={400}
            src={image}
            alt={title}
            className="h-[400px] w-full object-contain  "
            data-aos="fade-up"
            data-aos-delay="150"
          />
        </div>
      </div>
      {bottom && (
        <div
          className={cn("h-3 sm:h-6 absolute  bottom-0 w-[95%]", {
            "left-0": layout === "left",
            "right-0": layout === "right",
          })}
          style={{
            background:
              "linear-gradient(90deg, #043898 0%, #990203 45.96%, #000 91.18%)",
          }}
        ></div>
      )}
    </section>
  );
};

export const SectionPoint = ({ className, children, ...rest }) => {
  return (
    <div
      className={cn("flex ", className)}
      {...rest}
      data-aos="fade-up"
      data-aos-delay="150"
    >
      <div className="pr-1">
        <Image
          src="/landing/sec-3-2.png"
          width={36}
          height={36}
          alt="img"
          className="mt-1 mr-1"
        />
      </div>
      <p className="">{children}</p>
    </div>
  );
};

export default Section;
