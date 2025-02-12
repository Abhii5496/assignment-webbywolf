import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

export default function Section8() {
  return (
    <div className="relative z-10 py-20">
      <div className="flex bg-[#F8F8F8] flex-col sm:flex-row sm:gap-10 h-full p-5 relative ">
        <div className="w-full sm:w-1/2 h-full">
          <div className="relative h-80">
            <motion.img
              src="https://s3-alpha-sig.figma.com/img/9472/7c23/79864d6c6d963d3b1853bfa71684c2a7?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=uSWKn4P0iZNv-gVWpzZ0biNRruu8T9yknddvWXlKywJ18b4clthYHI6Qigvs70i1WONxLhc6ss6pdVQRJ7qLWso1te-XaGCQossjj~jkhThsnIOEbN58gMgq9Xt9t4OG9K2POFWnsH3YNVSYurYGYolaDecFArIJf5jid0~gZfOLLle-80cwPnbsI1306CrgokPYpdxW4yBmYMyPqEJ6O7HuBp0UiccbVrKVrpd8V8YJE1QXYd~f-vgAEKNwznLmSWiy6Vl~MJFz5GMguWAAwXgZ4eEMKdLpAQfmUByB65atU1DGuHvBrv6NeKVnqrHQGIUt9U3-7Sld0gQ3jRDZIw__"
              className="absolute  -top-[18%] object-cover h-full w-full"
              alt="img"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: -18, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </div>
        </div>
        <div className="w-full sm:w-1/2">
          <div className="space-y-3">
            <h6 className="text-button-secondary">Lorem ipsum</h6>
            <h2 className="text-2xl uppercase font-bold">
              <span className="text-button-secondary">Lorem</span> ipsum dolor
              sit amet consectetur. Enim donec.
            </h2>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur. Vel pellentesque odio enim
              amet non.
            </p>
            <div className="grid grid-cols-2 gap-2">
              {[...Array(6).keys()].map((_, i) => (
                <p className="w-1 whitespace-nowrap font-semibold " key={i}>
                  Lorem ipsum
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="h-2 lg:h-3 absolute w-full lg:w-[90%] bg-gradient-to-r bottom-0 left-0 from-[#043898] via-[#079902] to-[#170041]" />
      </div>
    </div>
  );
}
