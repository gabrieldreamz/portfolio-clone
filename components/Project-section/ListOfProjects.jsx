import Image from "next/image";
import Link from "next/link";

import react from "@public/assets/images/icons8-react-native-48.png";

export default function ListOfProjects({ image, bg, tools, date, name }) {
  return (
    <>
      <div className="w-[375px]">
        <Link
          href="#"
          className="text-xl text-black font-Poly font-medium  before:['*'] before:w-[100%]  before:h-[1px] before:bg-black before:absolute before:bottom-[0%] before:left-[58%] before:translate-x-[-50%] relative"
        >
          {name}
        </Link>
        <div
          className={`mt-5 w-full max-w-[420px] h-[250px] ${bg} flex items-center justify-center relative`}
        >
          <Link href="#" className="flex items-center justify-center">
            <Image src={image} alt="Dream Tropical" className="w-[90%]" />
          </Link>
          <div className="flex flex-col gap-2 items-center justify-center font-Inter text-white font-medium text-xl z-10 w-full h-full absolute bg-black/60">
            In production
            <Image src={react} alt="react icon" className="w-6 rotate-center" />
          </div>
        </div>
        <div className="flex flex-col items-end mt-2">
          <p className="font-Roboto font-medium text-sm">{tools}</p>
          <p className="font-Roboto text-sm text-gray-600">{date}</p>
        </div>
      </div>
    </>
  );
}
