import React, { useEffect, useState } from "react";
import NotesForm from "./Components/NotesForm";
import NotesList from "./Components/NotesList";
import "./Notes.css";

const Notes = () => {
  const [isAddNotes, setIsAddNotes] = useState(false);
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);
  return (
    <section id='notes' className='text-light p-3'>
      {isAddNotes ? (
        <>
          <button
            onClick={() => setIsAddNotes(false)}
            className='btn-default text-center mx-sm-5 mx-1'
          >
            Go Back
          </button>
          <NotesForm
            notes={notes}
            setNotes={setNotes}
            setIsAddNotes={setIsAddNotes}
          />
        </>
      ) : (
        <>
          <button
            onClick={() => setIsAddNotes(true)}
            className='btn-default text-center mx-sm-5 mx-1 p-4'
          >
            <span className='plus-Sign'></span>
          </button>
          <NotesList notes={notes} setNotes={setNotes} />
        </>
      )}
    </section>
  );
};

export default Notes;
