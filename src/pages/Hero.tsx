import { aleo } from "@/ui/fonts/fonts";
import Image from "next/image";
import React from "react";
import { FaLinkedin, FaGithub, FaBehance } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="grid grid-cols-2 items-center h-screen w-3/4 gap-6">
      <div className="flex flex-col gap-3">
        <h1 className={`${aleo.className} text-7xl text-aqua font-bold`}>
          Fercito Gerdez
        </h1>
        <p className="text-lg">
          Web designer and Mid-level JavaScript Dev, working with Next.js and
          React.js
        </p>
        <div className="flex gap-4 mt-6">
          <a href="">
            <FaLinkedin size={25} />
          </a>
          <a href="">
            <FaGithub size={25} />
          </a>
          <a href="">
            <FaBehance size={25} />
          </a>
        </div>
      </div>
      <div className="relative flex justify-center items-center">
        <Image
          src="/hero.png"
          width={600}
          height={600}
          alt="a"
          className="fill-white text-white z-10 w-3/4"
        />
        <div className="h-96 w-96 bg-aqua absolute rounded-full left-20 z-0 blur-3xl"></div>
      </div>
    </section>
  );
}
