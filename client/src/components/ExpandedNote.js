import React from 'react'
import './ExpandedNote.css'
import { FaPencilAlt, FaTimes } from "react-icons/fa";

export const ExpandedNote = ({note}) => {
    return (
        <li className="list-item-expanded" onClick={() => console.log(`Expanding ${note.title}`)}>
            <strong className="title">{note.title}</strong>
            <p className="date-expanded">{note.date}</p>
            <p className="content-expanded">{note.text}</p>
            <FaPencilAlt className="edit-note-btn note-btn" onClick={() => {console.log("Editing note")}}/>
            <FaTimes className="delete-note-btn note-btn" onClick={() => {console.log("Deleting note")}}/>
        </li>
    )
}
