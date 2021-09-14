const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const newObj = { child: 0, adult: 0, senior: 0 };
  entrants.forEach((entrant) => {
    if (entrant.age < 18) {
      newObj.child += 1;
    } else if (entrant.age >= 18 && entrant.age < 50) {
      newObj.adult += 1;
    } else {
      newObj.senior += 1;
    }
  });
  return newObj;
}
const xablau = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];
countEntrants(xablau);

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const getValues = countEntrants(entrants);
  const childPrices = prices.child;
  const adultPrices = prices.adult;
  const seniorPrices = prices.senior;
  const price = (getValues.child * childPrices) + (getValues.adult * adultPrices)
   + (getValues.senior * seniorPrices);
  return price;
}

module.exports = { calculateEntry, countEntrants };
