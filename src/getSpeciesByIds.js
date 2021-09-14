const data = require('../data/zoo_data');

// um ou mais ids (parametros, então coloquei os ..., chamado de rest argument) //
const getSpeciesByIds = (...ids) => data.filter((kind) => ids.includes(kind.id));

module.exports = getSpeciesByIds;
