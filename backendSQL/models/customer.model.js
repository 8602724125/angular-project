module.exports = (sequelize, Sequelize) => {

    const Customer = sequelize.define("customer", {
    name: {
    type: Sequelize.STRING
    },
    
    email: {
    type: Sequelize.STRING
    },
    
    mobile: {
    type: Sequelize.STRING
    },
    
    password :{
    type: Sequelize.STRING   
    }

    });
    return Customer;
};