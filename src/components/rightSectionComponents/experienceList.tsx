import ArrowIcon from "../../assets/arrowIcon";
import LinkIcon from "../../assets/linkIcon";
import Link from "../link";

type Props = {
  fromTo: string;
  role: string;
  companyName: string;
  companyWebsite: string;
  position: string;
  content: string;
  tools: string[];
  compleatedProjects?: string[];
};
const stopPropagation = (e: any) => {
  e.stopPropagation();
};
const ExperienceList = (props: Props) => {
  return (
    <div
      className="cursor-pointer group hover:bg-slate-800/50 hover:drop-shadow-lg transition-all p-5 rounded-lg"
      onClick={() => window.open(props.companyWebsite, "_blank")}
    >
      <div className="text-slate-200 group-hover:text-teal-300 flex items-center transition-all text-[18px] font-bold">
        <div>{props.role}</div>
        <div className="rotate-[-45deg]">
          <ArrowIcon />
        </div>
      </div>
      <Link target="_blank" href={props.companyWebsite}>
        {props.companyName}
      </Link>
      <div>{props.fromTo}</div>
      <div>{props.position}</div>
      <div>
        <ul
          className="ml-6 list-disc"
          dangerouslySetInnerHTML={{ __html: props.content }}
        ></ul>
      </div>
      <div>
        {props.compleatedProjects &&
          props.compleatedProjects.map((value, index) => (
            <div className="flex items-center mt-2" key={index}>
              <LinkIcon />
              <Link
                onClick={stopPropagation}
                className="text-slate-200"
                target="_blank"
                href={"https://" + value}
              >
                {value}
              </Link>
            </div>
          ))}
      </div>
      <div className="flex gap-2 mt-2 flex-wrap">
        {props.tools?.map((value, index) => (
          <div
            className="px-3 py-1 text-xs font-medium leading-5 rounded-full text-teal-300 bg-teal-400/10"
            key={index}
          >
            {value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceList;
