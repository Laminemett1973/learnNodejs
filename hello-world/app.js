console.log('Starting app.js!');
const fs = require('fs');
const os = require('os');
const note = require('./notes.js');
var _ = require('lodash');
var user = os.userInfo();
var AddingNote = note.addNote();
var arrayNames =  ['Mohamed',1,2.3,'Mohamed',1];
fs.appendFileSync('greeting.txt','Hello '+ user.username +' !');
fs.appendFileSync('greeting.txt',`Hello  ${user.username} ! You are ${note.age} years old and this is ${AddingNote}`);
console.log(note.add(2,7));
console.log(_.uniq(arrayNames));
