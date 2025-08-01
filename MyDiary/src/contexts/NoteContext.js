import { createContext, useContext } from "react";

export const NoteContext = createContext({
    notes: [
        {
            id: 1,
            note: "Note msg",
            
        }
    ],
    addNote: (Note) => {},
    updateNote: (id, Note) => {},
    deleteNote: (id) => {},
    pinNote: (id) => {},
    readNote: (id, Note) => {}
})

export const useNote = () =>{
    return useContext(NoteContext)
}

export const NoteProvider = NoteContext.Provider;