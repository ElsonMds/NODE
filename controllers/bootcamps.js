// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ sucesso: true, msg: "mostrando todos os bootcamps" });
};

// @desc    Get a single bootcamp
// @route   GET /api/v1/bootcamp/:id
// @access  Public
exports.getBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ sucesso: true, msg: `mostrando o bootcamp ${req.params.id}` });
};

// @desc    Create a  bootcamp
// @route   POST /api/v1/bootcamp
// @access  Private
exports.createtBootcamp = (req, res, next) => {
  res.status(200).json({ sucesso: true, msg: "criar novo bootcamps" });
};

// @desc    Update a  bootcamp
// @route   PUT /api/v1/bootcamp/:id
// @access  Private
exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ sucesso: true, msg: `atualizar bootcamp ${req.params.id}` });
};

// @desc    Delete a  bootcamp
// @route   DELETE /api/v1/bootcamp/:id
// @access  Private
exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ sucesso: true, msg: `deletar bootcamp ${req.params.id}` });
};
