import React from "react";


export default function Navbar() {
  return (
    <div className=" w-full  flex justify-center items-start ">
      <div className="border-2 border-rose-100 w-[1000px] h-30 mt-4 rounded-3xl shadow-xs shadow-rose-900 px-6">
        <div className="flex flex-basis justify-between items-center h-full">
          {/* Logo */}
          <img src="/Eventro.png" width={85} alt="Logo" className="rounded-full" />

          {/* Title */}
          <h1 className="text-4xl font-bold text-black font-lato text-center ml-20">
            My Virtual Diary
          </h1>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="text-lg rounded-xl border-0 shadow-xs shadow-rose-900 bg-rose-400 px-6 py-2">
              Login
            </button>
            <button className="text-lg rounded-xl border-2 shadow-2xl shadow-rose-100 border-rose-200 px-6 py-1">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
