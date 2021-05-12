//Create a json file

// const fs = require('fs');

// let student = { 
//     name: 'Mike',
//     age: 23, 
//     gender: 'Male',
//     department: 'English',
//     car: 'Honda' 
// };
 
// let data = JSON.stringify(student, null, 2);
// fs.writeFileSync('student-1.json', data);


//read the json file

const fs = require('fs');

let rawData = fs.readFileSync('student-1.json');
let student = JSON.parse(rawData);
console.log(student);