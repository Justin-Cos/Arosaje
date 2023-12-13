const express = require('express');
const router = express.Router();
const userRoutes = require('./userRoutes'); // Assurez-vous que le chemin est correct
const plantRoutes = require('./plantRoutes'); // Assurez-vous que le chemin est correct

router.use('/users', userRoutes);
router.use('/plants', plantRoutes);

module.exports = router;