const people =['yoshi', 'ryu', 'chun-li', 'mario'];
const ages = [20, 25, 30, 35];
// console.log(people);

//export a single variable
//module.exports = people;

//export multiple variables
module.exports = {
    people: people,
    ages: ages
}