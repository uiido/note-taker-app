// Variables
const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { notes } = require("../../db/db.json");

// Converts notes to JSON data
router.get("notes", (req, res) => {
    let results = notes;
    res.json(results);
});

router.post("/notes", (req, res) => {
    req.body.id = uuidv4();
    const newNote = createNewNote(req.body, notes);
    res.json;
});

// Router
module.exports = router;