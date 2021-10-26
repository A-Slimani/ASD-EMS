import axios from 'axios';
import WebLayout from './components/WebLayout';
import React, { useState } from 'react';
import { Redirect } from 'react-router';

const Content = () => {
  const [employees, setEmployee] = useState({
    fname: "", lname: "", dob: "", phoneno: "",
    username: "", pwd: "",
    accname: "", accnum: "", accbsb: "",
    address: "", suburb: "", state: "", pcode: "",
    employdate: "", dept: "", employtype: ""
  });

  const {
    fname, lname, dob, phoneno,
    username, pwd,
    accname, accnum, accbsb,
    address, suburb, state, pcode,
    employdate, dept, employtype
  } = employees;

  //collect data entered into the register form
  const onInputChange = e => {
    setEmployee({ ...employees, [e.target.name]: e.target.value })
  };

  // execute the add function after form validation is complete
  const onSubmit = async e => {
    await axios.post("https://asd-ems-db.herokuapp.com/employees", employees);
    history.push({
      pathname: `/UserList`,
    })
  };

  //validate register form to ensure correct data in entered before submit the form or execute the add function
  const handleSubmit = e => {
    function isNumber(n) { return /^-?[\d.]+(?:e-?\d+)?$/.test(n); }
    function isName(name) { return /^-?[a-zA-Z0-9._%+-]+@EMS[HR,OP,MK,FN]{2}$/.test(name); }
    function isText(text) { return (/^[A-Za-z]+$/).test(text) }

    e.preventDefault();
    var s = window.confirm("Do you want add a new user with the entered information?\n\nSelect OK to proceed\n\nSelect CANCEL to reset form");
    if (s === true) {
      var fname = document.forms["registerform"]["fname"].value;
      var lname = document.forms["registerform"]["lname"].value;
      var dob = document.forms["registerform"]["dob"].value;
      var username = document.forms["registerform"]["username"].value;
      var pwd = document.forms["registerform"]["pwd"].value;
      var phoneno = document.forms["registerform"]["phoneno"].value;
      var accname = document.forms["registerform"]["accname"].value;
      var accnum = document.forms["registerform"]["accnum"].value;
      var accbsb = document.forms["registerform"]["accbsb"].value;
      var address = document.forms["registerform"]["address"].value;
      var suburb = document.forms["registerform"]["suburb"].value;
      var state = document.forms["registerform"]["state"].value;
      var pcode = document.forms["registerform"]["pcode"].value;
      var employtype = document.forms["registerform"]["employtype"].value;
      var employdate = document.forms["registerform"]["employdate"].value;
      var dept = document.forms["registerform"]["dept"].value;

      if (fname === "" || isText(lname) === false) { alert("First Name field is empty or invalid format input"); }
      else if (lname === "" || isText(lname) === false) { alert("Last Name field is empty or invalid format input"); }
      else if (dob === "") { alert("Date of Birth field must be select"); }
      else if (username === "" || isName(username) === false) { alert("Username field is empty or invalid format input \n\n Follow the given format"); }
      else if (pwd === "") { alert("Password field must be filled out"); }
      else if (phoneno === "" || isNumber(phoneno) === false) { alert("Contact Number field is empty or invalid format input"); }
      else if (accname === "" || isText(accname) === false) { alert("Account Name field is empty or invalid format input"); }
      else if (accnum === "" || isNumber(accnum) === false) { alert("Account Number is empty or invalid format input"); }
      else if (accbsb === "" || isNumber(accbsb) === false) { alert("Account BSB field is empty or invalid format input"); }
      else if (address === "") { alert("Address field is empty or invalid format input"); }
      else if (suburb === "" || isText(suburb) === false) { alert("Suburb field is empty or invalid format input"); }
      else if (state === "" || isText(state) === false) { alert("State field is empty or invalid format input"); }
      else if (pcode === "" || isNumber(pcode) === false) { alert("Post Code is empty or invalid format input"); }
      else if (employtype === "") { alert("Employement Type must be select"); }
      else if (employdate === "") { alert("Employement Date must be select"); }
      else if (dept === "") { alert("Department must be select"); }
      else if (dob > employdate) { alert("Invalid date of birth and employment date"); }
      else if ((new Date().getDate() > new Date(employdate).getDate())) { alert("Invalid date"); }
      else if ((new Date().getMonth() > new Date(employdate).getMonth())) { alert("Invalid month"); }
      else if ((new Date().getFullYear() > new Date(employdate).getFullYear())) { alert("Invalid year"); }
      else if ((new Date().getFullYear() - new Date(dob).getFullYear()) <= 18) { alert("Employee age must be 18 or over"); }
      else { onSubmit(); }
    }
    else { document.getElementById("registerform").reset(); }
  }

  //register form where admin can fill out user details to add new user to the system
  //each element has an input validation such that correct data inputted into each field
  //the button called the add function when selected
  if (localStorage.getItem("id") !== null) {
    return (
      <>
        <div>
          <form id='registerform' name='registerform' onSubmit={e => onSubmit(e)}>
            <h1 style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold', }}> Add New User </h1>
            <p style={{ textAlign: 'center' }}> Please fill out the details below, all fields are required </p>

            <div style={{ paddingTop: 20 }}>
              <label style={{ fontWeight: "bold" }}> First Name: </label>
              <small>Up to 255 Characters </small> <p> </p>
              <input
                type="text"
                placeholder="First Name"
                name="fname"
                className="formtextfield"
                value={fname}
                onChange={e => onInputChange(e)}
              />
              <br />
            </div>

            <div style={{ paddingTop: 20 }}>
              <label style={{ fontWeight: "bold" }}> Last Name: </label> <small>Up to 255 Characters </small> <p></p>
              <input
                type="text"
                placeholder="Last Name"
                name="lname"
                className="formtextfield"
                value={lname}
                onChange={e => onInputChange(e)}
              />
              <br />
            </div>

            <div style={{ paddingTop: 20 }}>
              <label style={{ fontWeight: "bold" }}> Date of Birth: </label>
              <small> Use the calendar on the right </small> <p />
              <input
                type="date"
                placeholder="DD/MM/YYYY"
                name="dob"
                className="formtextfield"
                value={dob}
                onChange={e => onInputChange(e)}
              />
              <br />
            </div>

            <div style={{ paddingTop: 20 }}>
              <label style={{ fontWeight: "bold" }}> Username: </label> <br />
              <small>
                <i> After @ must be the system name 'EMS' followed by one department  initial:
                  HR - Human Resource, OP - Operation, MK - Marketing, FN - Finance </i>
              </small>
              <p />
              <input
                type="email"
                placeholder="example@EMSHR"
                name="username"
                className="formtextfield"
                value={username}
                onChange={e => onInputChange(e)}
              />
              <br />
            </div>

            <div style={{ paddingTop: 20 }}>
              <label style={{ fontWeight: "bold" }}> Password: </label>
              <small> Maximum password length is 16 Characters </small> <p />
              <input
                type="password"
                placeholder="Password"
                maxLength="16" name="pwd"
                className="formtextfield"
                value={pwd}
                onChange={e => onInputChange(e)}
              />
              <br />
            </div>

            <div style={{ paddingTop: 20 }}>
              <label style={{ fontWeight: "bold" }}> Contact Number: </label>
              <small> Up to 10 digits </small> <p />
              <input
                type="text"
                placeholder="Phone Number"
                name="phoneno"
                maxLength="10"
                className="formtextfield"
                value={phoneno}
                onChange={e => onInputChange(e)}
              />
              <br />
            </div>

            <div style={{ paddingTop: 20 }}>
              <label style={{ fontWeight: "bold" }}> Bank Account Name: </label>
              <small> Up to 255 Characters </small>
              <p />
              <input
                type="text"
                placeholder="Full Name"
                name="accname"
                className="formtextfield"
                value={accname}
                onChange={e => onInputChange(e)}
              />
              <br />
            </div>

            <div style={{ paddingTop: 20 }}>
              <label style={{ fontWeight: "bold" }}> Bank Account Number: </label>
              <small> Up to 10 Digits </small>
              <p />
              <input
                type="text"
                placeholder="Account Number without space"
                name="accnum"
                minLength="6" maxLength="10"
                className="formtextfield"
                value={accnum}
                onChange={e => onInputChange(e)}
              />
              <br />
            </div>

            <div style={{ paddingTop: 20 }}>
              <label style={{ fontWeight: "bold" }}> BSB: </label>
              <small> Up to 6 Digits </small>
              <p />
              <input
                type="password"
                placeholder="BSB without space"
                name="accbsb" maxLength="6"
                className="formtextfield"
                value={accbsb}
                onChange={e => onInputChange(e)}
              />
              <br />
            </div>

            <div style={{ paddingTop: 20 }}>
              <label style={{ fontWeight: "bold" }}> Address: </label>
              <small> Up to 255 Characters </small> <p />
              <input
                type="text"
                placeholder="Address"
                maxLength="255"
                name="address"
                className="formtextfield"
                value={address}
                onChange={e => onInputChange(e)}
              />
              <br />
            </div>

            <div style={{ paddingTop: 20 }}>
              <label style={{ fontWeight: "bold" }}> Suburb: </label>
              <small>Up to 255 Characters </small> <p />
              <input
                type="text"
                placeholder="Suburb"
                maxLength="255"
                name="suburb"
                className="formtextfield"
                value={suburb}
                onChange={e => onInputChange(e)}
              />
              <br />
            </div>

            <div style={{ paddingTop: 20 }}>
              <label style={{ fontWeight: "bold" }}> State: </label>
              <small> Up 3 Character </small> <p />
              <input
                type="text"
                placeholder="State"
                name="state" maxLength="3"
                className="formtextfield"
                value={state}
                onChange={e => onInputChange(e)}
              />
              <br />
            </div>

            <div style={{ paddingTop: 20 }}>
              <label style={{ fontWeight: "bold" }}> Post Code: </label>
              <small> Up 4 Digits </small> <p />
              <input
                type="text"
                placeholder="Post Code"
                name="pcode" maxLength="4"
                className="formtextfield"
                value={pcode}
                onChange={e => onInputChange(e)}
              />
              <p />
            </div>

            <div style={{ paddingTop: 20 }}>
              <label style={{ fontWeight: "bold" }}> Employment Type: </label> <p />
              <select name="employtype" className="formtextfield" value={employtype} onChange={e => onInputChange(e)} >
                <option value="select"> -- Select one -- </option>
                <option value="Full-Time"> Full-Time </option>
                <option value="Part-Time"> Part-Time </option>
                <option value="Casual"> Casual </option>
              </select>
            </div>

            <div style={{ paddingTop: 20 }}>
              <label style={{ fontWeight: "bold" }}> Employment Date: </label>
              <small> Use the calendar on the right </small> <p />
              <input
                type="date"
                placeholder="DD/MM/YYYY"
                name="employdate"
                className="formtextfield"
                value={employdate}
                onChange={e => onInputChange(e)} />
              <p />
            </div>

            <div style={{ paddingTop: 20 }}>
              <label style={{ fontWeight: "bold" }}> Department: </label> <br />
              <select name="dept" className="formtextfield" value={dept} onChange={e => onInputChange(e)} required>
                <option value="select"> -- Select one -- </option>
                <option value="Finance"> Finance </option>
                <option value="HR"> Human Resource </option>
                <option value="Marketing"> Marketing </option>
                <option value="Operation"> Operation </option>
              </select>
              <p />
            </div>

            <div style={{ textAlign: 'center', paddingTop: 10 }}>
              <button type="submit" id="submit" className="button" onClick={handleSubmit} > Create New User </button>{' '}
            </div>
          </form>
        </div>
      </>
    );
  } else {
    return <Redirect to={{ pathname: '/' }} />
  }
};

const AddUser = () => {
  return <WebLayout content={Content()} />;
};

export default AddUser;
