import Section, { SectionPoint } from "@/components/layout/custom-section";
import React from "react";

export default function page() {
  return (
    <div className="bg-muted">
      <div className="px-px py-10 sm:px-5 max-w-7xl mx-auto flex flex-col gap-6 ">
        {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi iusto
      deleniti inventore ea dignissimos necessitatibus nobis consequatur
      mollitia similique nihil, beatae voluptatibus incidunt ab aperiam fugiat
      alias harum ullam iure? */}
        <Section
          heading="Intergration for every scenario"
          title="Intergration for every scenario"
          subtitle="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi iusto
          deleniti inventore ea dignissimos necessitatibus nobis consequatur
          mollitia similique nihil."
          image="/landing/main.png"
        >
          <div className="flex flex-col gap-2 lg:gap-4 py-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <SectionPoint
                className="gap-1 text-sm sm:text-[12px] lg:text-[16px] "
                key={i}
                data-aos="fade-up"
                data-aos-delay={150 * i + ""}
              >
                <span className="font-semibold">Lorem Ipsum Dolor -</span> sit
                amet consectetur adipisicing elit. Omnis, vitae amet consectetur
                adipisicing elit. Omnis, vitae.
              </SectionPoint>
            ))}
          </div>
        </Section>
        <Section
          layout="right"
          heading="Intergration for every scenario"
          title="Intergration for every scenario"
          subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi iusto
          deleniti inventore ea dignissimos necessitatibus ."
          image="/landing/main.png"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi iusto
          deleniti inventore ea dignissimos necessitatibus"
        >
          <div className="flex flex-col gap-2 lg:gap-4 my-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <SectionPoint
                className="gap-1 text-sm sm:text-[12px] lg:text-[16px] "
                key={i}
              >
                <span className="font-semibold">Lorem Ipsum Dolor -</span> sit
                amet consectetur adipisicing elit. Omnis, vitae amet consectetur
                adipisicing elit. Omnis, vitae.
              </SectionPoint>
            ))}
          </div>
        </Section>
      </div>
    </div>
  );
}
