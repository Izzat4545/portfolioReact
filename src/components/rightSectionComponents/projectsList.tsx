import ArrowIcon from "../../assets/arrowIcon";

type Props = {
  title: string;
  content: string;
  projectLink: string;
  tools: string[];
};
const ProjectsList = (props: Props) => {
  return (
    <div
      onClick={() => window.open(props.projectLink, "_blank")}
      className="cursor-pointer group hover:bg-slate-800/50 hover:drop-shadow-lg transition-all p-5 rounded-lg"
    >
      <div className="text-slate-200 flex items-center group-hover:text-teal-300 transition-all text-[18px] font-bold">
        <div>{props.title}</div>
        <div className="rotate-[-45deg]">
          <ArrowIcon />
        </div>
      </div>
      <div>{props.content}</div>
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

export default ProjectsList;
