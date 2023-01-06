// Variables
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

// Routes
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// // UUID
// const uuid = require('./helpers/uuid');

// Get Response
app.get('/', (req, res) => {
    res.send('Note Taker');
});

// Middleware for JSON and URL Encoded
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Middleware for routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Listener
app.listen(PORT, () => {
    console.log(`This app is now ready to use at http://localhost:${PORT} !`);
})