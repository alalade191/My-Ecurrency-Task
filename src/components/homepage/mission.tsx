import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

export const Mission = () => {
  return (
    <div className=" lg:pl-20  pl-0 lg:mt-[160px] mt-[50px]">
      <div className="flex lg:flex-row flex-col gap-5 lg:gap-0 items-center lg:justify-between justify-center">
        <div className="lg:pl-20 pl-0 flex flex-col gap-6 lg:max-w-[421px] max-w-[300px] lg:justify-normal lg:items-start justify-center items-center">
          <h3 className="font-bold lg:text-4xl text-3xl text-ambassadorBlue">
            Our Mission
          </h3>
          <p className="font-normal text-base text-[#213842]/60">
            We started Sleepstiq with 1 simple goal: to be your best friend at
            bedtime. We, just like you, deal with stress, unease, and trouble
            sleeping from a number of silly things like school, work, screens,
            numbers, and people. That&apos;s why we created products that aim to
            -
          </p>
          <div className="flex flex-col gap-1 font-normal text-base text-[#213842]/60">
            <p>✓ Promote Calm </p>
            <p>✓ Support Sleep</p>
            <p>✓ Reduce Stress</p>
            <p>✓ Aid Relaxation</p>
          </div>
        </div>
        <figure className="lg:w-[600px] w-full">
          <Image
            src="/mission.svg"
            width={200}
            height={200}
            alt="order"
            className="w-full object-contain "
          />
        </figure>
      </div>
    </div>
  );
};
