import Link from "next/link";

export default function Logo() {
  return (
    <div className="before:['*'] before:w-[110%]  before:h-[1px] before:bg-primaryBg before:absolute before:bottom-[0%] before:left-[75%] before:translate-x-[-50%] relative">
      <Link href="/">
        <p className="font-Signika text-2xl font-bold">
          Dream<span className="text-lg">z</span>
        </p>
      </Link>
    </div>
  );
}
