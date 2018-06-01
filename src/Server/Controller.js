export default {
	getHouses(req, res) {
		const db = req.app.get('db');

		db.select().from('houses').then((dbRes) =>
			res.send(dbRes)
		)
	},

	createListing(req, res) {
		const db = req.app.get('db');

		db('houses').insert(req.body).then(
			res.send('Success')
		)
	},

	deleteListing(req, res) {
		const {
			id
		} = req.params;

		const db = req.app.get('db');

		db('houses').where('id', id).del().then(() => {

			db('houses').select().then(dbRes => {
				res.send(dbRes);
			})
		})
	}
}