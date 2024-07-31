"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FaqAccordian } from "./faq";

export const FaqTab = () => {
  return (
    <div className="w-full !lg:mt-[50px] px-5 md:px-8 lg:px-20 relative lg:mb-[185px] mb-[100px]">
      <Tabs defaultValue="product">
        <div className="lg:flex gap-10 items-start h-full">
          <div>
            <TabsList className=" px-5 h-full flex lg:flex-col items-start lg:gap-6 gap-4 rounded-none pb-0 !bg-transparent">
              <TabsTrigger
                value="product"
                className="bg-white data-[state=active]:bg-[#FFD723]/10 data-[state=active]:rounded-[4px] data-[state=active]:text-ambassadorBlue data-[state=active]:font-bold data-[state=active]:text-lg data-[state=active]:border data-[state=active]:border-[#FFD723]/10 text-lg font-normal "
              >
                <p className=" flex items-center justify-center text-semibold text-base lg:text-2xl">
                  Sleepstiq{" "}
                  <span className="bg-[#FFD723]/10 lg:p-2">Product</span>
                </p>
              </TabsTrigger>
              <TabsTrigger
                value="order"
                className="bg-white data-[state=active]:bg-[#FFD723]/10 data-[state=active]:rounded-[4px] data-[state=active]:text-ambassadorBlue data-[state=active]:font-bold data-[state=active]:text-lg data-[state=active]:border data-[state=active]:border-[#FFD723]/10 text-lg font-normal "
              >
                <p className=" flex items-center justify-center text-semibold text-base lg:text-2xl">
                  Order
                </p>
              </TabsTrigger>
              <TabsTrigger
                value="melan"
                className="bg-white data-[state=active]:bg-[#FFD723]/10 data-[state=active]:rounded-[4px] data-[state=active]:text-ambassadorBlue data-[state=active]:font-bold data-[state=active]:text-lg data-[state=active]:border data-[state=active]:border-[#FFD723]/10 text-lg font-normal "
              >
                <p className=" flex items-center justify-center text-semibold text-base lg:text-2xl">
                  Melantonin
                </p>
              </TabsTrigger>
            </TabsList>
          </div>

          <div>
            <TabsContent value="product" className="">
              <FaqAccordian />
            </TabsContent>
            <TabsContent value="order" className="">
              <FaqAccordian />
            </TabsContent>
            <TabsContent value="melan" className="">
              <FaqAccordian />
            </TabsContent>
          </div>
        </div>
      </Tabs>
    </div>
  );
};
