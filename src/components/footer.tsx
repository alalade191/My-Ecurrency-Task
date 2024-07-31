"use client";
import Image from "next/image";
import React from "react";

export const Footer = () => {
  const socials = [
    "/facebook.svg",
    "/twitter.svg",
    "/google.svg",
    "/linkedin.svg",
  ];
  return (
    <div className="relative bg-[url('/background.svg')] p-9 bg-cover w-full bg-no-repeat bg-center">
      <div className="absolute inset-0 bg-[#12305B]/95"></div>
      <div className="z-[20] relative">
        <figure className="flex items-center justify-center relative z-[20]">
          <Image
            src="/footerLogo.png"
            width={100}
            height={100}
            alt="Logo"
            className=" object-contain block"
          />
        </figure>

        <section className="text-white flex lg:flex-row flex-col gap-6 lg:gap-0 items-start justify-between pt-[48px]">
          <div className="lg:flex hidden flex-col gap-[24px]">
            <h3 className="font-semibold text-base">COMPANY</h3>
            <div className="flex flex-col gap-[17px] ">
              <p>About</p>
              <p>Blog</p>
              <p>Contact</p>
              <p>Jobs</p>
            </div>
          </div>
          <div className="lg:flex hidden flex-col gap-[24px]">
            <h3 className="font-semibold text-base">CONTACT</h3>
            <div className="flex flex-col gap-[17px]">
              <p className="font-normal text-base text-sarGrey">Phone</p>
              <p className="font-semibold text-base">+234 708 507 3128</p>
              <p className="font-normal text-base text-sarGrey">Address</p>
              <p className="font-semibold text-base">
                16, Ogindipe Close, Upston Close
              </p>
            </div>
          </div>
          <div className=" lg:hidden flex items-start justify-between w-full pb-[24px] lg:pb-0">
            <div className="flex flex-col gap-[24px]">
              <h3 className="font-semibold text-base">COMPANY</h3>
              <div className="flex flex-col gap-[17px] ">
                <p>About</p>
                <p>Blog</p>
                <p>Contact</p>
                <p>Jobs</p>
              </div>
            </div>
            <div className="flex flex-col gap-[24px]">
              <h3 className="font-semibold text-base">CONTACT</h3>
              <div className="flex flex-col gap-[17px]">
                <p className="font-normal text-base text-sarGrey">Phone</p>
                <p className="font-semibold text-base">+234 708 507 3128</p>
                <p className="font-normal text-base text-sarGrey">Address</p>
                <p className="font-semibold text-base text-wrap lg:w-full max-w-[150px]">
                  16, Ogindipe Close, Upston Close
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[24px] max-w-[463px] lg:items-start lg:justify-normal items-center justify-center">
            <h3 className="font-semibold text-base">CONSUMER ADVISORY</h3>
            <p className=" font-normal text-base lg:text-start text-center">
              These statements have not been evaluated by the Food and Drug
              Administration. This product is not intended to diagnose, treat,
              cure, or prevent any disease. This product should be used only as
              directed on the label. All trademarks and copyrights are property
              of their respective owners and not affiliated with nor do they
              endorse this product. Results may vary.
            </p>
            <p className="font-normal text-center lg:text-start text-base">
              By using our website or product, you agree to follow our{" "}
              <span className="text-[#64a5c6]">terms of service.</span>
            </p>
          </div>
          <div className="lg:h-[210px] lg:w-[1px] h-[1px] w-full bg-earth lg:rotate-180 rotate-0"></div>
          <div className="flex flex-col gap-[24px]">
            <h3 className="font-semibold text-center lg:text-start text-base">
              GET IN TOUCH
            </h3>
            <p className="font-normal text-center lg:text-start text-base text-sarGrey">
              Feel free to get in touch with us vai email
            </p>
            <p className=" font-bold text-center lg:text-start text-2xl">
              hello@sleepstiq.com
            </p>
            <div className="flex items-center gap-2 justify-center lg:justify-normal">
              {socials.map((item, idx) => (
                <Image
                  key={idx}
                  src={item}
                  width={33}
                  height={33}
                  alt="socials"
                />
              ))}
            </div>
            <p className="pt-8 font-normal text-center lg:text-start text-sm text-sarGrey">
              © 2020@sleepstiq. All Rights Reserved.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};
