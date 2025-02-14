import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { AnimatedButton } from "../ui/Animations";
// import { AnimatedButton } from "../ui/Animations";

const menuVars = {
  initial: {
    scaleY: 0,
  },
  animate: {
    scaleY: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: [0.12, 0, 0.39, 0],
    },
  },
  exit: {
    scaleY: 0,
    transition: {
      duration: 0.5,
      delay: 0.5,
      ease: [0.22, 1, 0.33, 1],
    },
  },
};

const containerVars = {
  initial: {
    transition: { staggerChildren: 0.09, staggerDirection: -1 },
  },
  open: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.3,
      staggerDirection: 1,
    },
  },
};

const mobileVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  exit: {
    y: "30vh",
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },

  open: {
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0, 0.55, 0.45, 1],
    },
  },
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [open, setOpen] = useState(false);

  // console.log(open);

  return (
    <>
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 4, duration: 0.3 }}
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300  ${
          isScrolled ? "backdrop-blur-md  shadow-md" : ""
        }`}
      >
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="text-xl font-bold mix-blend-multiply">LOGO</div>
          <div className="hidden sm:block">
            <nav className="flex space-x-6 text-sm">
              <AnimatedButton className="w-fit hover:text-background p-1 rounded-lg">
                <Link href="#" className="">
                  Lorem Ipsum
                </Link>
              </AnimatedButton>

              <AnimatedButton className="w-fit hover:text-background p-1 rounded-lg">
                <Link href="#" className="">
                  Lorem Ipsum
                </Link>
              </AnimatedButton>

              <AnimatedButton className="w-fit hover:text-background p-1 rounded-lg">
                <Link href="#" className="">
                  Lorem Ipsum
                </Link>
              </AnimatedButton>
            </nav>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">Sign In</Button>
            <Button
              variant="outline"
              className="sm:hidden"
              onClick={() => setOpen(true)}
            >
              <Menu />{" "}
            </Button>
          </div>
        </div>
      </motion.header>
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            id="sideMenu"
            className="fixed sm:hidden top-0 left-0 w-full origin-top h-screen sm:h-0 z-50 bg-background  p-4 "
          >
            <motion.nav
              variants={containerVars}
              animate="open"
              initial="initial"
              exit="initial"
              className="flex flex-col space-y-6 text-sm h-full relative"
            >
              <div className="flex justify-between">
                <div className="text-xl font-bold mix-blend-multiply">LOGO</div>
                <Button variant="outline">Sign In</Button>
              </div>
              <motion.div variants={mobileVars}>
                <Link
                  onClick={() => setOpen(false)}
                  href="#"
                  className="text-button-primary text-xl hover:text-gray-600"
                >
                  Lorem Ipsum
                </Link>
              </motion.div>
              <motion.div variants={mobileVars}>
                <Link
                  onClick={() => setOpen(false)}
                  href="#"
                  className="text-button-primary text-xl hover:text-gray-600"
                >
                  Lorem Ipsum
                </Link>
              </motion.div>
              <motion.div variants={mobileVars}>
                <Link
                  onClick={() => setOpen(false)}
                  href="#"
                  className="text-button-primary text-xl hover:text-gray-600"
                >
                  Lorem Ipsum
                </Link>
              </motion.div>
              <motion.button
                onClick={() => setOpen(false)}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                whileTap={{ scale: 1.2 }}
                exit={{ y: 100, opacity: 0 }}
                className="w-full bg-button-primary absolute bottom-16 left-0 text-background text-xl font-medium py-1 rounded-xl "
              >
                Close
              </motion.button>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
