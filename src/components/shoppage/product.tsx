"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { Input } from "@/components/ui/input";

export const Product = () => {
  const [price, setPrice] = useState<string>("2");
  return (
    <div className="w-full lg:px-20 px-5">
      <div className="mx-auto flex lg:flex-row flex-col items-center justify-center  lg:justify-between">
        <figure className="relative">
          <Image
            src="/order.svg"
            width={200}
            height={200}
            alt="order"
            className="w-[600px] object-contain "
          />
        </figure>
        <div className="lg:pl-20 flex flex-col gap-6 pt-5 max-w-[421px] items-center justify-center">
          <h3 className="font-bold text-4xl text-ambassadorBlue">
            About Product
          </h3>
          <p className="font-normal text-base text-ambassadorBlue">
            Our Personal Diffuser is an aromatherapy device that contains a
            blend of melatonin, lavender, and chamomile. A few breaths of our
            plant-based essential oil mist will mellow you out, quiet the mind,
            and lull you to bed.
          </p>
          <div className=" font-normal  text-base w-fit  flex flex-col gap-1 ">
            <p>😊 Promotes calm and relaxation.</p>
            <p>💤 Inhalation allows for a rapid effect.</p>
            <p>✅ 100% drug-free, plant-based ingredients.</p>
            <p>⚕️ 3rd-party lab tested.</p>
          </div>

          <section className="flex items-center gap-[56px]">
            <div className="flex flex-col gap-2">
              <p>Price</p>
              <p>USD {price}</p>
            </div>
            <div className="flex flex-col gap-2">
              <p>Unit</p>
              <Input
                type="number"
                className="w-[63px]"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </section>

          <Button className="bg-grape rounded-[5px] w-[225px]">Buy</Button>
        </div>
      </div>
    </div>
  );
};
