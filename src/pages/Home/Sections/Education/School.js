import React from "react";

export default function School({ type, year, school, url }) {
  return (
    <div className="p-10 my-5 lg:my-0 bg-white dark:bg-gray-800 dark:text-gray-50 w-full md:w-5/6 lg:w-2/5 lg:mx-5 rounded shadow-lg hover:shadow-2xl">
      <a
        href={url}
        rel="noreferrer"
        target="_blank"
        className="uppercase text-lg md:text-2xl hover:text-secondary dark:hover:text-secondaryDark font-bold"
      >
        {school}
      </a>
      <span className="text-blue-700 dark:text-blue-300 block mb-3 font-mono">
        from({year.slice(0, 4)},{year.slice(7, year.length)})
      </span>
      <div className="text-primary dark:text-gray-400 font-mono italic">
        {type.map((i, index) => (
          <div key={index} className="flex gap-2">
            <div>#</div>
            <div>{i}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
