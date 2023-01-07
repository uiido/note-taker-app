// Variables
const router = require('express').Router();
const noteRoutes = require('./notesRoutes.js');

// Middleware
router.use(noteRoutes);

// Router
module.exports = router;