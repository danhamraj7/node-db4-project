exports.seed = function (knex) {
  // Deletes ALL existing entries

  return knex("instructions")
    .truncate()

    .then(function () {
      // Inserts seed entries

      return knex("instructions").insert([
        { meal_id: 1, instruction_number: 1, instruction: "Saute Onions" },

        { meal_id: 1, instruction_number: 2, instruction: "Saute Peppers" },

        { meal_id: 2, instruction_number: 1, instruction: "Saute Onions" },

        { meal_id: 2, instruction_number: 2, instruction: "Saute Peppers" },

        { meal_id: 3, instruction_number: 1, instruction: "Saute Onions" },

        { meal_id: 3, instruction_number: 2, instruction: "Saute Peppers" },
      ]);
    });
};
