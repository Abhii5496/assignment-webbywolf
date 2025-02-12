import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { ArrowRight, Check } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { FadeIn } from "../ui/Animations";

export default function Hero() {
  const [loading, setLoading] = useState(true);
  return (
    <>
      {loading && (
        <AnimatePresence>
          <motion.div
            onAnimationComplete={() => setTimeout(() => setLoading(false), 300)}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={{
              initial: {
                height: "100vh",
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
              },
              animate: {
                height: "100vh",
                clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
              },
              exit: {
                height: 0,
                clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
              },
            }}
            transition={{ duration: 1.2, delay: 1 }}
            key="loader-home"
            className="fixed inset-0 z-[999] flex flex-col pointer-events-none origin-top bg-button-primary justify-center items-center"
          >
            <motion.h2
              variants={{
                initial: { y: 40, opacity: 0 },
                animate: { y: 0, opacity: 1, transition: { duration: 0.3 } },
                exit: { y: -40, opacity: 0, transition: { duration: 0.3 } },
              }}
              className="text-xl text-background sm:text-4xl lg:text-7xl font-bold"
            >
              WELCOME.
            </motion.h2>
          </motion.div>
        </AnimatePresence>
      )}

      <div className="h-screen">
        <div className="h-full grid grid-cols-1 lg:grid-cols-2 relative">
          <div className="absolute block lg:hidden z-0 h-full w-full blur-sm backdrop-blur-sm ">
            <motion.img
              initial={{ filter: "blur(40px)", opacity: 0 }}
              animate={{ filter: "blur(0px)", opacity: 1 }}
              transition={{ duration: 0.3, delay: 1.8 }}
              alt="img"
              src="/landing/main.png"
              className="object-cover absolute h-full w-full top-0 inset-0"
            />
          </div>
          <div className="flex justify-center items-center p-5 sm:p-20 relative z-10 text-background bg-foreground/30 backdrop-blur-md lg:bg-background lg:text-foreground lg:backdrop-blur-none lg:bg-backdround ">
            <div className="space-y-3">
              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 1.8 }}
                className="text-4xl sm:text-6xl font-bold"
              >
                Lorem ipsum dolor sit amet
              </motion.h1>
              <motion.h6
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 1.8 }}
              >
                Lorem ipsum dolor sit amet consectetur. Enim netus cras congue
                quis elit sociis. Sed mi rhoncus id habitant. In urna tellus
                nisi platea morbi libero imperdiet neque. Justo suspendisse
                tristique posuere quis eget viverra. Nunc euismod ultrices etiam
                nulla habitasse.
              </motion.h6>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 1.9 }}
                className="flex gap-3 pt-10"
              >
                <Input
                  placeholder="example@gmail.com"
                  className="text-background lg:text-foreground placeholder:text-background/50 lg:placeholder:text-foreground/50"
                />
                <Button variant="">
                  {" "}
                  Submit{" "}
                  <span>
                    <ArrowRight />
                  </span>
                </Button>
              </motion.div>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 2 }}
                className="flex items-center pt-4"
              >
                <span className="rounded-full h-[30px] w-[30px] p-2 inline-flex justify-center items-center mr-3 bg-button-secondary">
                  <Check className="text-background stroke-[4px]" size={28} />
                </span>
                <p>No credit card required!</p>
              </motion.div>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <motion.div
              initial={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
              animate={{ clipPath: "polygon(0 0, 24% 0, 0 100%, 0 100%)" }}
              transition={{ duration: 0.5, delay: 1.8 }}
              className="absolute inset-0 bg-background h-full w-full z-10"
            />
            <div className="relative z-0 h-full w-full">
              <motion.img
                initial={{ filter: "blur(40px)", opacity: 0 }}
                animate={{ filter: "blur(0px)", opacity: 1 }}
                transition={{ duration: 0.3, delay: 1.8 }}
                src="/landing/main.png"
                className="object-cover absolute h-full w-full top-0 inset-0"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
