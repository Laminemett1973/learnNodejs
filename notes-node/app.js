const fs = require('fs');
const notes = require('./notes.js');
const _ = require('lodash');
const yargs = require('yargs');
var titleOption ={describe: 'Title of the note',demand:true,alias:'t' };
var bodyOption = {describe: 'Body of the note', demand:true,alias:'b' };
const argv = yargs
      .command('add','Add a new note',{title:titleOption,body:bodyOption})
      .command('list','List all notes')
      .command('remove','Remove a note',{title:titleOption})
      .command('read','Read a note',{title:titleOption})
      .help()
      .argv;
var command = argv._[0];



if (command === 'add') {
    var note =  notes.addNote(argv.title,argv.body);
    if (note){
      console.log('Note created');
      notes.logNote(note);
    } else {
      console.log('title note alredy taken');
    }
} else if (command === 'list') {
   var newNote =  notes.getAll();
   console.log(`printing ${newNote.length} note(s)`);
   newNote.forEach((note) => notes.logNote(note));
} else if (command === 'read') {
    var note = notes.readNote(argv.title);
    if (note){
      console.log('Note found');
      notes.logNote(note);
    } else {
      console.log('Note not found');
    }
}else if (command === 'remove') {
    var removed = notes.removeNote(argv.title);
    var message = removed ? 'note removed' : "note doesn't exist"
    console.log(message);
}else {
  console.log('Command not recognized');
}
