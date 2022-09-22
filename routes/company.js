//Requires
const {Router} = require('express');
const express = require('express');

//Controllers
const{
    getSpecificCompany
} = require('../controllers/company');

const router = express.Router();

//Routes
//GET
router.get('/company', getSpecificCompany);

module.exports = router;