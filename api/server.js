const express = require("express");

const helmet = require("helmet");

//const recipesRouter = require("./recipes/recipes-router.js");

const server = express();

server.use(express.json());

server.use(helmet());

//server.use("/api/recipes", recipesRouter);

server.get("/", (req, res) => {
  res.send("Server running");
});

module.exports = server;
