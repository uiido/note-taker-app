// Variables
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

app.get('/', (req, res) => {
    res.send('Note Taker');
});

// Listener
app.listen(PORT, () => {
    console.log(`This app is now ready to use at http://localhost:${PORT}!`);
})