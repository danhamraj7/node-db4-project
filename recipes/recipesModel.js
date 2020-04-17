const db = require("../data/dbconfig");
module.exports = {
  find,
  findById,
  add,
  update,
  remove,
};

function find() {
  return db("recipe");
}

function findById(id) {
  return db("recipe").where({ id }).first();
}

// function findSteps(scheme_Id) {
//   return db("steps as st")
//     .join("schemes as sch", "st.scheme_id", "sch.id")
//     .select(
//       "sch.id as scheme_Id",
//       "sch.scheme_name as Scheme_Name",
//       "st.id as Step_Id",
//       "st.step_number as Step_Number",
//       "st.instructions as Step_Instructions"
//     )
//     .where({ scheme_Id: scheme_Id });
//}

function add(recipe) {
  return db("recipe")
    .insert(recipe, "id")
    .then(([id]) => {
      return findById(id);
    });
}

// function addStep(step) {
//   db("steps")
//     .insert(step, "id")
//     .then(([id]) => {
//       return findById(id);
//     });
// }

function update(recipe, id) {
  return db("recipe").where("id", Number(id)).update(recipe);
}

function remove(id) {
  return db("recipe").where("id", Number(id)).del();
}
