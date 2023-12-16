import Image from "next/image";
import Link from "next/link";

const SocialLinks = ({ text }) => {
  return (
    <div className=" mb-4 px-10 flex justify-between relative transCombo">
      <div className="flex ">
        <div className="w-7 h-7 rounded-[50%] bg-regularColor flex justify-center items-center mx-1 active:opacity-50 transition-all">
          <Link href="https://twitter.com/drealmlex/">
            <Image
              className="w-5"
              src="/assets/images/icons8-twitter-48.png"
              alt="twitter"
              width={30}
              height={30}
            ></Image>
          </Link>
        </div>
        <div className="w-7 h-7 rounded-[50%] bg-regularColor flex justify-center items-center mx-2  active:opacity-50 transition-all">
          <Link href="http://linkedin.com/in/gabriel-dream-043268247">
            <Image
              className="w-5"
              src="/assets/images/icons8-linkedin-48.png"
              alt="linkedin"
              width={30}
              height={30}
            ></Image>
          </Link>
        </div>
      </div>
      <div className="pt-8">
        <p className="text-regularText font-Signika font-500 text-sm">{text}</p>
      </div>
    </div>
  );
};

export default SocialLinks;
