"use client";

import SkillsConstruct from "@components/Skills/SkillsContruct";
import { useInView } from "react-intersection-observer";

const Skills = () => {
  const { ref: myRef, inView: myItem } = useInView({
    triggerOnce: true,
    // threshold: 0.1,
  });

  return (
    <section
      className={`mt-40 ${myItem && "slide-top"} translate-y-[500px]`}
      ref={myRef}
    >
      <h1 className="text-center text-2xl font-semibold font-Poppins">
        Skills
      </h1>
      <div className="mt-24">
        <div>
          <SkillsConstruct />
          <div className="w-full h-[70vh] bg-box1 relative overflow-hidden z-10">
            <div className="beforeElement z-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
