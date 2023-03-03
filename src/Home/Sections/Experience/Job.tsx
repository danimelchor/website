import { FiExternalLink } from "react-icons/fi";
import { ExperienceType } from "types";

const Job = ({ image, company, role, website, from, to, duration, where }: ExperienceType) => {
  return (
    <div className="p-10 bg-gray-800 text-gray-50 w-full w-full rounded shadow-lg flex items-start hover:shadow-2xl">
      <img
        className="h-16 lg:h-28 rounded-sm mr-5"
        src={image}
        alt={company + " Logo"}
        loading="lazy"
      />
      <div>
        <p className="font-bold text-xl leading-none mb-1">
          {role}
        </p>
        <a
          href={website}
          rel="noreferrer"
          target="_blank"
          className="group text-secondaryDark hover:text-primaryDark text-lg mb-3 block flex items-center"
        >
          {company}{" "}
          <FiExternalLink className="ml-1 opacity-0 group-hover:opacity-100" />
        </a>
        <p className="text-blue-300 block font-mono text-sm flex items-center">
          from({from}, {to}) -&gt; {duration}
          :
        </p>
        <p className="text-gray-400 font-mono italic text-sm">
          # {where}
        </p>
      </div>
    </div>
  );
}

export default Job;
