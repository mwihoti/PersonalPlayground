module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define("users", {
      username: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      useremail: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Users;
  };