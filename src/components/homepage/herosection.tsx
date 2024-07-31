"use client";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { Header } from "../header";
import Link from "next/link";
import { motion } from "framer-motion";
export const HeroSection = () => {
  const images = [
    "/googlee.svg",
    "/forbes.svg",
    "/bloom.svg",
    "/review.svg",
    "/influence.svg",
  ];
  return (
    <div className=" pb-[80px]">
      <section className="bg-[url('/rest.png')] w-full lg:h-[500px] h-[380px] bg-cover bg-center bg-no-repeat">
        <Header />
        <div className="lg:pl-20 flex flex-col items-center lg:items-start lg:justify-normal justify-center gap-6 pt-5">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="font-normal text-ambassadorBlue text-lg"
          >
            We&apos;re here to help you
          </motion.p>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="font-bold lg:text-6xl text-5xl text-ambassadorBlue"
          >
            Relax & Rest
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="font-normal text-base text-ambassadorBlue max-w-[300px]"
          >
            With the aid of our Melatonin Sleepstiq, we can assure you that you
            can get quality sleep.
          </motion.p>

          <Link href="/shop">
            <Button className="bg-grape rounded-[5px] w-[225px]">
              Visit Shop
            </Button>
          </Link>
        </div>
      </section>
      <div className="lg:pl-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white rounded-md flex items-center lg:justify-between justify-center gap-3 lg:gap-0 lg:px-[72px] lg:py-[20px] py-[15px] w-full -mt-10 shadow-custom-shadow"
        >
          {images.map((item, idx) => (
            <Image
              src={item}
              width={100}
              height={100}
              alt=""
              key={idx}
              className="lg:w-[100px] lg:h-[100px] w-[60px] h-[60px] object-contain"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};
