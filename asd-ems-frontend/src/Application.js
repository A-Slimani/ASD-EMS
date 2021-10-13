import EmployeeWebLayout from './components/EmployeeWebLayout';
import React, { useState } from 'react';
import axios from 'axios';
import { useRouteMatch } from 'react-router-dom';

const Content = () => {
  const [application, setApplication] = useState({
    fname: '',
    lname: '',
    applicationtype: '',
    applicationdate: '',
    status: 'pending',
    subcategory: '',
    reason: '',
  });

  //Ensures all const values in the application are initialised
  const { fname, lname, applicationtype, applicationdate, status, subcategory, reason } =
    application;

  //Required to guarantee there are no issues upon input change
  const onInputChange = e => {
    setApplication({ ...application, [e.target.name]: e.target.value });
  };

  //Function will post form to database once user has filled in all fields!
  const onSubmit = async e => {
    // await axios.post("http://localhost:3002/applicationform", application);
    //change me back to :3002 when using Mongo. 3001 for local
    await axios.post('http://localhost:3001/applicationform', application);
    alert(
      'Application Submitted \n\n process takes up to 5 business days \n\n Select OK to navigate to dashboard'
    );
    window.location = '/EmployeeDashboard';
  };

  //Function has been created to validate form, with variables and if statements below to ensure no issues arise
  const handleSubmit = e => {
    function isText(text) {
      return /^[A-Za-z]+$/.test(text);
    }

    e.preventDefault();
    var s = window.confirm(
      'Do you want submit the application with the entered information?\n\nSelect OK to proceed\n\nSelect CANCEL to reset form'
    );
    if (s === true) {
      var fname = document.forms['applicationform']['fname'].value;
      var lname = document.forms['applicationform']['lname'].value;
      var subcategory = document.forms['applicationform']['subcategory'].value;
      var reason = document.forms['applicationform']['reason'].value;
      var applicationdate = document.forms['applicationform']['applicationdate'].value;

      if (fname === '' || isText(fname) === false) {
        alert('First Name field is empty or invalid format input');
      } else if (lname === '' || isText(lname) === false) {
        alert('Last Name field is empty or invalid format input');
      } else if (subcategory === '') {
        alert('Subcategory field is empty');
      } else if (reason === '') {
        alert('Reason field is empty');
      } else if (applicationdate === '') {
        alert('Application Date  must be select');
      } else {
        onSubmit();
      }
    }
    //Resets application form when it is necessary for the form
    else {
      document.getElementById('applicationform').reset();
    }
  };

  //Page structure itself, with form contained within divs to ensure layout is as desired
  return (
    <>
      <div>
        {/* Page form which is linked to onSubmit function when user fills out form and hits submit */}
        <form
          id="applicationform"
          className="form"
          name="applicationform"
          onSubmit={e => onSubmit(e)}>
          <h1 style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold' }}>
            {' '}
            Launch Application{' '}
          </h1>
          <p />
          {/* Field to ensure the current date is connected to the form in the system */}
          <label> Date: </label> <br />
          <input
            type="date"
            placeholder="DD/MM/YYYY"
            name="applicationdate"
            className="formtextfield"
            value={applicationdate}
            onChange={e => onInputChange(e)}
          />{' '}
          <br /> <p />
          {/* Below fields ensure the user's full name is on the application that they are submitting*/}
          <label> First Name: </label> <br />
          <input
            type="text"
            name="fname"
            className="formtextfield"
            value={fname}
            onChange={e => onInputChange(e)}
          />{' '}
          <br /> <p />
          <label> Last Name: </label> <br />
          <input
            type="text"
            name="lname"
            className="formtextfield"
            value={lname}
            onChange={e => onInputChange(e)}
          />{' '}
          <br /> <p />
          {/* Guarantees the type of form that the user has submitted, eg. resignation or branch change,
              is shown on their form when they submit it. */}
          <label> Type of Application: </label> <br />
          <select
            name="applicationtype"
            className="formtextfield"
            value={applicationtype}
            onChange={e => onInputChange(e)}>
            <option value="select"> -- Select one -- </option>
            <option value="transfer"> Transfer between Departments </option>
            <option value="claim"> Business Claims </option>
            <option value="leave"> Apply Leave </option>
            <option value="resign"> Resignation </option>
            <option value="other"> Others </option>
          </select>{' '}
          <br /> <p />
          {/* Allows users to update their form with a sub category to provide more information */}
          <label> Sub-Category: </label> <br />
          <textarea
            type="text"
            placeholder="Provide detailed description of the application"
            name="subcategory"
            className="formtextfield"
            value={subcategory}
            onChange={e => onInputChange(e)}
          />{' '}
          <br /> <p />
          {/* Ensures users can provide a detailed explanation of their application if necessary.
              All above fields are viewable on Staff accounts where they can be accepted or declined. */}
          <label> Reason </label> <br />
          <textarea
            type="text"
            placeholder="Provide detailed and valid reason"
            name="reason"
            className="formtextfield"
            value={reason}
            onChange={e => onInputChange(e)}
          />{' '}
          <br /> <p />
          <div style={{ textAlign: 'center', paddingTop: 10 }}>
            <small>
              The application process may takes up to 3-5 business days <br />
              User may check their submitted applications in the personal file
            </small>{' '}
            <br />
            <button type="submit" id="submit" className="button" onClick={handleSubmit}>
              {' '}
              Submit{' '}
            </button>{' '}
          </div>
        </form>
      </div>
    </>
  );
};

//Ensures page runs properly and contains cross-site navigation bar
const Application = () => {
  const match = useRouteMatch('/Application/:id');
  return <EmployeeWebLayout id={match.params.id} content={Content()} />;
};

export default Application;
