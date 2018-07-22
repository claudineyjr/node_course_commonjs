const fullModule = require('./resources-to-export');
const { add, multiplicate, personalInfo } = require('./resources-to-export'); // destructuring assignment

console.log(fullModule.add(2, 5));
console.log(fullModule.personalInfo);

console.log(add(1, 2));
console.log(multiplicate(2, 3));
console.log(personalInfo);