import React from "react";


export default function Navbar() {
  return (
    <div className=" w-full  flex justify-center items-start ">
      <div className=" border-violet-300 w-full h-25 shadow-2xl shadow-violet-200 px-6">
        <div className="flex flex-basis justify-between items-center h-full">
          {/* Logo */}
          
          <img src="/Logo3.png" width={85} alt="Logo" className="rounded-full" />
          
          {/* Title */}
          <h1 className="text-4xl font-bold text-black font-lato text-center ml-30">
            My Virtual Diary
          </h1>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="text-lg text-white rounded-xl border-0 shadow-xs shadow-violet-900 bg-violet-400 px-6 py-2">
              Login
            </button>
            <button className="text-lg rounded-xl border-2 shadow-2xl shadow-rose-100 border-violet-200 px-6 py-1">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
