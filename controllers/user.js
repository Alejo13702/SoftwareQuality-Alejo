//Import
const{SERVER_ERROR} = require('../utilsconstants');

//Models
const{Company} = require('../models/company');
const{Customer} = require(',,/models/customer');
const{User} = require('../models/user');
const { use } = require('../routes/user');

//Controllers
const getSpecificCustomers = async (req,res) => {

    try{
        const user = await User.findByPk (req.header.id);
        const company = await Company.findByPk (user.Company_id);
        const client = await User.findByPk (user.Client_id);        

        res.json({
            ...user.dataValues,
            ...client.dataValues,
            ...company.dataValues
        });

    
    }catch(e){
        console.log(e);
        res
            .status(500)
            .json(SERVER_ERROR);
    }

};

module.exports = {
    getSpecificCustomers
};