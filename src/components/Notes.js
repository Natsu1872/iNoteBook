import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from '../context/notes/noteContext';
import Noteitem from './Noteitem';
import AddN from './AddN';

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, fetchNotes, editNote } = context;

  useEffect(() => {
      fetchNotes()
  }, [])

  const ref = useRef(null)
  const refClose = useRef(null)
  const [note, setNote] = useState({id:"", Etitle: "", Edescription: "", Etag: ""})

  const updateNote = (currentNote) => {
      ref.current.click();
      setNote({id: currentNote._id, Etitle: currentNote.title, Edescription: currentNote.description, Etag: currentNote.tag})
  }

  const handleClick = (e)=> {
      editNote(note.id, note.Etitle, note.Edescription, note.Etag)
      refClose.current.click();
  }

  const onChange = (e)=> {
      setNote({...note, [e.target.name]: e.target.value})
  }

  return (
    <>
      <AddN/>
      <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content">
                  <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                  <form className='my-3'>
                      <div className="mb-3">
                          <label htmlFor="title" className="form-label">Title</label>
                          <input type="text" className="form-control" id="Etitle" name="Etitle" value={note.Etitle} aria-describedby="emailHelp" onChange={onChange}/>
                      </div>
                      <div className="mb-3">
                          <label htmlFor="description" className="form-label">Description</label>
                          <input type="text" className="form-control" id="Edescription" name="Edescription" value={note.Edescription} onChange={onChange}/>
                      </div>
                      <div className="mb-3">
                          <label htmlFor="tag" className="form-label">tag</label>
                          <input type="text" className="form-control" id="Etag" name="Etag" value={note.Etag} onChange={onChange}/>
                      </div>
                  </form>
                  </div>
                  <div className="modal-footer">
                      <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="button" className="btn btn-primary" onClick={handleClick}>Save changes</button>
                  </div>
              </div>
          </div>
      </div>
      <div className="row my-3">
        <h2>Your notes</h2>
        {notes.map((note) => {
          return <Noteitem key={note._id} updateNote={updateNote} note={note} />
        })}
      </div>
    </>
  )
}

export default Notes
