exports.seed = function (knex) {
  // Deletes ALL existing entries

  return knex("ingredients")
    .truncate()

    .then(function () {
      // Inserts seed entries

      return knex("ingredients").insert([
        { ingredient: "chicken" },
        { ingredient: "fish" },
        { ingredient: "egg" },
      ]);
    });
};
