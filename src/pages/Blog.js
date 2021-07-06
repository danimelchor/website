import React, { Component } from "react";
import { Link } from "react-router-dom";

// ICONS
import { FaChevronLeft } from "react-icons/fa";

export default class Blog extends Component {
  render() {
    return (
      <div className="w-full h-full flex justify-center py-10">
        <div className="bg-white dark:bg-gray-900 w-5/6 h-full p-4 rounded-sm">
          <Link to="/" className="text-blue-500 flex items-center">
            <FaChevronLeft />
            Go back
          </Link>
          <h1 className="">Blog</h1>
        </div>
      </div>
    );
  }
}
