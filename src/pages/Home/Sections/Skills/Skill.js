import React from "react";

export default function Skill({ name }) {
  return (
    <div className="flex items-center justify-center flex-col text-center">
      <img
        className="block max-w-full h-12 m-auto hover:scale-110 transform transition-transform"
        src={`/home/skills/${name}.png`}
        alt="skillIcon"
        loading="lazy"
      />
      <p className="text-xl text-primary dark:text-gray-400 mt-2">{name}</p>
    </div>
  );
}
