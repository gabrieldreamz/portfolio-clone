import Image from "next/image";
import boy from "@public/assets/images/sure.png";

export default function MobileIntroImage() {
  return (
    <>
      <div className="flex justify-end mobile:justify-center  mobile:mt-8 max-w-[420px] mobile:max-w-full">
        <Image
          src={boy}
          alt="A boy standing"
          className="min-w-[300px] max-w-[360px]"
        />
      </div>
    </>
  );
}
