//require imports a module
//require returns the exports object from the module
const {people,ages} = require('./people.js')
console.log(people, ages);

//OS module
const os = require('os');
//info about current user
const user = os.userInfo();
console.log(os,user)