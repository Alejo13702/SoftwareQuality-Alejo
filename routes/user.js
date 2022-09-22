//Requires
const {Router} = require('express');
const express = require('express');

//Controllers
const{
    getSpecificCustomers,
    postSpecificCustomers
} = require('../controllers/user');

//Initializing
const router = express.Router();

//Routes
//GET
router.get('/custumer', getSpecificCustomers);

//Post
router.post('/custumer', postSpecificCustomers);

module.exports = router;