"use client";

import Link from "next/link";
import { HiEnvelope } from "react-icons/hi2";
import Image from "next/image";

export const IntroSection = () => {
  return (
    <section className="box mb-64 relative">
      <div className="shadow_css  absolute  w-full -z-10 ">
        <div className="content bg-white h-[750px] p-28 "></div>
      </div>

      {/* ----------------------------------------------------- */}
      <div className="hidden lg:flex justify-center items-center">
        <div className="max-w-sm  xl:max-w-xl mt-12">
          <h3 className="font-Poppins text-2xl font-medium leading-normal">
            Hey there, <br /> I&apos;m Gabriel Dream
          </h3>
          <h1 className="text-tongueColor font-Roboto text-5xl font-medium leading-relaxed tracking-wide">
            WHAT DO I DO?
          </h1>
          <p className="font-Roboto text-lg max-w-[500px] text-gray-700 tracking-wide">
            I love bridging the gap between design and functionality,
            transforming concepts into real-world applications. I have the
            skills to bring your web projects to life.
          </p>
          <Link href="/hire-me" className="inline-block">
            <button className="flex items-center py-[6px] px-7 bg-tongueColor rounded-sm text-white text-base xl:text-lg font-medium justify-between mt-8 animateButton">
              Hire me
              <span className="ml-2">
                <HiEnvelope />
              </span>
            </button>
          </Link>
        </div>
        <div className=" mt-24 ml-14 ">
          <Image
            className=" w-96 xl:w-[430px] "
            src="/assets/images/Group 20.png"
            alt="Cute Dog"
            width={637}
            height={780}
          />
        </div>
      </div>
    </section>
  );
};
