// Variables
const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { notes } = require("../../db/db.json");

// Converts notes to JSON data
router.get("notes", (req, res) => {
    let results = notes;
    res.json(results);
});

// Router
module.exports = router;