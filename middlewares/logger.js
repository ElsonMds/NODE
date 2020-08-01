
/**
 * Motras requisiçoes no console
 * @param {String} req  - requisiçao ao servidor 
 * @param {String} res  - resposta do servidor
 * @param {String} next - proximo middleware a ser encadeado
 */
const logger = (req, res, next) => {
    console.log(
      `${req.method}  ${req.protocol}://${req.get("host")}${req.originalUrl}`
    );
    next();
  };

  module.exports=logger;