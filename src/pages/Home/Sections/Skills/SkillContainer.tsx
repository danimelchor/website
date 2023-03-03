import React, { useEffect, useState } from "react";
import Skill from "./Skill";

export default function SkillContainer({ title, imgs, names }) {
  const [itemsHtml, setItemsHtml] = useState([]);

  useEffect(() => {
    let arr = [];
    // Creating the skills icons + text
    for (let i = 0; i < names.length; i++) {
      arr.push(<Skill key={i} name={names[i]} />);
    }
    setItemsHtml(arr);
  }, [names, imgs]);

  return (
    <div className="block my-10 bg-gray-800 text-gray-50 rounded p-8 shadow-2xl">
      <h2 className="text-3xl uppercase w-full border-b-2 pb-3 text-primary text-gray-400 border-primaryDark font-mono italic">
        # {title}
      </h2>
      <div className="grid grid-cols-2 lg:flex p-4 gap-4 lg:gap-7">
        {itemsHtml}
      </div>
    </div>
  );
}
