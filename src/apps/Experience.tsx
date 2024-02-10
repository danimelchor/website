import classNames from "classnames";
import { COLOR_TO_BG, COLOR_TO_SHADOW, COLOR_TO_TEXT_COLOR } from "./colors";

type ExperienceType = {
  role: string;
  roleSmall: string;
  company: string;
  from: string;
  to?: string;
  where: string;
  image?: string;
  duration: string;
  website: string;
  color: string;
};

type EducationType = {
  website: string;
  school: string;
  year: string;
  type: string;
  typeSmall: string;
  where: string;
  color: string;
  image: string;
};

export const EDUCATION_LIST: EducationType[] = [
  {
    website: "https://www.bu.edu/",
    school: "Boston University",
    year: "2020 - 2023",
    type: "B.A. in Computer Science",
    typeSmall: "B.A. in CS",
    where: "Boston, MA, USA",
    image: "bu.jpg",
    color: "rose",
  },
  {
    website: "https://logosinternationalschool.es/",
    school: "Logos School",
    year: "2005 - 2020",
    type: "International Baccalaureate",
    typeSmall: "IB",
    where: "Madrid, Spain",
    image: "logos.jpg",
    color: "emerald",
  },
];

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
    roleSmall: "SWE",
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
    roleSmall: "SWE Intern",
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
    roleSmall: "SWE Intern",
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
    role: "ML Software Engineer Intern",
    roleSmall: "ML SWE Intern",
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

const ExperienceItem = (item: ExperienceType) => {
  return (
    <a
      className={classNames(
        "flex flex-col bg-gradient-to-t from-transparent rounded-xl p-5 lg:p-10 w-full gap-2 h-full group",
        COLOR_TO_BG[item.color],
      )}
      href={item.website}
      target="_blank"
      rel="noreferrer"
    >
      <div className="flex gap-3 lg:gap-7 items-center lg:items-start">
        <img
          className={classNames(
            "w-14 h-14 lg:w-16 lg:h-16 rounded-md shadow-lg mb-2 lg:mb-0",
            COLOR_TO_SHADOW[item.color],
          )}
          src={process.env.PUBLIC_URL + `/experience/${item.image}`}
          alt={item.company}
        />
        <div className="flex flex-col">
          <h3 className="text-slate-800 dark:text-slate-200 text-lg md:text-xl lg:text-2xl font-bold hidden lg:block lg:group-hover:underline">
            {item.role}
          </h3>
          <h3 className="text-slate-800 dark:text-slate-200 text-lg md:text-xl lg:text-2xl font-bold lg:hidden">
            {item.roleSmall}
          </h3>
          <div
            className={classNames(
              "text-md font-bold",
              COLOR_TO_TEXT_COLOR[item.color],
            )}
          >
            {item.company}
          </div>
          <div className="text-slate-600 dark:text-slate-400 text-sm hidden lg:block">
            {item.to
              ? item.from + " - " + item.to + " (" + item.duration + ")"
              : "Started " + item.from + " (" + item.duration + ")"}
          </div>
          <div className="text-slate-500 text-sm italic hidden lg:block">
            {item.where}
          </div>
        </div>
      </div>
      <div className="text-slate-600 dark:text-slate-400 text-sm lg:hidden">
        {item.to
          ? item.from + " - " + item.to + " (" + item.duration + ")"
          : "Started " + item.from + " (" + item.duration + ")"}
      </div>
      <div className="text-slate-500 text-sm italic lg:hidden">
        {item.where}
      </div>
    </a>
  );
};

const EducationItem = (item: EducationType) => {
  return (
    <a
      className={classNames(
        "flex flex-col bg-gradient-to-t from-transparent rounded-xl p-5 lg:p-10 w-full gap-2 h-full group",
        COLOR_TO_BG[item.color],
      )}
      href={item.website}
      target="_blank"
      rel="noreferrer"
    >
      <div className="flex gap-3 lg:gap-7 items-center lg:items-start mb-2 lg:mb-0">
        <img
          className={classNames(
            "w-14 h-14 lg:w-16 lg:h-16 rounded-md shadow-lg",
            COLOR_TO_SHADOW[item.color],
          )}
          src={process.env.PUBLIC_URL + `/education/${item.image}`}
          alt={item.school}
        />
        <div className="flex flex-col">
          <h3 className="text-slate-800 dark:text-slate-200 text-lg md:text-xl lg:text-2xl font-bold hidden lg:block lg:group-hover:underline">
            {item.type}
          </h3>
          <h3 className="text-slate-800 dark:text-slate-200 text-lg md:text-xl lg:text-2xl font-bold lg:hidden">
            {item.typeSmall}
          </h3>
          <div
            className={classNames(
              "text-md font-bold",
              COLOR_TO_TEXT_COLOR[item.color],
            )}
          >
            {item.school}
          </div>
          <div className="text-slate-600 dark:text-slate-400 text-sm hidden lg:block">
            {item.year}
          </div>
          <div className="text-slate-500 text-sm italic hidden lg:block">
            {item.where}
          </div>
        </div>
      </div>
      <div className="text-slate-600 dark:text-slate-400 text-sm lg:hidden">
        {item.year}
      </div>
      <div className="text-slate-500 text-sm italic lg:hidden">
        {item.where}
      </div>
    </a>
  );
};

const Experience = () => {
  return (
    <div
      id="experience"
      className="w-full mb-24 flex flex-col gap-10 p-10"
    >
      <h2 className="text-slate-800 dark:text-slate-200 text-4xl font-bold transition-colors">
        Experience
      </h2>
      <p className="text-slate-600 dark:text-slate-400 w-full lg:w-1/2">
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
      <h2 className="text-slate-800 dark:text-slate-200 text-4xl font-bold mt-10 xl:mt-20 transition-colors">
        Education
      </h2>
      <p className="text-slate-600 dark:text-slate-400 w-full lg:w-1/2">
        I attended Boston University for a fast-tracked B.A. in Computer
        Science, graduating in three years to jumpstart my career after learning
        extensively through internships. Previously, I completed the
        International Baccalaureate at Colegio Logos in Spain, paving the way
        for U.S. college to pursue a robust Computer Science education.{" "}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full items-center">
        {EDUCATION_LIST.map((item, key) => (
          <EducationItem key={key} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
