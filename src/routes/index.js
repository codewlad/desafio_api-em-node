const { Router } = require("express"); // 9 - Importando o Router do express

const usersRouter = require("./users.routes"); // 11 - Importando as rotas de usuário
const notesRouter = require("./notes.routes");
const tagsRouter = require("./tags.routes");
const sessionsRouter = require("./sessions.routes");

const routes = Router(); // 10 - Inicializando o Router
routes.use("/users", usersRouter) // 12 - Direcionando a rota /users para o grupo de rotas do usuário
routes.use("/sessions", sessionsRouter);
routes.use("/notes", notesRouter)
routes.use("/tags", tagsRouter)

module.exports = routes; // 13 - Exportando todos os grupos de rotas