"use client";
import React from "react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

export const Shop = () => {
  return (
    <div className="w-full flex items-center justify-center lg:mt-[140px] mt-[50px] px-5 lg:px-0">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col items-center gap-6 max-w-[915px]"
        >
          <h3 className="font-bold text-4xl text-ambassadorBlue">Shop Now</h3>
          <p className="font-normal text-base text-center text-[#213842]/60">
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
