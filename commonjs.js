const dotenv = require("dotenv");

const main = () => {
    console.log(dotenv().FOO);
}

module.exports = { main };