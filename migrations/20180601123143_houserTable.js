exports.up = function (knex, Promise) {
	return knex.schema.createTable('houses', function (table) {
		table.increments('id').primary();
		table.string('name', 30);
		table.string('address', 100);
		table.string('city', 100);
		table.string('state', 2);
		table.integer('zip', 2);

	})
};

exports.down = function (knex, Promise) {
	return knex.schema.dropTableIfExists('houses');
};