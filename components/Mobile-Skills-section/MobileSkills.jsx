import HeaderText from "@helpers/HeaderText";
import MobileSkillsConstruct from "./MobileSkillsContruct";

import react from "@public/assets/images/icons8-react-native-48.png";
import typescript from "@public/assets/images/icons8-typescript-48.png";
import nextjs from "@public/assets/images/icons8-nextjs-48.png";
import mongodb from "@public/assets/images/icons8-mongodb-48.png";
import nodejs from "@public/assets/images/icons8-nodejs-48.png";
import ParagraphText from "@helpers/ParagraphText";

export default function MobileSkills() {
  const dummmyData = [
    { id: 2, skills: 3, name: "React", image: react },
    { id: 3, skills: 2, name: "TypeScript", image: typescript },
    { id: 4, skills: 1, name: "Next Js", image: nextjs },
    { id: 5, skills: 2, name: "MongoDB", image: mongodb },
    { id: 6, skills: 2, name: "Node JS", image: nodejs },
  ];

  return (
    <section className="mt-20 px-6" id="skills-section">
      <HeaderText text="Top Skills" />
      <ParagraphText
        text={
          "In my day-to-day work, I utilize versatile skill set that forms the foundation of my success in the digital realm"
        }
      />
      <div className="max-w-[420px] mobile:mx-auto p-3 border-[1px] border-gray-200 mt-10 flex flex-col gap-3">
        {dummmyData.map((lang) => (
          <MobileSkillsConstruct
            image={lang.image}
            key={lang.id}
            name={lang.name}
            skills={lang.skills}
          />
        ))}
      </div>
    </section>
  );
}
