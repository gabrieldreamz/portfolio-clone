import HeaderText from "@helpers/HeaderText";
import MobileProjectConstruct from "./MobileProjectContruct";

import DreamTropical from "@public/assets/images/DreamTropical.png";
import ExpenseTracker from "@public/assets/images/expense-tracker.png";
import NerdProject from "@public/assets/images/nerd-project.png";
import SEOWriting from "@public/assets/images/seo-writing.png";
import ParagraphText from "@helpers/ParagraphText";

export default function MobileProject() {
  const dummyData = [
    {
      id: 1,
      name: "DreamTropical.io",
      date: "May, 2023",
      image: DreamTropical,
      tools: "Next JS, Tailwind Css, MongoDB",
      bg: "bg-slate-300",
      link: "#",
    },
    {
      id: 2,
      name: "Nerd Project",
      date: "May, 2022",
      image: NerdProject,
      tools: "Html, Css, Javascipt",
      bg: "bg-purple-100",
      link: "#",
    },
    {
      id: 3,
      name: "SEO Writing",
      date: "May, 2023",
      image: SEOWriting,
      tools: "Next JS, Tailwind Css",
      bg: "bg-gray-100",
      link: "#",
    },
    {
      id: 4,
      name: "Expense Tracker",
      date: "May, 2023",
      image: ExpenseTracker,
      tools: "React, Css, Firebase",
      bg: "bg-black",
      link: "#",
    },
  ];

  return (
    <section
      className="mt-20 px-6 mobile:flex mobile:flex-col items-center"
      id="project-section"
    >
      <HeaderText text="Recent Projects" />
      <ParagraphText text="I'm excited to share these projects with you and showcase my journey as a web developer. Feel free to explore and reach out to discuss how I can contribute to your next digital venture!" />
      <div className="mt-20">
        {dummyData.map((project) => (
          <MobileProjectConstruct
            key={project.id}
            name={project.name}
            date={project.date}
            image={project.image}
            bg={project.bg}
            tools={project.tools}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}
