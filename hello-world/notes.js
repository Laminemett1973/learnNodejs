console.log('Starting notes.js!');
module.exports.age=44;
module.exports.addNote =  () => {
  console.log('This is the note console');
  return 'Adding note from the function note'
};
module.exports.add = function (a,b) {
  console.log('calling add 2 numbers functions');
  return a + b ;
};
