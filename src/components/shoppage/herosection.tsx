"use client";
import React from "react";
import { Header } from "../header";
export const HeroSection = () => {
  return (
    <div className=" lg:pb-[80px] pb-[40px]">
      <section className="bg-[url('/relax.png')] w-full lg:h-[500px] h-[300px] bg-cover bg-top bg-no-repeat ">
        <Header />
        <div className="lg:pl-20 pl-0 flex flex-col gap-6 items-center lg:items-start lg:justify-normal justify-center pt-[102px]">
          <p className="font-normal text-ambassadorBlue text-lg">
            We&apos;re here to help you
          </p>
          <h3 className="font-bold lg:text-6xl text-5xl text-ambassadorBlue">
            Relax & Rest
          </h3>
        </div>
      </section>
    </div>
  );
};
