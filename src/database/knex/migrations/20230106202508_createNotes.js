exports.up = (knex) =>
  knex.schema.createTable("notes", (table) => {
    table.increments("id");
    table.text("title");
    table.text("description");
    table.timestamp("created_at").default(knex.fn.now());
    table.timestamp("updated_at").default(knex.fn.now());

    //foreign key
    //o user id faz uma referencia ao id que existe dentro da tabela do usuário
    table.integer("user_id").references("id").inTable("users");
  });

exports.down = (knex) => knex.schema.dropTable("notes");
