import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

// Initial state
const initialState = {
    notes: [],
    error: null,
    loading: true
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    async function getNotes() {
        try {
            const res = await axios.get('/api/notes');
            
            dispatch({
                type: 'GET_NOTES',
                payload: res.data.data
            });
        } catch (err) {
            dispatch({
                type: 'NOTE_ERROR',
                payload: err.response.data.error
            });
        }
    }

    async function deleteNote(id) {
        try {
            await axios.delete(`/api/notes/${id}`);
            dispatch({
                type: 'DELETE_NOTE',
                payload: id
            })
        } catch (err) {
            dispatch({
                type: 'NOTE_ERROR',
                payload: err.response.data.error
            });
        }
    }

    async function addNote(note) {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await axios.post('/api/notes', note, config);
            dispatch({
                type: 'ADD_NOTE',
                payload: res.data.data
            })
        } catch (err) {
            dispatch({
                type: 'NOTE_ERROR',
                payload: err.response.data.error
            });
        }
    }

    async function editNote(id, editedNote) {
        try {
            const res = await axios.put(`/api/notes/${id}`, {
                title: editedNote.title,
                text: editedNote.text
            });
            dispatch({
                type: 'EDIT_NOTE',
                payload: res.data.notes
            })
        } catch (err) {
            dispatch({
                type: 'NOTE_ERROR',
                payload: err.response.data.error
            });
        }
    }

    return (<GlobalContext.Provider value={{
        notes: state.notes,
        error: state.error,
        loading: state.loading,
        getNotes, 
        deleteNote,
        addNote,
        editNote
    }}>
        {children}
    </GlobalContext.Provider>)
}