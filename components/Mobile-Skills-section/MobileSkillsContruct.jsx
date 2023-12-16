import Image from "next/image";

export default function MobileSkillsConstruct({ image, name, skills }) {
  return (
    <>
      <div className=" flex items-center bg-gray-100 py-2 px-3">
        <div className="w-[42px] h-[42px] bg-black/5 rounded-[50%] flex items-center justify-center">
          <Image src={image} alt="Firebase" className="w-[30px]" />
        </div>
        <div className=" ml-3 w-[80%] flex justify-between">
          <p className="font-Inter font-medium  -leading-relaxed">{name}</p>
          <p className="font-Inter text-sm text-gray-600">
            {skills} {skills > 1 ? "years" : "year"}
          </p>
        </div>
      </div>
    </>
  );
}
