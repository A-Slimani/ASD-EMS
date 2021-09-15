const mongoose = require('mongoose');

const url =
  'mongodb+srv://esd-ems:esd-ems@cluster0.qyzul.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(url);

const Person = mongoose.model('Person', personSchema);

Person.find({}).then(result => {
  result.forEach(person => {
    console.log(person);
  });
  mongoose.connection.close();
});
