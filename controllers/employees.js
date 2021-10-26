const employeeRouter = require('express').Router();
const { response } = require('express');
const Employee = require('../models/employee');

employeeRouter.get('/', (req, res) => {
  Employee.find({})
    .then(employee => {
      console.log('test');
      res.json(employee);
    })
    .catch(error => next(error));
});

employeeRouter.post('/Dashboard', (req, res) => {
  res.json('Dashboard');
});

employeeRouter.get('/:id', (req, res, next) => {
  Employee.findById(req.params.id)
    .then(employee => {
      employee ? response.json(employee) : response.status(404).end();
    })
    .catch(error => next(error));
});

employeeRouter.post('/', (request, response, next) => {
  const body = request.body;

  if (body === undefined) {
    return response.status(400).json({ error: 'content missing' });
  }

  const employee = new Employee({
    fname: body.fname,
    lname: body.lname,
    dob: body.dob,
    phoneno: body.phoneno,
    username: body.username,
    pwd: body.pwd,
    accname: body.accname,
    accnum: body.accnum,
    accbsb: body.accbsb,
    address: body.address,
    suburb: body.suburb,
    state: body.state,
    pcode: body.pcode,
    employdate: body.employdate,
    dept: body.dept,
    employtype: body.employtype,
    id: body.id,
  });

  employee
    .save()
    .then(savedEmployee => {
      return savedEmployee.toJSON();
    })
    .then(savedAndFormattedNote => {
      response.json(savedAndFormattedNote);
    })
    .catch(error => next(error));
});

employeeRouter.delete('/:id', (request, response) => {
  Employee.findByIdAndRemove(request.params.id)
    .then(() => {
      response.status(204).end();
    })
    .catch(error => next(error));
});

employeeRouter.put('/:id', (request, response, next) => {
  const body = request.body;

  const person = {
    name: body.name,
    number: body.number,
  };

  Employee.findByIdAndUpdate(request.params.id, person, { new: true })
    .then(updatedPerson => {
      response.json(updatedPerson);
    })
    .catch(error => next(error));
});

module.exports = employeeRouter;
