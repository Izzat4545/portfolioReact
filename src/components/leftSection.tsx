import GithubIcon from "../assets/githubIcon";
import LinkedinIcon from "../assets/linkedinIcon";
import TelegramIcon from "../assets/telegramIcon";
import useStore from "../store/store";
import Link from "./link";

const LeftSection = () => {
  const isAboutInView = useStore((state) => state.isAboutInView);
  const isExperienceInView = useStore((state) => state.isExperienceInView);
  const isProjectsInView = useStore((state) => state.isProjectsInView);

  return (
    <div className="lg:sticky lg:h-[80vh] lg:top-20 flex flex-col justify-between">
      {/* INFO */}
      <div>
        <div className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          Izzatbek Sultonov
        </div>
        <div className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          Front-End Engineer
        </div>
        <p className="mt-4 max-w-xs leading-normal">
          I build exceptional and accessible digital experiences for the web.
        </p>
      </div>
      {/* CURRENT SECTION INDICATOR */}
      <div className="hidden lg:flex flex-col gap-4 text-[12px] mt-16 w-max">
        <div className="flex items-center gap-2">
          <span
            className={`${
              isAboutInView ? "w-16 bg-slate-200" : "w-8 bg-[#94A3B8]"
            } transition-all h-[2px]`}
          ></span>
          <Link
            className={`${
              isAboutInView ? "text-slate-200" : "text-[#94A3B8]"
            } uppercase font-bold`}
            href={"#about"}
          >
            About
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <span
            className={`${
              isExperienceInView ? "w-16 bg-slate-200" : "w-8 bg-[#94A3B8]"
            } transition-all h-[2px]`}
          ></span>
          <Link
            className={`${
              isExperienceInView ? "text-slate-200" : "text-[#94A3B8]"
            } uppercase font-bold`}
            href={"#experience"}
          >
            Experience
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <span
            className={`${
              isProjectsInView ? "w-16 bg-slate-200" : "w-8 bg-[#94A3B8]"
            } transition-all h-[2px]`}
          ></span>
          <Link
            className={`${
              isProjectsInView ? "text-slate-200" : "text-[#94A3B8]"
            } uppercase font-bold`}
            href={"#projects"}
          >
            Projects
          </Link>
        </div>
      </div>
      {/* SOCIALS */}
      <div className="flex gap-3 ml-1 mt-8 items-center">
        <Link target="_blank" href={"https://github.com/Izzat4545"}>
          <GithubIcon />
        </Link>
        <Link
          target="_blank"
          href={"https://www.linkedin.com/in/izzatbek-sultonov-70a632245/"}
        >
          <LinkedinIcon />
        </Link>
        <Link target="_blank" href={"https://t.me/dev_boi"}>
          <TelegramIcon />
        </Link>
      </div>
    </div>
  );
};

export default LeftSection;
