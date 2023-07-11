const { default: axios } = require("axios");

class Student {
  constructor() {}
  finalMarks(total) {
    let externalmarks = this.getExternal(total);
    let internalMarks = this.getInternal(total);
    return externalmarks + internalMarks + 10;
  }
  getExternal(total) {
    return total + 1;
  }

  getInternal(total) {
    return total - 1;
  }

  dbData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(10), 1500);
    });
  }

  async getDataFromApi() {
    return new Promise((resolve, reject) => {
      axios
        .get("https://jsonplaceholder.typicode.com/todos")
        .then((response) => {
          resolve(response.data);
        })
        .catch((err) => reject(err));
    });
  }
}

module.exports = Student;
