// Variables
const router = require('express').Router();
const { createNote } = require('../../db/db.json');
const { notes } = require("../../db/db.json");

// Converts notes to JSON data
router.get("notes", (req, res) => {
    let results = notes;
    res.json(results);
});

router.post("/notes", (req, res) => {
    const newNote = createNote(req.body, notes);
    res.json(newNote);
});

router.delete("/notes/:id", (req, resp) => {
    const parameters = req.params.id;
    updateDatabase(params, notes);
    res.redirect('');
});

// Router
module.exports = router;