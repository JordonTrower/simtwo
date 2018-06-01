exports.up = function (knex, Promise) {
	return knex.schema.alterTable('houses', function (table) {
		table.text('img');
		table.decimal('mortgage');
		table.decimal('rent');
	})
};

exports.down = function (knex, Promise) {
	return knex.schema.alterTable('houses', function (table) {
		table.dropColumn('img');
		table.dropColumn('mortgage');
		table.dropColumn('rent');
	})
};