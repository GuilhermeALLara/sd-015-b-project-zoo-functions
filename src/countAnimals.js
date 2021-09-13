const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    return data.species.reduce((acc, { name, residents }) => {
      acc[name] = residents.length;
      return acc;
    }, {});
  }
  const { specie, gender = undefined } = animal;
  if (gender === undefined) {
    const quantAnimal = data.species.find(({ name }) => name === specie);
    return quantAnimal.residents.length;
  }
  const quantAnimal = data.species.find(({ name }) => name === specie)
    .residents.filter(({ sex }) => sex === gender);
  return quantAnimal.length;
}
console.log(countAnimals({ specie: 'bears', gender: 'female' }));
module.exports = countAnimals;
