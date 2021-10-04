import React, { useContext, useEffect } from 'react'
import "./NotesList.css"
import { GlobalContext } from '../context/GlobalState';
import { Note } from './Note';

export const NotesList = ({ showAddNote }) => {
    const { notes, getNotes } = useContext(GlobalContext);

    useEffect(() => {
        getNotes();
    }, []);

    if (notes.length === 0) {

        return (
            <div className="scrollbar">
                <h1 className="notes-list-title">Your Notes</h1>
                <h2 className="notes-list-prompt">Create a note to get started!</h2>
            </div>
        )
    }

    return (
        <div className="scrollbar">
            <h1 className="notes-list-title">Your Notes</h1>
            <ul className={showAddNote ? "list show-add-note-list-view" : "list"}>
                {notes.map(note => (
                    <Note key={note._id} note={note} />
                ))}
            </ul>
        </div>
    )
}
