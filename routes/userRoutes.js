const express = require('express');
const router = express.Router();
const { User } = require('../models');

router.get('/', async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error bla bla bla', details: error.message });
    }
});

module.exports = router;
