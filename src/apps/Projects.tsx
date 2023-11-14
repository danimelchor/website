import classNames from "classnames";
import { FaGithub } from "react-icons/fa";

type ProjectType = {
  title: string;
  image: React.ReactNode;
  github: string;
  description: React.ReactNode;
  color: string;
  url?: string;
};

const PROJECT_LIST: ProjectType[] = [
  {
    title: "ASL-to-Text",
    image: "asl-to-text.png",
    github: "https://github.com/danimelchor/asl-to-text",
    description:
      "PointNet neural network to recognize ASL (an other hand gestures) in 3D",
    color: "orange",
  },
  {
    title: "todui",
    image: "todui.png",
    github: "https://github.com/danimelchor/todui",
    description: "TUI for your todos built in Rust with full CLI support.",
    color: "slate",
  },
  {
    title: "GPT3 Email",
    image: "gpt3-email.jpeg",
    github: "https://github.com/danimelchor/gpt3-email",
    description: "GPT3-powered extension to automate writing emails.",
    color: "blue",
  },
  {
    title: "Decentrapass",
    image: "decentrapass.png",
    github: "https://github.com/Decentrapass",
    description: "Decentralized password manager built on Ethereum.",
    color: "emerald",
  },
  {
    title: "PDF Summarizer",
    image: "pdf-summarizer.png",
    github: "https://github.com/danimelchor/pdf-summarizer",
    description: "Summarize PDFs into beautiful, easy-to-read documents.",
    color: "violet",
  },
  {
    title: "Sorting Visualizer",
    image: "sorting-visualizer.jpeg",
    github: "https://github.com/danimelchor/sorting-visualizer",
    description: "Visualize sorting algorithms in real-time.",
    url: "https://danimelchor.github.io/sorting-visualizer/",
    color: "rose",
  },
];

type Mapping = {
  [key: string]: string;
};

const COLOR_TO_SHADOW: Mapping = {
  orange: "shadow-orange-300 dark:shadow-orange-700",
  emerald: "shadow-emerald-300 dark:shadow-emerald-700",
  blue: "shadow-blue-300 dark:shadow-blue-700",
  slate: "shadow-slate-500",
  violet: "shadow-violet-300 dark:shadow-violet-700",
  rose: "shadow-rose-300 dark:shadow-rose-700",
};

const COLOR_TO_BG: Mapping = {
  orange: "to-orange-100 dark:to-orange-900",
  emerald: "to-green-100 dark:to-green-900",
  slate: "to-slate-200 dark:to-slate-800",
  blue: "to-blue-100 dark:to-blue-900",
  violet: "to-violet-100 dark:to-violet-900",
  rose: "to-rose-100 dark:to-rose-900",
};

const COLOR_TO_TEXT_COLOR: Mapping = {
  orange: "text-orange-700 dark:text-orange-300",
  emerald: "text-green-700 dark:text-green-300",
  slate: "text-slate-700 dark:text-slate-300",
  blue: "text-blue-700 dark:text-blue-300",
  violet: "text-violet-700 dark:text-violet-300",
  rose: "text-rose-700 dark:text-rose-300",
};

function GithubIcon({
  url,
  extraClassNames,
  text = "View on",
  icon = true,
}: {
  url: string;
  text?: string;
  extraClassNames?: string;
  icon?: boolean;
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className={classNames(
        "flex items-center justify-center gap-2 bg-black dark:bg-slate-200 rounded-full p-2 text-slate-100 dark:text-black hover:shadow-md shadow-slate-800 dark:shadow-slate-300/30",
        extraClassNames,
      )}
    >
      {text}
      {icon && <FaGithub className="w-5 h-5" />}
    </a>
  );
}

const ProjectItem = (item: ProjectType) => {
  return (
    <div
      className={classNames(
        "flex flex-col bg-gradient-to-t from-transparent rounded-xl p-5 lg:p-10 w-full gap-2 h-full",
        COLOR_TO_BG[item.color],
      )}
    >
      <div className="flex gap-3 lg:gap-7 mb-2 lg:mb-0">
        <img
          className={classNames(
            "w-14 h-14 lg:w-16 lg:h-16 rounded-md shadow-lg",
            COLOR_TO_SHADOW[item.color],
          )}
          src={process.env.PUBLIC_URL + `/projects/${item.image}`}
          alt={item.title}
        />
        <div className="flex flex-col">
          <a href={item.url} target="_blank" rel="noreferrer">
            <h3
              className={classNames(
                "text-lg md:text-xl lg:text-2xl font-bold",
                COLOR_TO_TEXT_COLOR[item.color],
                {
                  "hover:underline": item.url,
                },
              )}
            >
              {item.title}
            </h3>
          </a>
          <div className="text-slate-800 dark:text-slate-200">
            {item.description}
          </div>
          <GithubIcon
            url={item.github}
            extraClassNames="w-1/2 mt-5 hidden lg:flex"
          />
        </div>
      </div>
      <GithubIcon url={item.github} extraClassNames="lg:hidden w-full" />
    </div>
  );
};

export default function Projects() {
  return (
    <div
      id="experience"
      className="w-full mb-24 flex flex-col gap-10 p-10 gap-10"
    >
      <h2 className="text-slate-800 dark:text-slate-200 text-4xl font-bold">
        Open-Source Projects
      </h2>
      <p className="text-slate-600 dark:text-slate-400 w-full lg:w-1/2">
        I've been busy crafting my own tech projects, all open-source and born
        straight from my imagination. Think of them as my personal experiments
        in coding cool stuff. From tinkering with neural networks to creating
        slick user interfaces, these projects are my playground for mixing
        innovation with a dash of unconventional problem-solving.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full items-center justify-center">
        {PROJECT_LIST.map((item, key) => (
          <ProjectItem key={key} {...item} />
        ))}
      </div>
      <div className="flex justify-center items-center w-full">
        <GithubIcon
          text="View more on Github"
          url="https://gitihub.com/danimelchor"
          extraClassNames="w-full lg:w-1/2 mt-5"
          icon={false}
        />
      </div>
    </div>
  );
}
