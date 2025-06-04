import classNames from "classnames";
import { COLOR_TO_BG, COLOR_TO_SHADOW, COLOR_TO_TEXT_COLOR } from "@/colors";
import moment from "moment";
import humanizeDuration from "humanize-duration";
import Image from "next/image";

interface ExperienceType {
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
}

interface EducationType {
  website: string;
  school: string;
  year: string;
  type: string;
  typeSmall: string;
  where: string;
  color: string;
  image: string;
}

const EDUCATION_LIST: EducationType[] = [
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
  const a = moment(date1);
  const b = moment(date2);
  let humanized = humanizeDuration(a.diff(b), {
    units: ["y", "mo"],
    round: true,
  });
  if (a < b) {
    humanized = "in " + humanized;
  }
  return humanized;
};

const EXPERIENCE_LIST: ExperienceType[] = [
  {
    role: "Software Engineer",
    roleSmall: "SWE",
    company: "Jane Street",
    from: "Jun 2025",
    duration: getMonthsSince(new Date(), new Date("06/23/2025")),
    where: "New York, New York, USA",
    website: "https://janestreet.com/",
    image: "janestreet.png",
    color: "blue",
  },
  {
    role: "Software Engineer",
    roleSmall: "SWE",
    company: "Stripe",
    from: "Jul 2023",
    to: "Jun 2025",
    duration: getMonthsSince(new Date("06/16/2025"), new Date("07/01/2023")),
    where: "New York, New York, USA",
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
        <Image
          className={classNames(
            "w-14 h-14 lg:w-16 lg:h-16 rounded-md shadow-lg mb-2 lg:mb-0",
            COLOR_TO_SHADOW[item.color],
          )}
          src={`/experience/${item.image}`}
          width={130}
          height={130}
          alt={item.company}
        />
        <div className="flex flex-col">
          <h3
            className={classNames(
              "text-lg md:text-xl lg:text-2xl font-bold lg:group-hover:underline",
              COLOR_TO_TEXT_COLOR[item.color],
            )}
          >
            {item.company}
          </h3>
          <div className="text-slate-800 dark:text-slate-200 text-md font-bold hidden lg:block">
            {item.role}
          </div>
          <div className="text-slate-800 dark:text-slate-200 text-md font-bold lg:hidden">
            {item.roleSmall}
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
        <Image
          className={classNames(
            "w-14 h-14 lg:w-16 lg:h-16 rounded-md shadow-lg",
            COLOR_TO_SHADOW[item.color],
          )}
          src={`/education/${item.image}`}
          alt={item.school}
          width={130}
          height={130}
        />
        <div className="flex flex-col">
          <h3
            className={classNames(
              "text-lg md:text-xl lg:text-2xl  font-bold",
              COLOR_TO_TEXT_COLOR[item.color],
            )}
          >
            {item.school}
          </h3>
          <div className="text-slate-800 dark:text-slate-200 text-md font-bold hidden lg:block lg:group-hover:underline">
            {item.type}
          </div>
          <div className="text-slate-800 dark:text-slate-200 text-md font-bold lg:hidden">
            {item.typeSmall}
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
    <div id="experience" className="w-full pb-20 flex flex-col gap-10">
      <h2 className="text-slate-800 dark:text-slate-200 text-4xl font-bold transition-colors">
        Experience
      </h2>
      <p className="text-slate-600 dark:text-slate-400 w-full lg:w-1/2">
        From Jane Street in New York, Stripe in Boston, and Intelygenz in
        Madrid, my experience as a software engineer has been a journey of
        diverse landscapes. These roles have sculpted my skills, from
        contributing to cutting-edge projects at larger companies to shaping
        innovations at smaller but impactful companies.
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
        for U.S. college to pursue a robust Computer Science education.
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
