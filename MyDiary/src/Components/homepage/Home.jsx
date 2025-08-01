import {React, useEffect, useState} from "react";
import AddButton from "../AddButton";
import IntroCards from "./IntroCards";
import Navbar from "./Navbar";
import NoteList from "./NoteList";
import { NoteProvider } from "../../contexts/NoteContext";
export default function Home() {
  const [notes, setNotes] = useState([])

const addNote = (note) => {
    setNotes((prev) => [{id: Date.now(), ...note}, ...prev])}

useEffect(() => {
  const notes = JSON.parse(localStorage.getItem("notes"))

  if (notes && notes.length > 0 ){
    setNotes(notes)
  }
}, [])

useEffect(()=> {
  localStorage.setItem("notes", JSON.stringify(notes))
}, [notes])

  return(
    <div>
      <Navbar/>
      <IntroCards/>
    <hr className="m-6 text-black-200"/>
 <div className="flex justify-between items-center w-full px-4 py-4  ">
  <div className="flex items-center gap-12 ml-55">
  {/* Add Note Button */}
  <AddButton />

  {/* Search Bar */}
  <div className="flex items-center w-[400px] border-2 border-gray-200 rounded-full px-4 py-5 shadow-gray-400 shadow-sm bg-white">
    <input
      type="text"
      placeholder="Search Note"
      className="flex-grow outline-none bg-transparent text-gray-700 placeholder-gray-400"
    />
  <button><i className="fa-solid fa-magnifying-glass text-violet-400 ml-2 text-2xl"></i></button>  
  </div>
  </div>

  {/* Sort Section */}
  <div className="flex items-center gap-3 mr-55">
    <p className="text-lg font-medium">Sort By</p>
    <i className="fa-solid fa-list text-2xl text-gray-700 hover:text-gray-400 cursor-pointer"></i>
  </div>
</div>


<NoteList/>

</div>
)};