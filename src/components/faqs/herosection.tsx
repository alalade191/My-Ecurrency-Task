"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Header } from "../header";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <div className="lg:pb-[80px] pb-[40px] relative">
      <section className="bg-[#FBF9F2] w-full lg:h-[500px] h-[300px]">
        <Header />

        <div className="lg:pl-20 flex flex-col items-center justify-center lg:items-start lg:justify-normal gap-4 lg:gap-6 lg:pt-[90px] pt-[50px]">
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
            className="font-bold lg:text-6xl text-3xl text-ambassadorBlue"
          >
            How can we assist?
          </motion.h3>
          <div className="relative">
            <Input
              className="rounded-[10px] bg-white lg:w-[500px] min-w-full pl-14 py-3 h-[50px]"
              placeholder="Search FAQs here"
            />
            <Search className=" absolute top-3 left-5" />
          </div>
        </div>
      </section>
    </div>
  );
};
