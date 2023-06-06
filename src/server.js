require("express-async-errors"); // 23 - Importando o express-async-errors
require("dotenv/config");
const migrationsRun = require("./database/sqlite/migrations"); // 31 - Importando a conexão com o db
const AppError = require("./utils/AppError"); // 24 - Importando a classe AppError
const uploadConfig = require("./configs/upload");

const cors = require("cors");
const express = require("express"); // 1 - Importando o express
const routes = require("./routes"); // 14 - Importando os grupos de rotas de ./routes/index.js

migrationsRun(); // 32 - Executando a conexão com o db

const app = express(); // 2 - Inicializando o express
app.use(cors());
app.use(express.json()); // 5 - Informando para a api qual padrão as informações serão enviadas

app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER));

app.use(routes) // 15 - Informando para a api quais as rotas estão disponíveis para uso

app.use((error, request, response, next) => { // 25 - Fazendo o tratamento de erros
    if(error instanceof AppError) {
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message
        });
    }

    //console.error(error);

    return response.status(500).json({
        status: "error",
        message: "Internal server error",
    });
});

const PORT = process.env.PORT || 3333; // 3 - Armazenando a porta na variável
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`)); // 4 - Informando ao app qual porta ele deve ouvir