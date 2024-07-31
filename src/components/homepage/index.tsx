"use client";
import React from "react";
import { HeroSection } from "./herosection";
import { Customer } from "./customer";
import { Review } from "./review";
import { Order } from "./order";
import { Mission } from "./mission";
import { Shop } from "./shop";
import { Product } from "./product";

export const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Customer />
      <Review />
      <div className="lg:px-20 px-5 w-full my-[64px]">
        <div className="w-full h-[1px] bg-[#213842]/10"></div>
      </div>
      <Order />
      <Mission />
      <Shop />
      <div className="lg:px-20 px-5 w-full lg:mt-[100px] mt-[40px] lg:mb-[90px] mb-[40px]">
        <div className="w-full h-[1px] bg-[#213842]/10"></div>
      </div>
      <Product />
    </div>
  );
};
