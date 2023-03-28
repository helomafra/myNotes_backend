exports.up = (knex) =>
  knex.schema.createTable("tags", (table) => {
    table.increments("id");
    table.text("name").notNullable(); //não pode ser nulo

    //foreign keys

    //o user id faz uma referencia ao id que existe dentro da tabela do usuário
    table.integer("user_id").references("id").inTable("users");

    //a tag está vinculada a um id de noda que vem da tabela notes
    table
      .integer("note_id")
      .references("id")
      .inTable("notes")
      .onDelete("CASCADE");
  });

exports.down = (knex) => knex.schema.dropTable("tags");
