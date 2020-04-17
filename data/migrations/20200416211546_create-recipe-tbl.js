exports.up = function (knex) {
  return knex.schema
    .createTable("recipe", (tbl) => {
      tbl.increments();
      tbl.text("meal_name", 128).unique().notNullable();
    })

    .createTable("instructions", (tbl) => {
      tbl.increments();
      tbl.integer("instruction_number").unsigned().notNullable();
      tbl.text("instruction").notNullable();

      tbl
        .integer("meal_id")
        .notNullable()
        .references("id")
        .inTable("recipe")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
    })

    .createTable("ingredients", (tbl) => {
      tbl.increments();

      tbl.text("ingredient").unique().notNullable();
    })

    .createTable("meal_ingredients", (tbl) => {
      tbl.increments();
      tbl
        .integer("meal_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipe")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");

      tbl
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredients")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");

      tbl.integer("quantity").unsigned().notNullable();

      tbl.text("unit").unsigned().notNullable();
    });
};

exports.down = function (knex) {
  return knex

    .dropTableIfExists("recipe")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("instructions")
    .dropTableIfExists("meal_ingredients");
};
