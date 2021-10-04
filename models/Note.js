const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: [true, 'Please add a title']
    },
    text: {
        type: String,
        trim: true,
        required: [true, 'Please add some text']
    },
    date: {
        type: String,
        trim: true,
        required: [false]
    }
});

module.exports = mongoose.model('Note', NoteSchema);