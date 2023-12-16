import SocialLinks from "@helpers/SocialLinks";
import Image from "next/image";

const Footer = () => {
  return (
    <section className="mt-36">
      <div className="flex justify-center items-center mb-52">
        <Image
          className="absolute"
          src="/assets/images/Group 16.png"
          alt="soffff"
          width={156}
          height={142}
        />
        <h1 className="font-Signika font-400 text-2xl ext-thatAll ">
          That&apos;s All folks
        </h1>
      </div>
      <SocialLinks text={"@The need for medical attention is very important"} />
    </section>
  );
};

export default Footer;
