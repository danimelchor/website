import classNames from "classnames";
import { ExperienceType } from "types";

const getMonthsSince = (date1: Date, date2: Date) => {
  var Difference_In_Time = date1.getTime() - date2.getTime();
  var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
  var Difference_In_Months = Math.ceil(Difference_In_Days / 30);

  if (Difference_In_Months < 0) return `in ${-1 * Difference_In_Months}mos`;
  else if (Difference_In_Months < 12) return `${Difference_In_Months}mos`;
  else {
    var Difference_In_Years = Math.floor(Difference_In_Months / 12) % 12;
    return `${Difference_In_Years}ys ${Difference_In_Months}mos"`;
  }
};

export const EXPERIENCE_LIST: ExperienceType[] = [
  {
    role: "Software Engineer",
    company: "Stripe",
    from: "Jul 2023",
    duration: getMonthsSince(new Date(), new Date("07/01/2023")),
    where: "Boston, Massachusetts, USA",
    website: "https://stripe.com/",
    image: "stripe.png",
    color: "indigo",
  },
  {
    role: "Software Engineer Intern",
    company: "Stripe",
    from: "May 2022",
    to: "Aug 2022",
    duration: getMonthsSince(new Date("08/12/2022"), new Date("05/23/2022")),
    where: "South San Francisco, California, USA",
    website: "https://stripe.com/",
    image: "stripe.png",
    color: "indigo",
  },
  {
    role: "Software Engineer Intern",
    company: "BastionZero",
    from: "Feb 2022",
    to: "May 2022",
    duration: getMonthsSince(new Date("05/13/2022"), new Date("02/22/2022")),
    where: "Boston, Massachusetts, USA",
    website: "https://bastionzero.com/",
    image: "bastionzero.jpeg",
    color: "orange",
  },
  {
    role: "ML Software Engineer",
    company: "Intelygenz",
    from: "Jun 2021",
    to: "Aug 2021",
    duration: getMonthsSince(new Date("08/20/2021"), new Date("06/17/2021")),
    where: "Madrid, Community of Madrid, Spain",
    website: "https://intelygenz.com/",
    image: "intelygenz.png",
    color: "cyan",
  },
];

type Mapping = {
  [key: string]: string;
};

const COLOR_TO_SHADOW: Mapping = {
  indigo: "shadow-indigo-300",
  orange: "shadow-orange-300",
  cyan: "shadow-cyan-300",
};

const COLOR_TO_BG: Mapping = {
  indigo: "to-indigo-100 hover:to-indigo-200",
  orange: "to-orange-100 hover:to-orange-200",
  cyan: "to-cyan-100 hover:to-cyan-200",
};

const COLOR_TO_TEXT_COLOR: Mapping = {
  indigo: "text-indigo-700",
  orange: "text-orange-700",
  cyan: "text-cyan-700",
};

const ExperienceItem = (item: ExperienceType) => {
  return (
    <a
      className={classNames(
        "flex gap-7 bg-gradient-to-t from-transparent rounded-xl p-10 w-full",
        COLOR_TO_BG[item.color],
      )}
      href={item.website}
      target="_blank"
      rel="noreferrer"
    >
      <img
        className={classNames(
          "w-16 h-16 rounded-md shadow-lg",
          COLOR_TO_SHADOW[item.color],
        )}
        src={process.env.PUBLIC_URL + `/experience/${item.image}`}
        alt={item.company}
      />
      <div className="flex flex-col">
        <h3 className="text-slate-800 text-2xl font-bold">{item.role}</h3>
        <div
          className={classNames(
            "text-md font-bold",
            COLOR_TO_TEXT_COLOR[item.color],
          )}
        >
          {item.company}
        </div>
        <div className="text-slate-600 text-sm">
          {item.to
            ? item.from + " - " + item.to + " (" + item.duration + ")"
            : "Started " + item.from + " (" + item.duration + ")"}
        </div>
        <div className="text-slate-400 text-sm italic">{item.where}</div>
      </div>
    </a>
  );
};

const Experience = () => {
  return (
    <div
      id="experience"
      className="w-full mb-24 flex flex-col gap-10 p-10 gap-10"
    >
      <h2 className="text-slate-800 text-4xl font-bold">My experience</h2>
      <p className="text-slate-600 w-full lg:w-1/2">
        From Stripe in Boston to Intelygenz in Madrid, my experience as a
        software engineer has been a journey of diverse landscapes. These roles
        have sculpted my skills, from contributing to cutting-edge projects at
        Stripe to shaping innovations at smaller but impactful companies.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full items-center">
        {EXPERIENCE_LIST.map((item, key) => (
          <ExperienceItem key={key} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
