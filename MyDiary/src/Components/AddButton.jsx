import React from "react";
import { Link } from "react-router-dom";

export default function AddButton() {
  return (
    <Link to='/note'>
    <button
      
      className="flex items-center gap-2 p-2 border-0 bg-violet-100 text-lime-800 rounded-full shadow-ms hover:bg-violet-200 transition duration-200 shadow-sm shadow-gray-400"
    >
      <span className="bg-violet-300 text-white py-3 px-5 rounded-full">
        <i className="fa-solid fa-plus"></i>
      </span>
      <span className="font-medium">Add Note</span>
    </button>
    </Link>
  );
}
