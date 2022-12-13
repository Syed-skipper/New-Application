const model = require('../model.json')
const Sequelize = require('sequelize-views-support');
var db_name = model.db_name;
var db_username = model.db_username;
var db_password = model.db_password;
var host = model.host;
var port = model.port;

var sequelize = new Sequelize('mysql://' + db_username + ':' + db_password + '@' + host + ':' + port + '/' + db_name, { define: { charset: 'utf8', collate: 'utf8_general_ci', timestamps: true }, logging: false, dialectOptions: { dateStrings: true, typeCast: true }, timezone: '+05:30' });
sequelize.sync().then(function (data) { console.log(data) });

var Sampledata = sequelize.define('sampledata', {
    
    firstname: { type: Sequelize.STRING },
    lastname: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING },
    number: { type: Sequelize.INTEGER },
    address: { type: Sequelize.STRING }
})

//console.log("Sampledata",Sampledata.rawAttributes)

module.exports=Sampledata;