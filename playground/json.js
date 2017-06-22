//var obj = {
  //name: 'Micheal'
//};
//var stringObj = JSON.stringify(obj);
//console.log(typeof stringObj);
//console.log(stringObj);

//var personString = '{"name": "Micheal","age": 22}';
//var person = JSON.parse(personString);
//console.log(typeof person);
//console.log(person);

const fs = require('fs');

var originalNote = {
  title: 'Some title',
  body: 'Some body'
};
var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);


var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);
