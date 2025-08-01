import React, { useRef, useEffect, useState } from "react";
import { useNote } from "../../contexts/NoteContext";
import { useNavigate, useParams } from "react-router-dom";

export default function NoteForm(){
const [title, setTitle] = useState("");
const [note, setNote] = useState("");
const textareaRef = useRef(null);
const [date, setDate] = useState("");
const {addNote} = useNote();

const navigate = useNavigate();

const add = (e) =>{
  e.preventDefault()

  if(!note) return
 addNote({ title, note, date, completed: false });

   setNote("");
  setTitle("");

  navigate("/");
}

useEffect(() => {
  const now = new Date().toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  setDate(now);
}, []);

 useEffect(() =>{
    const textarea = textareaRef.current
    if(textarea)
    textarea.style.height = "auto"
    textarea.style.height = textarea.scrollHeight + "px"
 }, [note])

    return(
        <div className="w-full h-screen flex justify-center items-center">
           <div className="w-full h-screen max-w-[1300px] p-5 bg-white border-l-4 border-r-4 border-violet-400 shadow-xl">
           <h1 className=" text-center font-bold text-4xl  text-violet-400" >New Note</h1>
           <hr className="text-violet-300 mt-3"/>

           <div>
            <p className="text-sm text-gray-500 mb-4">{date}</p>

           </div>

          <input 
          type="text"
          value={title}
          onChange={(e)=> setTitle(e.target.value)}
          placeholder="Title"
          className="w-full text-2xl font-bold text-black bg-transparent outline-0"
          >
          </input>

           <textarea
           ref={textareaRef}
           value={note}
           onChange={(e) => setNote(e.target.value)}
           placeholder="write something..."
           className=" w-full mt-10 bg-transparent overflow-hidden max-w-[1300px] outline-0"
           >
           </textarea>
        


        <div className="flex gap-12 flex-row-reverse mr-10"> 
            <button onClick={add} type="submit" className="text-lg text-white rounded-xl border-0 shadow-xs shadow-violet-900 bg-violet-400 px-6 py-2 hover:bg-violet-200 hover:text-black">Save</button>
            <button onClick={()=>{navigate("/")}}className="text-lg text-white rounded-xl border-0 shadow-xs shadow-violet-900  bg-violet-400 px-6 py-2 hover:bg-violet-200 hover:text-black">Cancel</button>
        </div>
           

            </div>
        </div>
    )
}