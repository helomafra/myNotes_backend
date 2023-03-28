exports.up = (knex) =>
  knex.schema.createTable("links", (table) => {
    table.increments("id");
    table.text("url").notNullable(); //não pode ser nulo
    table.timestamp("created_at").default(knex.fn.now());

    //foreign key

    //a tag está vinculada a um id de noda que vem da tabela notes
    table
      .integer("note_id")
      .references("id")
      .inTable("notes")
      .onDelete("CASCADE");
  });

exports.down = (knex) => knex.schema.dropTable("links");
