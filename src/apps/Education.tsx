import classNames from "classnames";
import { EducationType } from "types";

export const EDUCATION_LIST: EducationType[] = [
  {
    website: "https://www.bu.edu/",
    school: "Boston University",
    year: "2020 - 2023",
    type: "B.A. in Computer Science",
    where: "Boston, MA, USA",
    image: "bu.jpg",
    color: "red",
  },
  {
    website: "https://logosinternationalschool.es/",
    school: "Logos International School",
    year: "2005 - 2020",
    type: "International Baccalaureate",
    where: "Madrid, Spain",
    image: "logos.jpg",
    color: "emerald",
  },
];

type Mapping = {
  [key: string]: string;
};

const COLOR_TO_SHADOW: Mapping = {
  emerald: "shadow-emerald-300",
  red: "shadow-red-300",
};

const COLOR_TO_BG: Mapping = {
  emerald: "to-green-100 hover:to-green-200",
  red: "to-red-100 hover:to-red-200",
};

const COLOR_TO_TEXT_COLOR: Mapping = {
  emerald: "text-green-700",
  red: "text-red-700",
};

const EducationItem = (item: EducationType) => {
  return (
    <a
      className={classNames(
        "flex gap-7 bg-gradient-to-t from-transparent rounded-xl p-10 w-full h-full",
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
        src={process.env.PUBLIC_URL + `/education/${item.image}`}
        alt={item.school}
      />
      <div className="flex flex-col">
        <h3 className="text-slate-800 text-2xl font-bold">{item.type}</h3>
        <div
          className={classNames(
            "text-md font-bold",
            COLOR_TO_TEXT_COLOR[item.color],
          )}
        >
          {item.school}
        </div>
        <div className="text-slate-600 text-sm">{item.year}</div>
        <div className="text-slate-400 text-sm italic">{item.where}</div>
      </div>
    </a>
  );
};

const Education = () => {
  return (
    <div
      id="experience"
      className="w-full mb-24 flex flex-col gap-10 p-10 gap-10"
    >
      <h2 className="text-slate-800 text-4xl font-bold">My education</h2>
      <p className="text-slate-600 w-full lg:w-1/2">
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

export default Education;
