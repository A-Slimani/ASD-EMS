// EXAMPLE OF HOW TO USE MONGDODB URL

const mongoose = require('mongoose');

// MONGODB URL
const url =
  'mongodb+srv://esd-ems:esd-ems@cluster0.qyzul.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

// CONNECTS TO DATABASE
mongoose.connect(url);

// DEFINES THE VALUES OF THE SCHEMA

const employeeSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minlength: 2,
  },
  lastName: {
    type: String,
    required: true,
    minlength: 2,
  },
	department: {
		type: String,
		required: true,
		minLength: 2,
	},
	employmentType: {
		type: String,
		required: true,
		minLength: 2
	}
});

const Employee = mongoose.model('employee', employeeSchema);


const first = new Employee({
  id: 1,
			firstName: "Abdullah",
			lastName: "Slimani",
			department: "HR",
			employmentType: "Full-time"
})

first.save().then(() => {
  console.log('person saved!');
  mongoose.connection.close();
});
