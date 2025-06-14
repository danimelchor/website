import classNames from "classnames";
import { FaGithub } from "react-icons/fa";
import {
  COLOR_TO_BG,
  COLOR_TO_IMG_BG,
  COLOR_TO_SHADOW,
  COLOR_TO_TEXT_COLOR,
} from "@/colors";
import Image from "next/image";

interface ProjectType {
  title: string;
  image: React.ReactNode;
  github: string;
  description: React.ReactNode;
  color: string;
  url?: string;
}

const PROJECT_LIST: ProjectType[] = [
  {
    title: "Clypi",
    image: "clypi.png",
    github: "https://github.com/danimelchor/clypi",
    description: "Your all-in-one for beautiful, prod-ready CLIs ",
    color: "indigo",
    url: "https://danimelchor.github.io/clypi/learn/getting_started/",
  },
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
    url: "https://decentrapass.github.io/Decentrapass-v1-Interface/",
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
        "flex items-center justify-center gap-2 bg-slate-700 dark:bg-slate-300 transition-colors rounded-full p-1 px-3 text-slate-100 dark:text-slate-800 hover:shadow-md shadow-slate-800 dark:shadow-slate-300/30",
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
        "flex flex-col bg-gradient-to-t from-transparent rounded-xl p-5 lg:p-10 w-full gap-2 h-full group",
        COLOR_TO_BG[item.color],
      )}
    >
      <div className="flex gap-3 lg:gap-7 mb-2 lg:mb-0">
        <Image
          className={classNames(
            "w-14 h-14 lg:w-16 lg:h-16 rounded-md shadow-lg",
            COLOR_TO_SHADOW[item.color],
            COLOR_TO_IMG_BG[item.color],
          )}
          src={`/projects/${item.image}`}
          alt={item.title}
          width={130}
          height={130}
        />
        <div className="flex flex-col">
          <a href={item.url} target="_blank" rel="noreferrer">
            <h3
              className={classNames(
                "text-lg md:text-xl lg:text-2xl font-bold",
                COLOR_TO_TEXT_COLOR[item.color],
                {
                  "group-hover:underline": item.url,
                },
              )}
            >
              {item.title}
            </h3>
          </a>
          <div className="text-slate-800 dark:text-slate-200">
            {item.description}
          </div>
          <div className="flex gap-4 mt-5 hidden lg:flex">
            <GithubIcon url={item.github} extraClassNames="w-full" />
          </div>
        </div>
      </div>
      <div className="flex gap-4 mt-5 lg:hidden w-full">
        <GithubIcon url={item.github} extraClassNames="w-full" />
      </div>
    </div>
  );
};

export default function Projects() {
  return (
    <div id="experience" className="w-full pb-20 flex flex-col gap-10">
      <h2 className="text-slate-800 dark:text-slate-200 text-4xl font-bold transition-colors">
        Open-Source Projects
      </h2>
      <p className="text-slate-600 dark:text-slate-400 w-full lg:w-1/2">
        I've been busy crafting my own tech projects, all open-source and born
        straight from my imagination. Think of them as my personal experiments
        in coding cool stuff.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full items-center justify-center">
        {PROJECT_LIST.map((item, key) => (
          <ProjectItem key={key} {...item} />
        ))}
      </div>
      <div className="flex justify-center items-center w-full">
        <GithubIcon
          text="View more on Github"
          url="https://github.com/danimelchor"
          extraClassNames="w-full lg:w-1/2 mt-5"
          icon={false}
        />
      </div>
    </div>
  );
}
