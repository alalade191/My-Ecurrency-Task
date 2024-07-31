"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Header } from "../header";

export const HeroSection = () => {
  return (
    <div className="lg:pb-[80px] pb-[40px]">
      <Header />
      <section className="bg-[#FBF9F2] w-full lg:h-[400px] h-[300px]">
        <div className="lg:pl-20 flex flex-col items-center justify-center lg:items-start lg:justify-normal gap-4 lg:gap-6 lg:pt-[102px] pt-[60px]">
          <p className="font-normal text-ambassadorBlue text-lg">
            We&apos;re here to help you
          </p>
          <h3 className="font-bold lg:text-6xl text-4xl text-ambassadorBlue">
            How can we assist?
          </h3>
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
