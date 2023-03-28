const { Router } = require("express");
const multer = require("multer");
const uploadConfig = require("../configs/upload");

const UsersController = require("../controllers/UsersController");
const UserAvatarController = require("../controllers/UserAvatarController");

const ensureAuthenticated = require("../middleware/ensureAuthenticated");

const userRoutes = Router();
const upload = multer(uploadConfig.MULTER);

const usersController = new UsersController(); //instanciando a classe
const userAvatarController = new UserAvatarController(); //instanciando a classe

userRoutes.post("/", usersController.create);
userRoutes.put("/", ensureAuthenticated, usersController.update);
userRoutes.patch(
  "/avatar", //rota
  ensureAuthenticated, //autenticação
  upload.single("avatar"), //upload da imagem
  userAvatarController.update //levar a imagem pra cadastrar no banco
);

module.exports = userRoutes;
