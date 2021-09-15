const mongoose = require('mongoose');

const url =
  'mongodb+srv://esd-ems:esd-ems@cluster0.qyzul.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(url);

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const Person = mongoose.model('Person', personSchema);

const person = new Person({
  name: 'John',
  age: 30,
});

// person.save().then(() => {
//   console.log('person saved!');
//   mongoose.connection.close();
// });

Person.find({}).then(result => {
  result.forEach(person => {
    console.log(person);
  });
  mongoose.connection.close();
});
