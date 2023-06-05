const { Router } = require("express"); // 6 - Importando o Router do express
const multer = require("multer");
const uploadConfig = require("../configs/upload");

const UsersController = require("../controllers/UsersController"); // 18 - Importando a classe de usuários
const UserAvatarController = require("../controllers/UserAvatarController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const usersRoutes = Router(); // 7 - Inicializando o Router
const upload = multer(uploadConfig.MULTER);

const usersController = new UsersController(); // 19 - Criando uma nova instância da classe de usuários
const userAvatarController = new UserAvatarController();

usersRoutes.post("/", usersController.create); // 20 - Busca a função create dentro de controllers/UserController.js
usersRoutes.put("/", ensureAuthenticated, usersController.update); // 40 - Busca a função update dentro de controllers/UserController.js
usersRoutes.patch("/avatar", ensureAuthenticated, upload.single("avatar"), userAvatarController.update)

module.exports = usersRoutes; // 8 - Exportando as rotas de usuários