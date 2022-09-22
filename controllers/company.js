//error
const{SERVER_ERROR} = require('../utils/error');
const{Company} = require('../models/company');

//Controllers
//GET
const getSpecificCompany = async (req,res) => {

    try{
        const company = await Company.findAll();
        console.log(company);

        res.json({
            ...company.dataValues
        })
    }catch(e){
        console.log(e);
        res 
            .status(500)
            .json(SERVER_ERROR)
    }

};

module.exports = {
    getSpecificCompany
}