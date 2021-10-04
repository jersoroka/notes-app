const express = require('express');
const router = express.Router();
// FIXME: editNote might break this
const { getNotes, addNote, deleteNote, editNote } = require('../controllers/notes');

router
    .route('/')
    .get(getNotes)
    .post(addNote);

router
    .route('/:id')
    .delete(deleteNote)
    .put(editNote);

module.exports = router;