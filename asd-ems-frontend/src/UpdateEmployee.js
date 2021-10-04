import './style.css';
import WebLayout from './components/WebLayout'
import React, { useState } from 'react';

const Content = () => {

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
      var fname = document.forms["updateform"]["fname"].value;
      var lname = document.forms["updateform"]["lname"].value;
      var dob = document.forms["updateform"]["dob"].value;
      var username = document.forms["updateform"]["username"].value;
      var pwd = document.forms["updateform"]["pwd"].value;
      var phoneno = document.forms["updateform"]["phoneno"].value;
      var accname = document.forms["updateform"]["accname"].value;
      var accnum = document.forms["updateform"]["accnum"].value;
      var accbsb = document.forms["updateform"]["bsb"].value;
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
      else { window.location = "./UserList"; }
    }
  }

  return (
    <div>
      <button style={{ float: 'left' }} type='submit' className="update" onClick={goBack} > Back </button> <br />
      <form id="updateform" name="updateform" >
        <h1 style={{ textAlign: 'center', fontSize: 30, }}> Edit <b>Hello World</b> details </h1>

        <label> First Name: </label>
        <small>Up to 255 Characters </small> <p> </p>
        <input type="text" defaultValue="Hello" name="fname" className="formtextfield" required />{' '}
        <br />
        <label> Last Name: </label> <small>Up to 255 Characters </small> <p></p>
        <input type="text" defaultValue="World" name="lname" className="formtextfield" required />{' '}
        <br />
        <label> Date of Birth: </label> <small> Use the calendar on the right </small>{' '}
        <p />
        <input type="date" value="1992-07-02" name="dob" className="formtextfield" required />{' '}
        <br />
        <label> Username: </label>
        <small>
          After @ must be the system name 'EMS' followed by department initial: HR - Human
          Resource, OP - Operation, MK - Marketing, FN - Finance{' '}
        </small>
        <p />
        <input type="email" defaultValue="helloworld@EMSHR" name="username" pattern="[a-z0-9._%+-]+@EMS[A-Z]{2,}$" className="formtextfield" required />{' '}
        <br />
        <label> Password: </label>{' '}
        <small> Maximum password length is 16 Characters </small> <p />
        <input type="password" placeholder="Retype Password" maxlength="16" name="pwd" className="formtextfield" required />{' '}
        <br />
        <label> Contact Number: </label> <small> Up to 10 digits </small> <p />
        <input type="tel" defaultValue="0404990022" name="phoneno" maxlength="10" className="formtextfield" required />{' '}
        <br />
        <label> Bank Account Name: </label> <small> Up to 255 Characters </small>
        <p />
        <input type="text" placeholder="Full Name" name="accname" className="formtextfield" required />{' '}
        <br />
        <label> Bank Account Number: </label>
        <small> Up to 10 Digits </small>
        <p />
        <input type="text" placeholder="Account Number without space" name="accnum" minLength="6" maxLength="10" className="formtextfield" required />{' '}
        <br />
        <label> BSB: </label>
        <small> Up to 6 Digits </small>
        <p />
        <input type="text" placeholder="BSB without space" name="bsb" maxLength="6" className="formtextfield" required />{' '}
        <br />
        <label> Address: </label> <small>Up to 255 Characters </small> <p />
        <input type="text" defaultValue="15 Raleway Ave" maxlength="255" name="address" className="formtextfield" required />{' '}
        <br />
        <label> Suburb: </label> <small>Up to 255 Characters </small> <p />
        <input type="text" defaultValue="Sydney" maxlength="255" name="suburb" className="formtextfield" required />{' '}
        <br />
        <label> State: </label> <small> State code up 3 Character </small> <p />
        <input type="text" defaultValue="NSW" name="state" maxlength="3" className="formtextfield" required />{' '}
        <br />
        <label> Post Code: </label> <small> Up 4 Digits </small> <p />
        <input type="text" defaultValue="2000" name="pcode" maxlength="4" className="formtextfield" required />{' '}
        <p />
        <label> Employment Type: </label> <p />
        <input type="radio" id="html" name="employtype" value="fulltime" checked />
        <label for="fulltime"> Full Time </label> <p />
        <input type="radio" id="css" name="employtype" value="parttime" />
        <label for="parttime"> Part Time </label>
        <p />
        <input type="radio" id="javascript" name="employtype" value="casual" />
        <label for="casual"> Casual Worker </label> <p />
        <label> Employment Date: </label> <small> Use the calendar on the right </small>{' '}
        <p />
        <input type="date" value="2019-02-02" name="employdate" className="formtextfield" required />{' '}
        <p />
        <label> Department: </label> <br />
        <select name="dept" className="formtextfield" required>
          <option value="HR"> Human Resource </option>
          <option value="finance"> Finance </option>
          <option value="marketing"> Marketing </option>
          <option value="operation"> Operation </option>
        </select>{' '}
        <p />
        <div style={{ textAlign: 'center', paddingTop: 10 }}>
          <button className="button" id="updatesubmit" type="submit" onClick={handleSubmit}>
            Update <b> Hello World </b> Profile
          </button>{' '}
        </div>
      </form>
    </div>
  );
};

const UpdateEmployee = () => {
  return <WebLayout content={Content()} />;
}

export default UpdateEmployee;
