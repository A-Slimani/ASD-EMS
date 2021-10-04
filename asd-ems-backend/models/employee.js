
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

require('dotenv').config();

const url = process.env.MONGODB_URI;

console.log('connecting to', url);

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Schema connected to mongoDB');
  })
  .catch(error => {
    console.log('error connecting to MongoDB: ', error.message);
  });

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
	EmploymentType: {
		type: String,
		required: true,
		minLength: 2
	},
});

//Application of unique validator
employeeSchema.plugin(uniqueValidator, { message: 'Error, expected unique employee' });

employeeSchema.set('toJSON', {
  transform: (document, returnedObj) => {
    returnedObj.id = returnedObj._id.toString();
    delete returnedObj._id;
    delete returnedObj.__v;
  },
});

module.exports = mongoose.model('employee', employeeSchema);
