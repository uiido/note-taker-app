// Variables
const fs = require('fs');
const path = require('path');

// New Notes
function createNote(body, notesArray) {
    const note = body;
    notesArray.push(note);

    // Sends JSON information to database
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({
            notes: notesArray
        }, null, 2)
    )
    return note;
};

module.exports = {
    createNewNote
};