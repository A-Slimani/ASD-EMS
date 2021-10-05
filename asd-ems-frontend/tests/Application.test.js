import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
// import Application from '../Application';

// const sum = require('./sum');

beforeEach (() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach (() => {
  document.body.removeChild(container);
  container=null;
});

it("check for form is clicked", () => {
  act(() => {
    ReactDOM.render(<Content />, container);
  })

  const firstName = container.querySelector("#firstName");
  const button = container.querySelector("button");
  firstName.change();
  button.click();
  expect(firstName.value).toBe('');
})

// test('adds employee to database', () => {
//   expect(e).toBe("");
// });