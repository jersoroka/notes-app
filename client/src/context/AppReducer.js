export default (state, action) => {
    switch(action.type) {
        case 'GET_NOTES':
            return {
                ...state,
                loading: false,
                notes: action.payload.reverse()
            }
        case 'DELETE_NOTE':
            return {
                ...state,
                notes: state.notes.filter(note => 
                    note._id !== action.payload
                )
            }
        case 'ADD_NOTE':
            return {
                ...state,
                notes: [action.payload, ...state.notes]
            }
        case 'NOTE_ERROR':
            return {
                ...state,
                error: action.payload
            }
        case 'EDIT_NOTE':
            return {
                ...state,
                notes: action.payload.reverse()
            }
        default: 
            return state;
    }
}