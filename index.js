function createPerson(firstName, age) {
    return {
      firstName,
      age,
      friends: [],
    };
  }
  
  function addPersonAsFriend(person, friend) {
    person.friends.push(friend);
    return person;
  }
  

  module.exports = {
    createPerson,
    addPersonAsFriend,
  };