"use client";
import React from "react";
import { Header } from "../header";
import { motion } from "framer-motion";
export const HeroSection = () => {
  return (
    <div className=" lg:pb-[80px] pb-[40px]">
      <section className="bg-[url('/relax.png')] w-full lg:h-[500px] h-[300px] bg-cover bg-top bg-no-repeat ">
        <Header />
        <div className="lg:pl-20 pl-0 flex flex-col lg:gap-6 gap-3 items-center lg:items-start lg:justify-normal justify-center lg:pt-[102px] pt-[50px]">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="font-medium text-ambassadorBlue text-2xl"
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
        </div>
      </section>
    </div>
  );
};
