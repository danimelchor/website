import React from "react";

// Icons
import { IoMdClose, IoMdCopy } from "react-icons/io";
import { FiExternalLink } from "react-icons/fi";

import { CONTACT_WAYS } from "../../../../data/home/contact";
import { toast } from "react-toastify";

const copyToClipboard = (str) => {
  const el = document.createElement("textarea");
  el.value = str;
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
};

const ContactCard = ({ href, text, copyText, icon }) => {
  return (
    <div className="border-2 rounded-sm flex items-center justify-between py-2 sm:py-4 px-3 sm:px-6 dark:border-gray-400">
      <div className="flex items-center">
        <div className="text-xl sm:text-3xl mr-4 dark:text-white">{icon}</div>
        <a href={href} className="sm:text-lg hover:underline dark:text-white">
          {text}
        </a>
      </div>
      <div className="flex items-center text-lg sm:text-xl gap-2">
        <IoMdCopy
          className="cursor-pointer transform hover:scale-110 transition-transform dark:text-white"
          onClick={() => {
            copyToClipboard(copyText);
            toast.success("Copied to clipboard");
          }}
        />
        <a
          href={href}
          className="cursor-pointer transform hover:scale-110 transition-transform dark:text-white"
        >
          <FiExternalLink />
        </a>
      </div>
    </div>
  );
};

export default function Contact({ closeMenu }) {
  return (
    <div
      className="fixed top-0 left-0 bg-black bg-opacity-70 w-screen h-screen flex items-center justify-center animated__fadeIn"
      style={{ zIndex: 1000 }}
      onClick={closeMenu}
    >
      <div
        className="w-11/12 w-3/4 lg:w-2/3 xl:w-1/2 bg-white dark:bg-gray-800 rounded-sm relative flex flex-col py-8 sm:py-16 px-4 sm:px-10"
        onClick={(e) => e.stopPropagation()}
      >
        <IoMdClose
          className="absolute top-5 right-5 h-6 w-6 rounded-full cursor-pointer dark:text-white"
          onClick={closeMenu}
        />
        <h2 className="text-4xl 2xl:text-5xl 3xl:text-7xl font-black text-gray-800 dark:text-gray-100">
          Contact me!
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg xl:text-xl mt-2">
          If you want to have me as a part of your team, or know more about what
          I do, you can contact me via:
        </p>
        <div className="h-full w-full flex items-center justify-center mt-5">
          <div className="grid md:grid-cols-2 gap-4 w-full">
            {CONTACT_WAYS.map((i, key) => (
              <ContactCard
                key={key}
                text={i.text}
                href={i.href}
                icon={i.icon}
                copyText={i.copyText}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
