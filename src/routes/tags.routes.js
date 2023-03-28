const { Router } = require("express");

const TagsController = require("../controllers/TagsController");
const ensureAuthenticated = require("../middleware/ensureAuthenticated");

const tagsRoutes = Router();

const tagsController = new TagsController(); //instanciando a classe

tagsRoutes.get("/", ensureAuthenticated, tagsController.index);

module.exports = tagsRoutes;
