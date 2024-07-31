"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Sling as Hamburger } from "hamburger-react";

export const Header = () => {
  const pathName = usePathname();
  const navbar = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Shop",
      link: "/shop",
    },
    {
      name: "FAQs",
      link: "/faqs",
    },
  ];

  const [isOpen, setOpen] = useState(false);

  const renderNavLinks = () =>
    navbar.map(({ name, link }) => (
      <Link
        href={link}
        key={name}
        className={clsx(
          link === pathName
            ? " font-semibold text-lg text-ambassadorBlue"
            : "font-normal text-lg text-ambassadorBlue"
        )}
      >
        <p className="mb-7 lg:mb-0" onClick={() => setOpen(false)}>
          {name}
        </p>
      </Link>
    ));

  return (
    <header className="w-full px-5 md:px-8 lg:px-20">
      <nav className=" mx-auto md:py-5 flex items-center lg:justify-normal justify-between lg:gap-[300px] w-full">
        <Link href="/">
          <Image
            src="/logo.png"
            width={100}
            height={100}
            alt="Logo"
            className="w-full h-full object-contain hidden lg:block"
          />
          <Image
            src="/logo.png"
            width={80}
            height={80}
            alt="Logo"
            className=" object-contain flex lg:hidden mt-2"
            onClick={() => setOpen(false)}
          />
        </Link>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-0 left-0 w-full bg-sarGrey p-4 z-10">
            <Image
              src="/logo.png"
              width={80}
              height={80}
              alt="Logo"
              className=" object-contain flex lg:hidden mb-7"
              onClick={() => setOpen(false)}
            />
            {renderNavLinks()}
          </div>
        )}

        {/* Desktop Menu */}
        <div className="lg:flex items-center gap-6 hidden">
          {renderNavLinks()}
        </div>

        <div className="block lg:hidden mt-2 z-20">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </nav>
    </header>
  );
};
