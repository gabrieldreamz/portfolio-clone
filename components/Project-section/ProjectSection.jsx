"use client";

import { useInView } from "react-intersection-observer";
import ListOfProjects from "./ListOfProjects";

import DreamTropical from "@public/assets/images/DreamTropical.png";
import ExpenseTracker from "@public/assets/images/expense-tracker.png";
import NerdProject from "@public/assets/images/nerd-project.png";
import SEOWriting from "@public/assets/images/seo-writing.png";

export default function Project() {
  const { ref: myRef, inView: myItem } = useInView({
    triggerOnce: true,
    // threshold: 0.1,
  });

  const dummyData = [
    {
      id: 1,
      name: "DreamTropical.io",
      date: "May, 2023",
      image: DreamTropical,
      tools: "Next JS, Tailwind Css, MongoDB",
      bg: "bg-slate-300",
    },
    {
      id: 2,
      name: "Nerd Project",
      date: "May, 2022",
      image: NerdProject,
      tools: "Html, Css, Javascipt",
      bg: "bg-purple-100",
    },
    {
      id: 3,
      name: "SEO Writing",
      date: "May, 2023",
      image: SEOWriting,
      tools: "Next JS, Tailwind Css",
      bg: "bg-gray-100",
    },
    {
      id: 4,
      name: "Expense Tracker",
      date: "May, 2023",
      image: ExpenseTracker,
      tools: "React, Css, Firebase",
      bg: "bg-black",
    },
  ];

  return (
    <section
      className={`mt-16 ${
        myItem && "slide-top"
      } flex flex-col items-center justify-center translate-y-[500px]`}
      ref={myRef}
    >
      <h1 className="text-center text-2xl font-semibold font-Poppins ">
        Projects
      </h1>
      <div className="mt-24 flex w-[1000px] flex-wrap gap-y-12 gap-x-24 justify-center items-center">
        {dummyData.map((project) => (
          <ListOfProjects
            key={project.id}
            name={project.name}
            date={project.date}
            image={project.image}
            bg={project.bg}
            tools={project.tools}
          />
        ))}
      </div>
    </section>
  );
}
