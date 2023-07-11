import { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000"
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial)

  //Fetch all Note
  const fetchNotes = async () => {
    //API call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5ZDhhNTU4NzEwNzJkY2VmOWFjMDRjIn0sImlhdCI6MTY4ODU1NjY4OX0.3dHzB0UK_YDurcPnhuNk2tdjWVglp6ZAqzDgj6h6e9k"
      }
    });
    const json = await response.json()
    console.log(json)
    setNotes(json);
  }

  //Add a Note
  const addNote = async (title, description, tag) => {
    //API call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5ZDhhNTU4NzEwNzJkY2VmOWFjMDRjIn0sImlhdCI6MTY4ODU1NjY4OX0.3dHzB0UK_YDurcPnhuNk2tdjWVglp6ZAqzDgj6h6e9k"
      },
      body: JSON.stringify(title, description, tag),
    });

    console.log("Adding a new note");
    const note = {
      "_id": "64a5662467a381652176fa58f",
      "user": "649d8a55871072dcef9ac04c",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2023-07-05T12:46:28.013Z",
      "__v": 0
    };
    setNotes(notes.concat(note))
  }

  //Delete a Note
  const deleteNote = (id) => {
    //TODO: API CALL
    console.log("Deleting the note with id" + id);
    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes)
  }

  //Edit a Note
  const editNote = async (id, title, description, tag) => {
    //API call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5ZDhhNTU4NzEwNzJkY2VmOWFjMDRjIn0sImlhdCI6MTY4ODU1NjY4OX0.3dHzB0UK_YDurcPnhuNk2tdjWVglp6ZAqzDgj6h6e9k"
      },
      body: JSON.stringify({title, description, tag}),
    });
    const json = response.json();

    //Logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  }

  return (
    <noteContext.Provider value={{ notes, addNote, deleteNote, editNote, fetchNotes }}>
      {props.children}
    </noteContext.Provider>
  )
}

export default NoteState;