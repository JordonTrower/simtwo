require('dotenv').config();
console.log(process.env.CONNECTION_STRING)
module.exports = {
	client: 'pg',
	connection: process.env.CONNECTION_STRING
};