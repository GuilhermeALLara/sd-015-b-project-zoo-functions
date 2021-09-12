const { hours, species } = require('../data/zoo_data');

const scheduleEntries = Object.entries(hours);
// console.log(scheduleEntries);

function noArgs() {
  const output = {};
  scheduleEntries.forEach((day, index) => {
    const { open, close } = day[1];
    const tempObj = {};
    if (open === 0) {
      tempObj[day[0]] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
    } else {
      const filteredByDay = species.filter((available) => available.availability.includes(day[0]));
      const namesByDay = filteredByDay.map((specie) => specie.name);
      tempObj[day[0]] = {
        officeHour: `Open from ${open}am until ${close}pm`,
        exhibition: namesByDay,
      };
    }
    Object.assign(output, tempObj);
  });
  return output;
}

function getSchedule(scheduleTarget) {
  return noArgs();
}

module.exports = getSchedule;
