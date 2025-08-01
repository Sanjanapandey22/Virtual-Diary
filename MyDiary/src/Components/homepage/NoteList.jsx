import React from "react";
import NoteCard from "./NoteCard";
import { useNote } from "../../contexts/NoteContext";

export default function NoteList({}){
    //const [isNoteEditable, setIsNoteEditable] = useState(false);

  
    const {notes} = useNote();

    if (notes.length === 0){
       return <p>No notes yet!</p>
    }

    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 lg-grid-cols-3 gap-6 p-6">
           {notes.map((note) => (
            <NoteCard key={note.id} note={note} />
           ))}
        </div>
    )
}