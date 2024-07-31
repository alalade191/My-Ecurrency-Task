"use client";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

export const Order = () => {
  return (
    <div className="w-full lg:px-20 px-5">
      <div className="mx-auto lg:flex-row flex flex-col items-center lg:justify-between justify-center w-full">
        <figure className=" relative">
          <Image
            src="/order.svg"
            width={200}
            height={200}
            alt="order"
            className="lg:w-[600px] w-full object-contain "
          />
          <div className="bg-white rounded-md font-normal mt-4 lg:mt-0 lg:absolute lg:top-[350px] lg:right-0 text-base lg:w-fit w-full lg:p-[30px] p-5 flex flex-col gap-1 shadow-custom-shadow">
            <p>😊 Promotes calm and relaxation.</p>
            <p>💤 Inhalation allows for a rapid effect.</p>
            <p>✅ 100% drug-free, plant-based ingredients.</p>
            <p>⚕️ 3rd-party lab tested.</p>
          </div>
        </figure>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:pl-20 pl-0 flex flex-col lg:items-start items-center lg:justify-normal justify-center lg:gap-6 gap-4 pt-5 max-w-[421px]"
        >
          <h3 className="font-bold lg:text-6xl text-3xl text-ambassadorBlue">
            Shop Now
          </h3>
          <p className="font-normal text-center lg:text-start text-base text-ambassadorBlue">
            Our Personal Diffuser is an aromatherapy device that contains a
            blend of melatonin, lavender, and chamomile. A few breaths of our
            plant-based essential oil mist will mellow you out, quiet the mind,
            and lull you to bed.
          </p>
          <Button className="bg-grape rounded-[5px] w-[225px]">
            Visit Shop
          </Button>
        </motion.div>
      </div>
    </div>
  );
};
