const { Router } = require("express"); // 6 - Importando o Router do express

const UsersController = require("../controllers/UsersController"); // 18 - Importando a classe de usuários

const usersRoutes = Router(); // 7 - Inicializando o Router

const usersController = new UsersController(); // 19 - Criando uma nova instância da classe de usuários

usersRoutes.post("/", usersController.create); // 20 - Busca a função create dentro de controllers/UserController.js
usersRoutes.put("/:id", usersController.update); // 40 - Busca a função update dentro de controllers/UserController.js

module.exports = usersRoutes; // 8 - Exportando as rotas de usuários