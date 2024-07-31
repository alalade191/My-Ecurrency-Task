import React from "react";
import { products, review } from "./dummydata";
import Image from "next/image";

export const Product = () => {
  const stars = [
    "/star.svg",
    "/star.svg",
    "/star.svg",
    "/star.svg",
    "/star.svg",
  ];
  return (
    <section className="w-full lg:pl-20 pl-0 lg:px-0  lg:pb-[225px] pb-[100px] flex flex-col items-center justify-center gap-12">
      <h2 className="text-kelp font-bold lg:text-4xl text-3xl">
        Product Reviews
      </h2>
      <div className="flex lg:flex-row flex-col lg:items-start items-center lg:justify-between gap-5 lg:gap-0 justify-center w-full">
        {products.map((item, idx) => (
          <div
            className="w-[306px] lg:h-[420px] h-[300px] bg-white shadow-custom-shadow rounded-md p-5 flex flex-col gap-4"
            key={idx}
          >
            <figure className="w-full lg:h-[210px] h-[60px]">
              <Image
                key={idx}
                src={item.image}
                width={200}
                height={200}
                alt="product"
                className="w-full h-full object-contain "
              />
            </figure>

            <div className="flex flex-col justify-between h-full gap-2">
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
          </div>
        ))}
      </div>
    </section>
  );
};
