const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { sequelize, syncModels } = require('./models'); // Importez l'instance Sequelize et la fonction syncModels

syncModels().then(() => {
    const app = express();
    const port = 3000;

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(express.static('public'));

    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'views', 'index.html'));
    });

    const routes = require('./routes/index.js');
    app.use(routes);

    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
    });
});