const mongoose = require('mongoose');

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
  fname: {
    type: String,
    required: true,
    minlength: 2,
  },
  lname: {
    type: String,
    required: true,
    minlength: 2,
  },
	dob: {
		type: String,
		required: true,
		minLength: 2,
	},
	phoneno: {
		type: String,
		required: true,
		minLength: 2
	},
  username: {
		type: String,
		required: true,
		minLength: 2,
	},
  pwd: {
		type: String,
		required: true,
		minLength: 2,
	},
  accname: {
		type: String,
		required: true,
		minLength: 2,
	},
	accnum: {
		type: String,
		required: true,
		minLength: 2
	},
  accbsb: {
		type: String,
		required: true,
		minLength: 2,
	},
  address: {
		type: String,
		required: true,
		minLength: 2,
	},
  suburb: {
		type: String,
		required: true,
		minLength: 2,
	},
  state : {
		type: String,
		required: true,
		minLength: 2,
	},
	pcode : {
		type: String,
		required: true,
		minLength: 2
	},
  employdate : {
		type: String,
		required: true,
		minLength: 2,
	},
  dept : {
		type: String,
		required: true,
		minLength: 2,
	},
  employtype : {
		type: String,
		required: true,
		minLength: 2,
	},
	id: {
		type: String,
		required: true,
		minLength: 2
	}
});

employeeSchema.set('toJSON', {
  transform: (document, returnedObj) => {
    // returnedObj.id = returnedObj._id.toString();
		delete returnedObj._id;
    delete returnedObj.__v;
  },
});

module.exports = mongoose.model('Employee', employeeSchema);
