// EXAMPLE OF HOW TO USE MONGDODB URL

const mongoose = require('mongoose');

// MONGODB URL
const url =
  'mongodb+srv://esd-ems:esd-ems@cluster0.qyzul.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

// CONNECTS TO DATABASE
mongoose.connect(url);

// DEFINES THE VALUES OF THE SCHEMA
const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const Person = mongoose.model('Person', personSchema);

// CREATING AND SAVING OBJECTS
const person = new Person({
  name: 'John',
  age: 30,
});

// ADD NEW PERSON
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

var choice = 0;

readline.question('View Database (1), Add Person to Database (2)', c => {
  c = choice;
  readline.close();
});

if (choice === 1) {
  Person.find({}).then(result => {
    result.forEach(person => {
      console.log(person);
    });
    mongoose.connection.close();
  });
} else if (choice === 2) {

}

// person.save().then(() => {
//   console.log('person saved!');
//   mongoose.connection.close();
// });
