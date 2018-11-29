import * as Knex from "knex";

exports.up = (knex: Knex) => {
    return knex.schema.createTable('users', (table) => {
        table.increments();
        table.string("first_name").notNullable();
        table.string("last_name").notNullable();
        table.string("email").notNullable().unique();
        table.timestamp('created_at').defaultTo(knex.fn.now());;
    });
};

exports.down = (knex: Knex) => {
    return knex.schema.dropTableIfExists('users');
};