const employeeRouter = require('express').Router();
const { response } = require('express');
const Employee = require('../models/employee');

employeeRouter.get('/', (req, res) => {
  Employee.find({})
    .then(person => {
      res.json(person);
    })
    .catch(error => next(error));
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

  const person = new Employee({
    name: body.name,
    number: body.number,
  });

  person
    .save()
    .then(savedPerson => {
      return savedPerson.toJSON();
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

module.exports = employeeRouter 
