import React, { useContext, useEffect }  from 'react'
import noteContext from '../context/notes/noteContext';
import Noteitem from './Noteitem';
import AddN from './AddN';

const Notes = () => {
  const context = useContext(noteContext);
  const {notes, fetchNotes} = context;

  useEffect(() => {
    fetchNotes()
  }, [])
  
  return (
    <>
      <AddN/>
      <div className="row my-3">
          <h2>Your notes</h2>
          {notes.map((note)=>{
            return <Noteitem key={note._id} note={note}/>
          })}
      </div>
    </>
  )
}

export default Notes
