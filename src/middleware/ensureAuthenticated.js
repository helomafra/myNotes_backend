const { verify } = require("jsonwebtoken");
const AppError = require("../utils/AppError");
const authConfig = require("../configs/auth");

function ensureAuthenticated(request, response, next) {
  const authHeader = request.headers.authorization; //recuperando o token de autorização

  if (!authHeader) {
    throw new AppError("JWT Token não informado", 401);
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: user_id } = verify(token, authConfig.jwt.secret); //verificando se é um token válido e criando um alias para o sub

    request.user = {
      id: Number(user_id),
    };

    return next();
  } catch {
    throw new AppError("JWT Token inválido", 401);
  }
}

module.exports = ensureAuthenticated;
