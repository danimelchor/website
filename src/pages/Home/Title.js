import React from "react";

export default function Title({ title }) {
  return (
    <h1 className="px-10 py-10 w-full text-black text-2xl md:text-3xl lg:text-4xl titleSection bg-primary dark:bg-gray-900 text-center md:text-left ">
      <span className="text-secondary dark:text-secondaryDark">self</span>.
      {title}()
    </h1>
  );
}
