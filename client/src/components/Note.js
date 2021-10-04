import React, { useState, useContext } from 'react'
import { FaPencilAlt, FaTimes, FaChevronDown, FaChevronUp, FaSave,  } from "react-icons/fa";
import { TiCancel } from 'react-icons/ti';
import { GlobalContext } from '../context/GlobalState';
import './Note.css'

export const Note = ({note}) => {
    const [expandNoteToggle, setExpandNoteToggle] = useState(false);
    const [editNoteToggle, setEditNoteToggle] = useState(false);
    const [editTitle, setEditTitle] = useState(note.title);
    const [editText, setEditText] = useState(note.text);
    

    const { deleteNote, editNote } = useContext(GlobalContext);

    const handleCancel = () => {
        setEditTitle(note.title);
        setEditText(note.text);
        setEditNoteToggle(false);
    }

    const handleSave = () => {
        const noteCopy = {...note};
        noteCopy.title = editTitle;
        noteCopy.text = editText;
        editNote(note._id, noteCopy);
        setEditNoteToggle(false);
    }


    if (editNoteToggle) {
        return (
            <li className="edit-list-item list-item">
                <input className="edit-title" value={editTitle} onChange={(e) => setEditTitle(e.target.value)}></input>
                <p className="date">{note.date}</p>
                <textarea className="content edit-content" value={editText} onChange={(e) => setEditText(e.target.value)}></textarea>
                <FaSave className="note-btn save-note-btn" onClick={() => handleSave()}/>
                <FaTimes className="delete-note-btn note-btn" onClick={() => {deleteNote(note._id)}}/>
                <TiCancel className="cancel-note-btn note-btn" onClick={() => handleCancel()}/>
            </li>
        )
    }

    return (
            <li className={expandNoteToggle ? "expanded-list-item list-item" : "collapsed-list-item list-item"}>
                <strong className="title">{note.title}</strong>
                <p className="date">{note.date}</p>
                {!editNoteToggle && <FaPencilAlt className="edit-note-btn note-btn" onClick={() => setEditNoteToggle(true)}/>}
                <FaTimes className="delete-note-btn note-btn" onClick={() => {deleteNote(note._id)}}/>
                <p className={expandNoteToggle ? "content expanded-content" : "collapsed-content content"}>{note.text}</p>
                {note.text.length > 40 && (expandNoteToggle  ? <FaChevronUp className="collapse-note-btn note-btn" onClick={() => setExpandNoteToggle(!expandNoteToggle)}/> :
                <FaChevronDown className="expand-note-btn note-btn" onClick={() => setExpandNoteToggle(true)}/> )}
            </li> 
    )
}
