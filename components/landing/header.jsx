import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";

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

  console.log(open);

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
              <a href="#" className="text-button-primary hover:text-gray-600">
                Lorem Ipsum
              </a>
              <a href="#" className="text-button-primary hover:text-gray-600">
                Lorem Ipsum
              </a>
              <a href="#" className="text-button-primary hover:text-gray-600">
                Lorem Ipsum
              </a>
            </nav>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">Sign In</Button>
          </div>
        </div>
      </motion.header>
      {/* <AnimatePresence>
        {open && (
          <motion.div>
            <nav className="flex space-x-6 text-sm">
              <a href="#" className="text-button-primary hover:text-gray-600">
                Lorem Ipsum
              </a>
              <a href="#" className="text-button-primary hover:text-gray-600">
                Lorem Ipsum
              </a>
              <a href="#" className="text-button-primary hover:text-gray-600">
                Lorem Ipsum
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence> */}
    </>
  );
}
