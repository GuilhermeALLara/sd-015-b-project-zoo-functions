const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const speciesObject = {};
data.species.forEach((animal) => {
  speciesObject[animal.name] = animal.residents.length;
  return speciesObject;
});
console.log(speciesObject.lions);

function countAnimals(animal = speciesObject) {
  if (Object.keys(speciesObject).includes(animal.specie)) {
    if (animal.sex) {
      const animalsOfSex = species.find((subject) => subject.name === animal.specie).residents;
      console.log(animalsOfSex);
      return animalsOfSex.filter((element) => element.sex === animal.sex).length;
    }
    return speciesObject[animal.specie];
  }
  return animal;
}

console.log(countAnimals('lions'));

module.exports = countAnimals;
