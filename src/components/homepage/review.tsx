"use client";
import React from "react";
import { review } from "./dummydata";
import Image from "next/image";
import { motion } from "framer-motion";

export const Review = () => {
  const stars = [
    "/star.svg",
    "/star.svg",
    "/star.svg",
    "/star.svg",
    "/star.svg",
  ];
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.4 }}
      className="w-full flex flex-col items-center justify-center lg:pt-[152px] pt-[100px]"
    >
      <div className="lg:flex-row flex flex-col gap-5 lg:gap-0 lg:items-start items-center lg:justify-between justify-center w-full lg:pl-20 pl-0">
        {review.map((item, idx) => (
          <div
            className="w-[306px] h-[202px] bg-[#FBF9F2] rounded-md p-5 flex flex-col justify-between"
            key={idx}
          >
            <p className="font-normal text-base text-kelp italic max-w-[268px]">
              {item.review}
            </p>
            <div className="flex flex-col gap-2">
              <p className="font-bold text-base text-kelp">{item.name}</p>
              <div className="flex items-center gap-2">
                {stars.map((item, idx) => (
                  <Image
                    key={idx}
                    src={item}
                    width={12}
                    height={12}
                    alt="star"
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
