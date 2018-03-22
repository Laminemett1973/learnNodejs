const fs = require('fs');
var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('note-data.json');
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
};
var saveNotes = (notes) =>{
  fs.writeFileSync('note-data.json',JSON.stringify(notes));
};

var addNote = (title,body) => {
  var notes = fetchNotes();
  var note = {
    title :title,
    body:body
  };

  var duplicateNote = notes.filter((note) => note.title === title);
  if (duplicateNote.length === 0  ) {
    notes.push(note);
    saveNotes(notes);
    console.log(note);
    console.log(notes);
    return note;
  }
  console.log(typeof duplicatyeNote);
  console.log('number of duplicate note: ',duplicateNote);

};



var getAll = () => {
  return fetchNotes();
};
var removeNote = (title) => {
  //fetch notes
  var notes = fetchNotes();
  var filtredNotes =  notes.filter((note) => {
    return note.title !== title;
  });
  saveNotes(filtredNotes);
  return notes.length !== filtredNotes.length;

};
var readNote = (title) =>{
  notes = fetchNotes();
  var filtredNotes = notes.filter((note) => note.title === title);
  console.log(filtredNotes);
  return filtredNotes[0];
};
var logNote = (note) =>{
  console.log('---');
  console.log(`Title: ${note.title}`);
  console.log(`body: ${note.body}`);
};


module.exports = {
  addNote,
  getAll,
  removeNote,
  readNote,
  logNote
};
