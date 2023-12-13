const { User } = require('../models/user'); 

const getAllUsers = (req, res) => {
    User.findAll()
        .then(users => {
            users.forEach(user => {
                console.log(`userID: ${user.userID}, FirstName: ${user.firstName}, LastName: ${user.lastName}`);
            });
            res.json(users);
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error bla bla bla', details: error.message });
        });
};

module.exports = {
    getAllUsers,
    // ... (d'autres méthodes de contrôleur si nécessaire)
};
