import EmployeeWebLayout from './components/EmployeeWebLayout';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouteMatch } from 'react-router-dom';
// import UserList from './UserList';

const Content = () => {
  const match = useRouteMatch('/Application/:id');
  const [application, setApplication] = useState({
    userid: match.params.id,
    fname: '',
    lname: '',
    applicationtype: '',
    applicationdate: '',
    status: 'pending',
    subcategory: '',
    reason: '',
  });

  const {
    userid,
    fname,
    lname,
    applicationtype,
    applicationdate,
    status,
    subcategory,
    reason,
  } = application;

  const onInputChange = e => {
    setApplication({ ...application, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    // await axios.post("http://localhost:3002/applicationform", application);
    //change me back to :3002 when using Mongo. 3001 for local
    await axios.post('http://localhost:3001/applicationform', application);
    alert(
      'Application Submitted \n\n process takes up to 5 business days \n\n Select OK to navigate to dashboard'
    );
    window.location = `/EmployeeDashboard/${match.params.id}`;
  };

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
    } else {
      window.location.reload();
    }
  };

  return (
    <>
      <div>
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
          <label> Type of Application: </label> <br />
          <select
            name="applicationtype"
            className="formtextfield"
            value={applicationtype}
            onChange={e => onInputChange(e)}>
            <option value="select"> -- Select one -- </option>
            <option value="transfer between department"> Transfer between Departments </option>
            <option value="business claim"> Business Claims </option>
            <option value="appply leave"> Apply Leave </option>
            <option value="resignation"> Resignation </option>
            <option value="others"> Others </option>
          </select>{' '}
          <br /> <p />
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

const Application = () => {
  const match = useRouteMatch('/Application/:id');
  return <EmployeeWebLayout id={match.params.id} content={Content()} />;
};

export default Application;
