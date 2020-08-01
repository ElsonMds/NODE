
/**  Obem todos os bootcamps
 * @route  GET /api/v1/bootcamps
 * @param {String} req  requisição do cliente ao servidor 
 * @param {String} res   resposta do servidor ao cliente
 * @param {String} next  ref para o proximo middleware
 * @access  Public
 */
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ sucesso: true, msg: "mostrando todos os bootcamps" });
};


/**  Obem um único bootcamp
 * @route  GET /api/v1/bootcamps/id
 * @param {String} req  requisição do cliente ao servidor 
 * @param {String} res   resposta do servidor ao cliente
 * @param {String} next  ref para o proximo middleware
 * @access  Public
 */
exports.getBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ sucesso: true, msg: `mostrando o bootcamp ${req.params.id}` });
};


/**  Cria um bootcamp
 * @route  POST /api/v1/bootcamps
 * @param {String} req  requisição do cliente ao servidor 
 * @param {String} res   resposta do servidor ao cliente
 * @param {String} next  ref para o proximo middleware
 * @access  Privado
 */
exports.createtBootcamp = (req, res, next) => {
  res.status(200).json({ sucesso: true, msg: "criar novo bootcamps" });
};


/**  Atualiza um bootcamp
 * @route  PUT /api/v1/bootcamps/id
 * @param {String} req  - requisição do cliente ao servidor 
 * @param {String} res   resposta do servidor ao cliente
 * @param {String} next  ref para o proximo middleware
 * @access  Privado
 */
exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ sucesso: true, msg: `atualizar bootcamp ${req.params.id}` });
};


/**  Deleta um bootcamp
 * @route  DELETE /api/v1/bootcamps/id
 * @param {String} req  requisição do cliente ao servidor 
 * @param {String} res   resposta do servidor ao cliente
 * @param {String} next  ref para o proximo middleware
 * @access  Privado
 */
exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ sucesso: true, msg: `deletar bootcamp ${req.params.id}` });
};
