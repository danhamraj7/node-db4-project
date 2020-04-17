exports.seed = function (knex) {
  // Deletes ALL existing entries

  return knex("recipe")
    .truncate()

    .then(function () {
      // Inserts seed entries

      return knex("recipe").insert([
        { meal_name: "chicken stew" },
        { meal_name: "fish and chips" },
        { meal_name: "egg scrambled" },
      ]);
    });
};
