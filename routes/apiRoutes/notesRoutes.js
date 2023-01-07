// Variables
const router = require("express").Router();
const { notes } = require('../../db/db');
const { createNote, deleteNote } = require('../../lib/notes');

// Recover Notes
router.get('/notes', (req, res) => {
    let saved = notes;
    res.json(saved);
})

// Make Notes
router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    let note = createNote(req.body, notes);
    res.json(note);
})

// Delete Notes
router.delete('/notes/:id', (req, res) => {
    deleteNote(notes, req.params.id);
    res.json(notes);
})

// Router
module.exports = router;