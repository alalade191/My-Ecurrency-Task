"use client";
import { motion } from "framer-motion";
import { ArrowRight2 } from "iconsax-react";
import Image from "next/image";
import React from "react";

export const Customer = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="w-full lg:px-20 px-5 lg:flex-row flex flex-col gap-5 lg:items-center justify-center lg:justify-between  h-full"
    >
      <div className="flex flex-col lg:gap-10 gap-6  h-full">
        <div className="flex flex-col gap-5 items-center lg:items-start justify-normal lg:justify-normal">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:font-normal lg:text-sm font-medium text-base text-ambassadorBlue"
          >
            Our Amazing Story
          </motion.p>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="font-bold lg:text-4xl text-2xl text-ambassadorBlue"
          >
            10k+Happy{" "}
            <span className="bg-[#FFD723]/10 pr-2 pb-4">Customers</span>
          </motion.h3>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col gap-6"
        >
          <p className="font-normal text-base text-night max-w-[475px]">
            There’s no secret sauce, no wizard behind the curtain. What makes
            Aerolab tick is an interdisciplinary team with a framework that
            fosters candid collaboration.
          </p>
          <div className="flex font-bold items-center justify-center lg:justify-normal gap-1 lg:text-xl text-lg text-ambassadorBlue">
            <ArrowRight2 size="24" color="#000000" variant="Bold" />
            <p className="underline">More know About us</p>
          </div>
        </motion.div>
      </div>
      <div className="flex justify-end shadow-custom-shadow">
        <Image
          src="/customerr.png"
          width={200}
          height={200}
          alt="customer"
          objectFit="cover"
          className="w-full h-full object-cover shadow-custom-shadow"
        />
      </div>
    </motion.section>
  );
};
