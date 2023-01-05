// Sets Port
const PORT = process.env.PORT || 3001;

// Sets requirements
const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// App.use functionality
app.use(express.urlencoded({
    extended: true
}));

app.use(express.static('public'));
app.use(express.json());
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// App listener
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});