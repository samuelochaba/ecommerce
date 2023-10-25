const { validattionResult } = require("express-validator");

module.exports = {
  handleErrors(templateFunc) {
    return (req, res, next) => {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        res.send(productsNewTemplate({ errors }));
      }

      next();
    };
  },
};
