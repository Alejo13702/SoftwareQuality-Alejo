//Requires
const {Router} = require('express');
const express = require('express');

//Controllers
const{
    getSpecificCustomers,
} = require('../controllers/user');

//Initializing
const router = express.Router();

//Routes
//GET
router.get('/custumer', getSpecificCustomers);

module.exports = router;