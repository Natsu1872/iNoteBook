import { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props)=> {
    const notesInitial = [
        {
          "_id": "64a5662467a38165276fa58f",
          "user": "649d8a55871072dcef9ac04c",
          "title": "My Title",
          "description": "Jod Player",
          "tag": "Personal",
          "date": "2023-07-05T12:46:28.013Z",
          "__v": 0
        },
        {
          "_id": "64a56f64c9ab539f90a4f13f",
          "user": "649d8a55871072dcef9ac04c",
          "title": "New Note",
          "description": "Valo OP",
          "tag": "Gaming",
          "date": "2023-07-05T13:25:56.825Z",
          "__v": 0
        },
        {
          "_id": "64a5662467a38165276fa58f",
          "user": "649d8a55871072dcef9ac04c",
          "title": "My Title",
          "description": "Jod Player",
          "tag": "Personal",
          "date": "2023-07-05T12:46:28.013Z",
          "__v": 0
        },
        {
          "_id": "64a56f64c9ab539f90a4f13f",
          "user": "649d8a55871072dcef9ac04c",
          "title": "New Note",
          "description": "Valo OP",
          "tag": "Gaming",
          "date": "2023-07-05T13:25:56.825Z",
          "__v": 0
        },
        {
          "_id": "64a5662467a38165276fa58f",
          "user": "649d8a55871072dcef9ac04c",
          "title": "My Title",
          "description": "Jod Player",
          "tag": "Personal",
          "date": "2023-07-05T12:46:28.013Z",
          "__v": 0
        },
        {
          "_id": "64a56f64c9ab539f90a4f13f",
          "user": "649d8a55871072dcef9ac04c",
          "title": "New Note",
          "description": "Valo OP",
          "tag": "Gaming",
          "date": "2023-07-05T13:25:56.825Z",
          "__v": 0
        },
        {
          "_id": "64a5662467a38165276fa58f",
          "user": "649d8a55871072dcef9ac04c",
          "title": "My Title",
          "description": "Jod Player",
          "tag": "Personal",
          "date": "2023-07-05T12:46:28.013Z",
          "__v": 0
        },
        {
          "_id": "64a56f64c9ab539f90a4f13f",
          "user": "649d8a55871072dcef9ac04c",
          "title": "New Note",
          "description": "Valo OP",
          "tag": "Gaming",
          "date": "2023-07-05T13:25:56.825Z",
          "__v": 0
        }
      ]

      const [notes, setNotes] = useState(notesInitial)

    return ( 
        <noteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </noteContext.Provider>
    ) 
}

export default NoteState;