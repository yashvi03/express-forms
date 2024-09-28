class UsersStorage {
  constructor() {
    this.storage = {};
    this.id = 0;
  }

  addUser({ firstName, lastName, email, age, bio }) {
    const id = this.id;
    this.storage[id] = { id, firstName, lastName, email, age, bio };
    this.id++;
  }

  getUsers() {
    return Object.values(this.storage);
  }

  getUser(id) {
    return this.storage[id];
  }

  updateUser(id, { firstName, lastName, email, age, bio }) {
    this.storage[id] = { id, firstName, lastName, email, age, bio };
  }

  deleteUser(id) {
    delete this.storage[id];
  }

  find(query) {
    return Object.values(this.storage).filter(user => {
      const nameMatch = query.name 
        ? user.firstName.includes(query.name) || user.lastName.includes(query.name) 
        : true;
      const emailMatch = query.email 
        ? user.email.includes(query.email) 
        : true;
      return nameMatch && emailMatch;
    });
  }
}

module.exports = new UsersStorage();
