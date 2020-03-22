const uuid = require('uuid');

module.exports = { savePerson, save };

function savePerson(name) {
  return {
    id: uuid(),
    name,
  }
}


function save(name, saveFunction) {
  saveFunction(name);
  saveFunction(`${name} james`);
};