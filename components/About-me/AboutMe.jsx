"use client";

import { useInView } from "react-intersection-observer";

import { aboutMeData } from "./aboutMeData";
import SkillsCard from "@helpers/SkillsCard";

const AboutMe = () => {
  const { ref: myref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <section
      className={`mt-48 ${inView && "slide-top"} translate-y-[500px]`}
      ref={myref}
    >
      <h1 className="text-center text-2xl font-semibold font-Poppins">
        More about me
      </h1>
      <div className="mt-10 flex justify-center">
        <div
          ref={myref}
          className={`home_css absolute w-full -z-10 hidden lg:block`}
        >
          <div className="moreContent bg-white h-[800px]"></div>
        </div>

        <div className="flex flex-row justify-evenly items-center h-[800px] w-[1000px] ">
          {aboutMeData.map((element) => (
            <div key={element.id}>
              <SkillsCard key={element.id}>
                <div
                  className={`${element.unique} relative flex items-center justify-center`}
                >
                  <h3 className="font-medium font-Poppins text-lg ">
                    {element.title}
                  </h3>
                </div>
              </SkillsCard>
              <ul className="mt-5 flex flex-col items-center">
                {element.itemList.map((item) => (
                  <SkillsCard key={item}>
                    <li className="font-Poppins font-medium text-regularText text-sm">
                      {item}
                    </li>
                  </SkillsCard>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
