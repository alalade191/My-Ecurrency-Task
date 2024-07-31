import React from "react";
import { HeroSection } from "./herosection";
import { Product } from "./product";
import { Review } from "../homepage/review";

export const ShopPage = () => {
  return (
    <div>
      <HeroSection />
      <Product />
      <div className="lg:px-20 px-5 w-full lg:my-[64px] my-[30px]">
        <div className="w-full h-[1px] bg-[#213842]/10"></div>
      </div>
      <div className="lg:pb-[73px] pb-[100px]">
        <Review />
      </div>
    </div>
  );
};
