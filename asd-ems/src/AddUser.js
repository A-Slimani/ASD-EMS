import React from 'react';
import WebLayout from './components/WebLayout';

const content = () => {
  function handleSubmit(e) {
    function isNumber(n) { return /^-?[\d.]+(?:e-?\d+)?$/.test(n); }
    function isName(name) { return /^-?[a-zA-Z0-9._%+-]+@EMS[HR,OP,MK,FN]{2}$/.test(name) }  

    e.preventDefault();
    var s = window.confirm("Do you want add a new user with the entered information?\n\nSelect OK to proceed\n\nSelect CANCEL to reset form");
    if (s === true) {
      var fname = document.forms["registerform"]["fname"].value;
      var lname = document.forms["registerform"]["lname"].value;
      var dob = document.forms["registerform"]["dob"].value;
      var username = document.forms["registerform"]["username"].value;
      var pwd = document.forms["registerform"]["pwd"].value;
      var phoneno = document.forms["registerform"]["phoneno"].value;
      var address = document.forms["registerform"]["address"].value;
      var suburb = document.forms["registerform"]["suburb"].value;
      var state = document.forms["registerform"]["state"].value;
      var pcode = document.forms["registerform"]["pcode"].value;
      var employtype = document.forms["registerform"]["employtype"].value;
      var employdate = document.forms["registerform"]["employdate"].value;
      var dept = document.forms["registerform"]["dept"].value;

      if (fname === "") { alert("First Name must be filled out"); }
      else if (lname === "") { alert("Last Name must be filled out"); }
      else if (dob === "") { alert("Date of Birth must be fill out"); }
      else if (username === "") { alert("Username must be fill out"); }
      else if (isName(username) === false) { alert("Invalid username input \n\n Follow the given format"); }
      else if (pwd === "") { alert("Password must be filled out"); }
      else if (phoneno === "") { alert("Phone Number must be filled out"); }
      else if (isNumber(phoneno) === false) { alert("Invalid phone number format") }
      else if (address === "") { alert("Address must be filled out"); }
      else if (suburb === "") { alert("Address must be filled out"); }
      else if (state === "") { alert("State must be filled out"); }
      else if (pcode === "") { alert("Post Code must be filled out"); }
      else if (isNumber(pcode) === false) { alert("Invalid post code format") }
      else if (employtype === "") { alert("Employement Type must be select"); }
      else if (employdate === "") { alert("Employement Date must be filled out"); }
      else if (dept === "") { alert("Department must be filled out"); }
      else if (dob > employdate) { alert("Invalid date of birth and employment date"); }
      else {
        window.location = "./UserList";
      }
    }
    else {
      document.getElementById("registerform").reset();
    }
  }

  return (
    <>
      <div>
        <form id='registerform' name='registerform'>
          <h1 style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold', }}> Add New User </h1>
          <p style={{ textAlign: 'center' }}> {' '} Please fill out the details below, all fields are required{' '} </p>

          <label> First Name: </label>
          <small>Up to 255 Characters </small> <p> </p>
          <input type="text" placeholder="First Name" name="fname" className="formtextfield" required />{' '}
          <br />
          <label> Last Name: </label> <small>Up to 255 Characters </small> <p></p>
          <input type="text" placeholder="Last Name" name="lname" className="formtextfield" required />{' '}
          <br />
          <label> Date of Birth: </label>{' '}
          <small> Use the calendar on the right </small> <p />
          <input type="date" placeholder="DD/MM/YYYY" name="dob" className="formtextfield" required />{' '}
          <br />
          <label> Username: </label> <br />
          <small>
            <i>
            After @ must be the system name 'EMS' followed by one department  initial:
            HR - Human Resource, OP - Operation, MK - Marketing, FN - Finance </i>
          </small>{' '}
          <p />
          <input type="email" placeholder="example@EMSHR" name="username" className="formtextfield" required />{' '}
          <br />
          <label> Password: </label>{' '}
          <small> Maximum password length is 16 Characters </small> <p />
          <input type="password" placeholder="Password" maxLength="16" name="pwd" className="formtextfield" required />{' '}
          <br />
          <label> Contact Number: </label> <small> Up to 10 digits </small> <p />
          <input type="text" placeholder="Phone Number" name="phoneno" maxLength="10" className="formtextfield" required />{' '}
          <br />
          <label> Address: </label> <small>Up to 255 Characters </small> <p />
          <input type="text" placeholder="Address" maxLength="255" name="address" className="formtextfield" required />{' '}
          <br />
          <label> Suburb: </label> <small>Up to 255 Characters </small> <p />
          <input type="text" placeholder="Suburb" maxLength="255" name="suburb" className="formtextfield" required />{' '}
          <br />
          <label> State: </label> <small> State code up 3 Character </small> <p />
          <input type="text" placeholder="State" name="state" maxLength="3" className="formtextfield" required />{' '}
          <br />
          <label> Post Code: </label> <small> Up 4 Digits </small> <p />
          <input type="text" placeholder="Post Code" name="pcode" maxLength="4" className="formtextfield" required />{' '}
          <p />
          <label> Employment Type: </label> <p />
          <input type="radio" id="html" name="employtype" value="fulltime" />
          <label for="fulltime"> Full Time </label> <p />
          <input type="radio" id="css" name="employtype" value="parttime" />
          <label for="parttime"> Part Time </label>
          <p />
          <input type="radio" id="javascript" name="employtype" value="casual" />
          <label for="casual"> Casual Worker </label> <p />
          <label> Employment Date: </label>{' '}
          <small> Use the calendar on the right </small> <p />
          <input type="date" placeholder="DD/MM/YYYY" name="employdate" className="formtextfield" required />{' '}
          <p />
          <label> Department: </label> <br />
          <select name="dept" className="formtextfield" required>
            <option value="select"> -- Select one -- </option>
            <option value="finance"> Finance </option>
            <option value="HR"> Human Resource </option>
            <option value="marketing"> Marketing </option>
            <option value="operation"> Operation </option>
          </select>{' '}
          <p />
          <div style={{ textAlign: 'center', paddingTop: 10 }}>
            <button type="submit" id="submit" className="button" onClick={handleSubmit}> Create New User </button>{' '}
          </div>
        </form>
      </div>
    </>
  );
};

const AddUser = () => {
  return <WebLayout content={content()} />;
};

export default AddUser;
