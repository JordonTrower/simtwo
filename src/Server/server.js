import express from 'express';
import dotenv from 'dotenv';
import path from 'path'
import bodyParser from 'body-parser';
import knex from 'knex';
import cors from 'cors'
import Controller from './Controller';

dotenv.config();
const app = express();
const dbConnection = knex({
	client: 'pg',
	connection: process.env.CONNECTION_STRING
})

app.use(cors());
app.use(bodyParser.json());
app.set('db', dbConnection);

const port = process.env.SERVER_PORT || 3001;

app.get('/api/houses', Controller.getHouses);
app.post('/api/houses', Controller.createListing);
app.delete('/api/houses/:id', Controller.deleteListing);

app.use('/', express.static(path.join(__dirname, '../../build')))

app.listen(port, () => {
	console.log(`listening on port ${port}`)
})