import React, { useState, useContext } from 'react'
import "./AddNote.css"
import "../style.css"
import { GlobalContext } from '../context/GlobalState';

export const AddNote = ({ setShowAddNote }) => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const { addNote } = useContext(GlobalContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const date = getTodaysDate();
        console.log("Current date: ", date);
        console.log("Type: ", typeof(date));

        const newNote = {
            title,
            text,
            date
        }
        
        addNote(newNote);
        setTitle('');
        setText('');
        setShowAddNote(false);

    }

    const getTodaysDate = () => {
        const date = new Date();
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "Dececember"];
        const month = monthNames[date.getMonth()];
        const day = date.getDate();
        const year = date.getFullYear();
        return month + " " + day + ", " + year;
    }

    return (
        <div className="add-note">
            <form className="form">
                <span
                    className="new-date">
                        {(getTodaysDate())}
                </span>
                <input 
                    className="new-title" 
                    htmlFor="title" 
                    value={title} 
                    placeholder="Enter title..."
                    onChange={(e) => setTitle(e.target.value)}/>
                <textarea 
                    className="new-text" 
                    htmlFor="text"
                    value={text}
                    placeholder="Enter note..."
                    onChange={(e) => setText(e.target.value)}/>
            </form>
            <button className="add-note-btn btn" onClick={handleSubmit}>Submit</button>
        </div>
    )
}
