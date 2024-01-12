function createPerson(fullName, age) {
    return {
      fullName,
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