const models = require('./models')

const isCepValid = (cep) => {
  const CEP_REGEX = /\d{5}-\d{3}/;
  if (!CEP_REGEX.test(cep)) return false;

  return true;
}

module.exports = {
  isCepValid,
};

