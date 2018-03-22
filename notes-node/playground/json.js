// var obj = {
//   name:"Mohamed"
// };
//
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// var persoString = '{"name":"Mohamed","age":44}'
// var person = JSON.parse(persoString);
// console.log(typeof person)
// console.log(person);

const fs = require('fs');
var originalNode = {
  title:'secret',
  body: 'this all my secrets'
};
var originalNodeString = JSON.stringify(originalNode);
fs.writeFileSync('note.json',originalNodeString);


var noteString = fs.readFileSync('note.json');
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);
console.log(note.body);
