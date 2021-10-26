import EmployeeWebLayout from './components/EmployeeWebLayout';
import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

const Content = () => {
  const empid = localStorage.getItem("id");
  const [application, setApplication] = useState({
    userid: empid,
    fname: '',
    lname: '',
    applicationtype: '',
    applicationdate: '',
    status: 'Pending',
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
    await axios.post('https://asd-ems-db.herokuapp.com/applicationform', application);
    alert(
      'Application Submitted \n\n process takes up to 5 business days \n\n Select OK to navigate to dashboard'
    );
    history.push({
      pathname: `/EmployeeDashboard`,
    })
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

  if (localStorage.getItem("id") !== null) {
    return (
      <>
        <div>
          <form id="applicationform" name="applicationform" onSubmit={e => onSubmit(e)}>
            <h1 style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold' }}> Launch Application </h1>
            <p />

            <div style={{ paddingTop: 20 }}>
              <label style={{ fontWeight: "bold" }}> Date: </label>
              <small> Use the calendar on the right </small> <p />
              <input
                type="date"
                placeholder="DD/MM/YYYY"
                name="applicationdate"
                className="formtextfield"
                value={applicationdate}
                onChange={e => onInputChange(e)}
              />
              <br /> <p />
            </div>

            <div style={{ paddingTop: 20 }}>
              <label style={{ fontWeight: "bold" }}> First Name: </label>
              <small>Up to 255 Characters </small> <p> </p>
              <input
                type="text"
                name="fname"
                className="formtextfield"
                value={fname}
                onChange={e => onInputChange(e)}
              />
              <br /> <p />
            </div>

            <div style={{ paddingTop: 20 }}>
              <label style={{ fontWeight: "bold" }}> Last Name: </label>
              <small>Up to 255 Characters </small> <p> </p>
              <input
                type="text"
                name="lname"
                className="formtextfield"
                value={lname}
                onChange={e => onInputChange(e)}
              />
              <br /> <p />
            </div>

            <div style={{ paddingTop: 20 }}>
              <label style={{ fontWeight: "bold" }}> Type of Application: </label>
              <select
                name="applicationtype"
                className="formtextfield"
                value={applicationtype}
                onChange={e => onInputChange(e)}>
                <option value="select"> -- Select one -- </option>
                <option value="Transfer between Departments"> Transfer between Departments </option>
                <option value="Business Claims"> Business Claims </option>
                <option value="Apply Leave"> Apply Leave </option>
                <option value="Resignation"> Resignation </option>
                <option value="Others"> Others </option>
              </select>
              <br /> <p />
            </div>

            <div style={{ paddingTop: 20 }}>
              <label style={{ fontWeight: "bold" }}> Sub-Category: </label>
              <small>Up to 255 Characters </small> <p> </p>
              <textarea
                type="text"
                placeholder="Provide detailed description of the application"
                name="subcategory"
                className="formtextfield"
                value={subcategory}
                onChange={e => onInputChange(e)}
              />
              <br /> <p />
            </div>

            <div style={{ paddingTop: 20 }}>
              <label style={{ fontWeight: "bold" }}> Reason </label>
              <small>Up to 255 Characters </small> <p> </p>
              <textarea
                type="text"
                placeholder="Provide detailed and valid reason"
                name="reason"
                className="formtextfield"
                value={reason}
                onChange={e => onInputChange(e)}
              />
              <br /> <p />
            </div>

            <div style={{ textAlign: 'center', paddingTop: 10, fontSize: 15, fontStyle: "italic", fontWeight: "bold" }}>
              <small>
                The application process may takes up to 3-5 business days <br />
                Employee will be informed when the application is approved or rejected
              </small>
              <br />
              <button type="submit" id="submit" className="button" onClick={handleSubmit}> Submit </button>
            </div>
          </form>
        </div>
      </>
    );
  } else {
    return <Redirect to={{ pathname: '/' }} />
  }
};

const Application = () => {
  return <EmployeeWebLayout content={Content()} />;
};

export default Application;
