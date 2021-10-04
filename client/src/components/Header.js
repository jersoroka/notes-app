import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import './Header.css'
import "../style.css"

export const Header = ({ setShowAddNote, showAddNote }) => {
    const { notes } = useContext(GlobalContext);

    const toggleShowAddNote = () => {
        setShowAddNote(!showAddNote);
    }

    return (
        <div className="header">
            <span className="items">You have {notes.length} notes</span>
            <div className="show-add-cancel-btns">
            {showAddNote ? 
            <button className="btn" onClick={toggleShowAddNote}>Cancel</button> :
            <button className="btn" onClick={toggleShowAddNote}>Add Note</button>}
            </div>
        </div>
    )
}
