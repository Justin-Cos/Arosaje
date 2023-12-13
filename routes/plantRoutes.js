const express = require('express');
const router = express.Router();
const plantController = require('../controllers/plantController');

// Afficher toutes les plantes
router.get('/plants', plantController.getAllPlants);

module.exports = router;
