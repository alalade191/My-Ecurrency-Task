import { ArrowRight2 } from "iconsax-react";
import Image from "next/image";
import React from "react";

export const Customer = () => {
  return (
    // <div className="w-full h-fit lg:px-20 px-4 md:px-8">
    <section className="w-full px-20 lg:flex lg:items-center lg:justify-between  h-full">
      <div className="flex flex-col gap-12 h-full">
        <div className="flex flex-col gap-7">
          <p className="font-normal text-sm text-ambassadorBlue">
            Our Amazing Story
          </p>
          <h3 className="font-bold text-4xl text-ambassadorBlue">
            10k+Happy{" "}
            <span className="bg-[#FFD723]/10 pr-2 pb-4">Customers</span>
          </h3>
        </div>
        <div className="flex flex-col gap-7">
          <p className="font-normal text-base text-night max-w-[475px]">
            There’s no secret sauce, no wizard behind the curtain. What makes
            Aerolab tick is an interdisciplinary team with a framework that
            fosters candid collaboration.
          </p>
          <div className="flex font-bold items-center gap-1 lg:text-xl text-lg text-ambassadorBlue">
            <ArrowRight2 size="24" color="#000000" variant="Bold" />
            <p className="underline">More know About us</p>
          </div>
        </div>
      </div>
      {/* <div className="flex justify-end h-[455px]">
        <Image
          src="/customer.svg"
          width={200}
          height={200}
          alt="customer"
          className="w-full h-full object-cover"
        />
      </div> */}
    </section>
    // </div>
  );
};
