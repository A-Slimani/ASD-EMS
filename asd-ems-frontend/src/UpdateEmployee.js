import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useRouteMatch } from 'react-router-dom';
import WebLayout from './components/WebLayout';
import employeeService from './services/Employee';
import './style.css';

const Content = () => {
  const match = useRouteMatch('/UpdateEmployee/:id');
  console.log('match: ', match)
  const [employee, setEmployee] = useState({
    fname: '',
    lname: '',
    dob: '',
    phoneno: '',
    username: '',
    pwd: '',
    accname: '',
    accnum: '',
    accbsb: '',
    address: '',
    suburb: '',
    state: '',
    pcode: '',
    employdate: '',
    dept: '',
    employtype: '',
  });

  // fixes
  const showEmployee = () => {
    return employee !== undefined ? employee : "";
  }

 const {
    fname, lname, dob, phoneno,
    username, pwd,
    accname, accnum, accbsb,
    address, suburb, state, pcode,
    employdate, dept, employtype
  } = employee;

  useEffect(() => {
    employeeService.get(match.params.id).then(e => setEmployee(e))
  }, [])

  console.log("employee test: ", employee)
  console.log("match params id type", typeof match.params.id)

  const onInputChange = e => {
    setEmployee({...employee, [e.target.name]: e.target.value})
  }

  const onSubmit = async e => {
    await axios.put(`https://asd-ems-db.herokuapp/employees${match.params.id}`, employee)
    window.location = "/userList"
  }

  function goBack(e) {
    e.preventDefault();
    var option = window.confirm("Do you want leave the page?\n\nSelect OK to go back and data will not be saved\n\nSelect CANCEL to remain on the page")
    if (option === true) { window.history.back(); }
  }

  function handleSubmit(e) {
    function isNumber(n) { return /^-?[\d.]+(?:e-?\d+)?$/.test(n); }
    function isName(name) { return /^-?[a-zA-Z0-9._%+-]+@EMS[HR,OP,MK,FN]{2}$/.test(name) }
    function isText(text) { return (/^[A-Za-z]+$/).test(text) }

    e.preventDefault();
    var s = window.confirm("Do you update the information with entered data?\n\nSelect OK to proceed\n\nSelect CANCEL to remain on the page");
    if (s === true) {
      console.log(document.forms)
      var fname = document.forms["updateform"]["fname"].value;
      var lname = document.forms["updateform"]["lname"].value;
      var dob = document.forms["updateform"]["dob"].value;
      var username = document.forms["updateform"]["username"].value;
      var pwd = document.forms["updateform"]["pwd"].value;
      var phoneno = document.forms["updateform"]["phoneno"].value;
      var accname = document.forms["updateform"]["accname"].value;
      var accnum = document.forms["updateform"]["accnum"].value;
      var accbsb = document.forms["updateform"]["accbsb"].value;
      var address = document.forms["updateform"]["address"].value;
      var suburb = document.forms["updateform"]["suburb"].value;
      var state = document.forms["updateform"]["state"].value;
      var pcode = document.forms["updateform"]["pcode"].value;
      var employtype = document.forms["updateform"]["employtype"].value;
      var employdate = document.forms["updateform"]["employdate"].value;
      var dept = document.forms["updateform"]["dept"].value;

      if (fname === "" || isText(fname) === false) { alert("First Name field is empty or invalid format input"); }
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
      else if ((new Date().getFullYear() - new Date(dob).getFullYear()) <= 18) { alert("Employee age must be 18 or over"); }
      else { onSubmit() }
    }
    else {document.getElementById("updateform").reset()}
  }

  return (
  <>
      <div>
        <form id='updateform' name='updateform' onSubmit={e => onSubmit(e)}>
          <h1 style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold', }}> Update {showEmployee().fname + " " + showEmployee().lname}</h1>
          <p style={{ textAlign: 'center' }}> {' '} Please fill out the details below, all fields are required{' '} </p>

          <label> First Name: </label>
          <small>Up to 255 Characters </small> <p> </p>
          <input
            type="text"
            defaultValue={showEmployee().fname}
            name="fname"
            className="formtextfield"
            value={fname}
            onChange={e => onInputChange(e)}
          />{' '}
          <br />

          <label> Last Name: </label> <small>Up to 255 Characters </small> <p></p>
          <input
            type="text"
            name="lname"
            defaultValue={showEmployee().lname}
            className="formtextfield"
            value={lname}
            onChange={e => onInputChange(e)}
          />{' '}
          <br />

          <label> Date of Birth: </label>{' '}
          <small> Use the calendar on the right </small> <p />
          <input
            type="date"
            defaultValue={showEmployee().dob}
            name="dob"
            className="formtextfield"
            value={dob}
            onChange={e => onInputChange(e)}
          />{' '}
          <br />

          <label> Username: </label> <br />
          <small>
            <i> After @ must be the system name 'EMS' followed by one department  initial:
              HR - Human Resource, OP - Operation, MK - Marketing, FN - Finance </i>
          </small>{' '}
          <p />
          <input
            type="email"
            defaultValue={showEmployee().username}
            name="username"
            className="formtextfield"
            value={username}
            onChange={e => onInputChange(e)}
          />{' '}
          <br />

          <label> Password: </label>{' '}
          <small> Maximum password length is 16 Characters </small> <p />
          <input
            type="password"
            defaultValue={showEmployee().pwd}
            maxLength="16" name="pwd"
            value={pwd}
            className="formtextfield"
            onChange={e => onInputChange(e)}
          />{' '}
          <br />

          <label> Contact Number: </label> <small> Up to 10 digits </small> <p />
          <input
            type="text"
            defaultValue={showEmployee().phoneno}
            name="phoneno"
            maxLength="10"
            className="formtextfield"
            value={phoneno}
            onChange={e => onInputChange(e)}
          />{' '}
          <br />

          <label> Bank Account Name: </label> <small> Up to 255 Characters </small>
          <p />
          <input
            type="text"
            defaultValue={showEmployee().accname}
            name="accname"
            className="formtextfield"
            value={accname}
            onChange={e => onInputChange(e)}
          />{' '}
          <br />

          <label> Bank Account Number: </label>
          <small> Up to 10 Digits </small>
          <p />
          <input
            type="text"
            defaultValue={showEmployee().accnum}
            name="accnum"
            minLength="6" maxLength="10"
            className="formtextfield"
            value={accnum}
            onChange={e => onInputChange(e)}
          />{' '}
          <br />

          <label> BSB: </label>
          <small> Up to 6 Digits </small>
          <p />
          <input
            type="text"
            defaultValue={showEmployee().accbsb}
            name="accbsb" maxLength="6"
            className="formtextfield"
            value={accbsb}
            onChange={e => onInputChange(e)}
          />{' '}
          <br />

          <label> Address: </label> <small> Up to 255 Characters </small> <p />
          <input
            type="text"
            defaultValue={showEmployee().address}
            maxLength="255"
            name="address"
            className="formtextfield"
            value={address}
            onChange={e => onInputChange(e)}
          />{' '}
          <br />

          <label> Suburb: </label> <small>Up to 255 Characters </small> <p />
          <input
            type="text"
            defaultValue={showEmployee().suburb}
            maxLength="255"
            name="suburb"
            className="formtextfield"
            value={suburb}
            onChange={e => onInputChange(e)}
          />{' '}
          <br />

          <label> State: </label> <small> Up 3 Character </small> <p />
          <input
            type="text"
            defaultValue={showEmployee().state}
            name="state" maxLength="3"
            className="formtextfield"
            value={state}
            onChange={e => onInputChange(e)}
          />{' '}
          <br />

          <label> Post Code: </label> <small> Up 4 Digits </small> <p />
          <input
            type="text"
            defaultValue={showEmployee().pcode}
            name="pcode" maxLength="4"
            className="formtextfield"
            value={pcode}
            onChange={e => onInputChange(e)}
          />{' '}
          <p />

          <label> Employment Type: </label> <p />
          <select name="employtype" className="formtextfield" value={employtype} defaultValue={showEmployee().employtype}  onChange={e => onInputChange(e)} >
            <option value="select"> -- Select one -- </option>
            <option value="Full-Time"> Full-Time </option>
            <option value="Part-Time"> Part-Time </option>
            <option value="Casual"> Casual </option>
          </select>{' '}

          <label> Employment Date: </label>{' '}
          <small> Use the calendar on the right </small> <p />
          <input
            type="date"
            defaultValue={showEmployee().employdate}
            name="employdate"
            value={employdate}
            className="formtextfield"
            onChange={e => onInputChange(e)} />{' '}
          <p />

          <label> Department: </label> <br />
          <select name="dept" className="formtextfield" value={dept} defaultValue={showEmployee().dept} onChange={e => onInputChange(e)} required>
            <option value="select"> -- Select one -- </option>
            <option value="Finance"> Finance </option>
            <option value="HR"> Human Resource </option>
            <option value="Marketing"> Marketing </option>
            <option value="Operation"> Operation </option>
          </select>{' '}
          <p />

          <div style={{ textAlign: 'center', paddingTop: 10 }}>
            <button type="submit" id="submit" className="button" onClick={handleSubmit} > Update <b>{showEmployee().username}</b> </button>{' '}
          </div>
        </form>
      </div>
    </> 
  );
};

const UpdateEmployee = () => {
  return <WebLayout content={Content()} />;
}

export default UpdateEmployee;
