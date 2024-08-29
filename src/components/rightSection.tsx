import ExperienceList from "./rightSectionComponents/experienceList";
import data from "../data/data.json";
import ArrowIcon from "../assets/arrowIcon";
import ProjectsList from "./rightSectionComponents/projectsList";
import { useEffect, useRef, useState } from "react";
import useStore from "../store/store";
import { useInView } from "framer-motion";
import Link from "./link";

const RightSection = () => {
  const about = useRef(null);
  const isAboutInView = useInView(about);
  const experice = useRef(null);
  const isExpericeInView = useInView(experice);
  const projects = useRef(null);
  const isProjectsInView = useInView(projects);
  const setAboutInView = useStore((state) => state.setAboutInView);
  const setExpericeInView = useStore((state) => state.setExperienceInView);
  const setProjectsInView = useStore((state) => state.setProjectsInView);
  const [hoveredIndex, setHoveredIndex] = useState<number>();

  useEffect(() => {
    if (isAboutInView && isExpericeInView) {
      setAboutInView(true);
      setExpericeInView(false);
    } else {
      setAboutInView(false);
      setExpericeInView(true);
      setProjectsInView(false);
    }
    if (isProjectsInView) {
      setExpericeInView(false);
      setProjectsInView(true);
    }
  }, [
    isAboutInView,
    isExpericeInView,
    isProjectsInView,
    setAboutInView,
    setExpericeInView,
    setProjectsInView,
  ]);
  return (
    <div className="lg:w-[50%] w-full py-20">
      <div ref={about}></div>
      <div id="about" className="text-[18px]">
        <div className="w-full lg:hidden z-10 py-1 bg-slate-900/75 backdrop-blur sticky top-[-1px]">
          <div className="text-sm font-bold my-6 uppercase tracking-widest block text-slate-200">
            About
          </div>
        </div>
        <p>
          In 2018, I was a passionate gamer, immersing myself in virtual worlds.
          In 2021, I took a pivotal step by enrolling in the Computer Science
          Faculty at Binary International University in Urganch. My journey
          began with an internship as a test automation engineer, where I delved
          into the intricacies of web app testing. However, my true calling
          revealed itself — I learned to build captivating websites.
        </p>
        <br />
        <p>
          Transitioning from testing to frontend development, I embraced the
          opportunity to shape digital experiences. Now, armed with skills in
          Next.js, Tailwind CSS, Redux, Framer Motion, and TypeScript, I bring
          creativity and precision to crafting functional and visually appealing
          online platforms.
        </p>
      </div>
      <div id="experience" ref={experice}></div>
      <div ref={experice} className="mt-32 flex flex-col gap-1">
        <div className="w-full lg:hidden z-10 py-1 bg-slate-900/75 backdrop-blur sticky top-[-1px]">
          <div className="text-sm font-bold my-6 uppercase tracking-widest block text-slate-200 lg:hidden">
            Experience
          </div>
        </div>
        {data.experice.map((value, index) => (
          <div
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(undefined)}
            className={`${
              hoveredIndex === undefined || hoveredIndex === index
                ? "lg:opacity-100"
                : "lg:opacity-50"
            } transition-all`}
            key={index}
          >
            <ExperienceList
              companyName={value.companyName}
              companyWebsite={value.companyWebsite}
              fromTo={value.fromTo}
              content={value.content}
              position={value.position}
              role={value.role}
              tools={value.tools}
              compleatedProjects={value.compleatedProjects}
            />
          </div>
        ))}
      </div>
      <div className="mt-7 flex items-center w-[130px] group">
        <Link
          className="font-bold text-slate-200 hover:text-teal-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-teal-300 after:transition-all origin-bottom-right hover:after:scale-x-100 hover:after:origin-bottom-left"
          href={"/resume.pdf"}
          target="_blank"
        >
          <div>View Résumé</div>
        </Link>
        <ArrowIcon />
      </div>
      <div ref={projects}></div>
      <div id="projects" ref={projects} className="mt-32 flex flex-col gap-1">
        <div className="w-full lg:hidden z-10 py-1 bg-slate-900/75 backdrop-blur sticky top-[-1px]">
          <div className="text-sm font-bold my-6 uppercase tracking-widest block text-slate-200">
            Projects
          </div>
        </div>
        {data.projects.map((value, index) => (
          <ProjectsList
            key={index}
            projectLink={value.projectLink}
            content={value.content}
            title={value.title}
            tools={value.tools}
          />
        ))}
      </div>
    </div>
  );
};

export default RightSection;
