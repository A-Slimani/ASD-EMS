import axios from 'axios';
import WebLayout from './components/WebLayout';
import React, { useState } from 'react';
import { Redirect } from 'react-router';

const Content = () => {
  const [roster, setRoster] = useState({
    fname: '',
    lname: '',
    rosterdate: '',
  });

  const { fname, lname, rosterdate } = roster;

  //collect data entered into the register form
  const onInputChange = e => {
    setRoster({ ...roster, [e.target.name]: e.target.value });
  };

  // execute the add function after form validation is complete
  const onSubmit = async e => {
    await axios.post('https://asd-ems-db.herokuapp.com/roster', roster);
    window.location = '/Roster';
  };

  //validate form to ensure correct data in entered before submit the form or execute the add function
  const handleSubmit = e => {
    function isText(text) {
      return /^[A-Za-z]+$/.test(text);
    }

    e.preventDefault();
    var s = window.confirm(
      'Do you want add new roster with the entered information?\n\nSelect OK to proceed\n\nSelect CANCEL to reset form'
    );
    if (s === true) {
      var fname = document.forms['rosterform']['fname'].value;
      var lname = document.forms['rosterform']['lname'].value;
      var rosterdate = document.forms['rosterform']['rosterdate'].value;

      if (fname === '' || isText(lname) === false) {
        alert('First Name field is empty or invalid format input');
      } else if (lname === '' || isText(lname) === false) {
        alert('Last Name field is empty or invalid format input');
      } else if (rosterdate === '') {
        alert('Employement Date must be select');
      } else if (new Date().getDate() > new Date(rosterdate).getDate()) {
        alert('Invalid date');
      } else if (new Date().getMonth() > new Date(rosterdate).getMonth()) {
        alert('Invalid month');
      } else if (new Date().getFullYear() > new Date(rosterdate).getFullYear()) {
        alert('Invalid year');
      } else {
        onSubmit();
      }
    } else {
      window.location.reload();
    }
  };

  function goBack(e) {
    e.preventDefault();
    var option = window.confirm(
      'Do you want leave the page?\n\nSelect OK to go back and data will not be saved\n\nSelect CANCEL to remain on the page'
    );
    if (option === true) {
      window.history.back();
    }
  }

  if (localStorage.getItem('id') !== null) {
    return (
      <>
        <div>
          <form id="rosterform" name="rosterform" onSubmit={e => onSubmit(e)}>
            <button
              style={{ float: 'left' }}
              type="submit"
              className="update"
              onClick={goBack}>
              {' '}
              Back{' '}
            </button>
            <h1 style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold' }}>
              {' '}
              Add New Roster{' '}
            </h1>
            <p style={{ textAlign: 'center' }}>
              {' '}
              Please fill out the details below, all fields are required{' '}
            </p>

            <div style={{ paddingTop: 20 }}>
              <label style={{ fontWeight: 'bold' }}> First Name: </label>
              <small>Up to 255 Characters </small> <p> </p>
              <input
                type="text"
                placeholder="First Name"
                name="fname"
                className="formtextfield"
                value={fname}
                onChange={e => onInputChange(e)}
              />{' '}
              <br />
            </div>

            <div style={{ paddingTop: 20 }}>
              <label style={{ fontWeight: 'bold' }}> Last Name: </label>
              <small>Up to 255 Characters </small> <p></p>
              <input
                type="text"
                placeholder="Last Name"
                name="lname"
                className="formtextfield"
                value={lname}
                onChange={e => onInputChange(e)}
              />{' '}
              <br />
            </div>

            <div style={{ paddingTop: 20 }}>
              <label style={{ fontWeight: 'bold' }}> Roster Date: </label>
              <small> Use the calendar on the right </small>
              <input
                type="date"
                placeholder="DD/MM/YYYY"
                name="rosterdate"
                className="formtextfield"
                value={rosterdate}
                onChange={e => onInputChange(e)}
              />{' '}
              <p />
            </div>

            <div style={{ textAlign: 'center', paddingTop: 10 }}>
              <button type="submit" id="submit" className="button" onClick={handleSubmit}>
                {' '}
                Create New Roster{' '}
              </button>{' '}
            </div>
          </form>
        </div>
      </>
    );
  } else {
    return <Redirect to={{ pathname: '/' }} />;
  }
};

const AddRoster = () => {
  return <WebLayout content={Content()} />;
};

export default AddRoster;
