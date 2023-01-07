// Variables
const fs = require('fs');
const path = require('path');

// Update Database
function createNewNote(body, notesArray) {
    const newNote = body
    notesArray.push(newNote);
    fs.writeFileSync(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
    return newNote;
};