class AppError { // 20 - Criando a classe AppError
    message;
    statusCode;

    constructor(message, statusCode = 400) {
        this.message = message;
        this.statusCode = statusCode;
    }
}

module.exports = AppError; // 21 - Exportando a classe AppError