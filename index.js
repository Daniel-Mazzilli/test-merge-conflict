function createPerson(name, age) {
    return {
      name,
      age,
      friends: [],
    };
  }
  
  function addPersonAsFriend(personX, personZ) {
    personX.friends.push(personZ);
    return personX;
  }
  
  
  module.exports = {
    createPerson,
    addPersonAsFriend,
  };