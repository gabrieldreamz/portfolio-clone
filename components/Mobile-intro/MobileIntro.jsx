import Link from "next/link";
import MobileIntroImage from "./MobileIntroImage";
import { HiMail } from "react-icons/hi";

export default function MobileIntro() {
  return (
    <>
      <div className="px-6 mt-10 mobile:flex items-center mobile:flex-col">
        <h3 className="font-Poly mobile:text-center text-3xl font-medium leading-normal">
          Hi There, <br />
          I&apos;m Gabriel Dream
        </h3>
        <h1 className="text-tongueColor font-Inter text-4xl font-medium leading-relaxed tracking-wider">
          WHAT DO I DO?
        </h1>
        <p className="font-Inter mobile:text-center text-lg max-w-[375px] mobile:max-w-[500px] text-gray-700 tracking-wide">
          I love bridging the gap between design and functionality, transforming
          concepts into real-world applications. I have the skills to bring your
          web projects to life.
        </p>
        <div className="inline-block">
          <Link
            href="#contact-me"
            className="mt-5 bg-tongueColor px-5 rounded-sm py-[6px] font-Inter text-white tracking-wide flex items-center gap-2"
          >
            Hire me <HiMail size={20} />
          </Link>
        </div>
      </div>
      <MobileIntroImage />
    </>
  );
}
