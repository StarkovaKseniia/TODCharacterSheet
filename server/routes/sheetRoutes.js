const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Character = mongoose.model('characters');
const Directory = mongoose.model('directories');

module.exports = app => {
  app.post('/api/cabinet', requireLogin, (req, res) => {
    const { 
      
    } = req.body;

    const character = new Character({
      
      _user: req.user.id
    });
  });  
};