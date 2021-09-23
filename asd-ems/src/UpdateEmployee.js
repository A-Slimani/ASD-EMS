import './style.css';
import WebLayout from './components/WebLayout'
import React from 'react';
import { Link } from 'react-router-dom';

const content = () => {
  function handleSubmit(e) {
    function isNumber(n) { return /^-?[\d.]+(?:e-?\d+)?$/.test(n); }
    function isName(name) { return /^-?[a-zA-Z0-9._%+-]+@EMS[HR,OP,MK,FN]{2}$/.test(name) }

    e.preventDefault();
    var s = window.confirm("Do you want add a new user with the entered information?\n\nSelect OK to proceed\n\nSelect CANCEL to reset form");
    if (s === true) {
      var fname = document.forms["updateform"]["fname"].value;
      var lname = document.forms["updateform"]["lname"].value;
      var dob = document.forms["updateform"]["dob"].value;
      var username = document.forms["updateform"]["username"].value;
      var pwd = document.forms["updateform"]["pwd"].value;
      var phoneno = document.forms["updateform"]["phoneno"].value;
      var address = document.forms["updateform"]["address"].value;
      var suburb = document.forms["updateform"]["suburb"].value;
      var state = document.forms["updateform"]["state"].value;
      var pcode = document.forms["updateform"]["pcode"].value;
      var employtype = document.forms["updateform"]["employtype"].value;
      var employdate = document.forms["updateform"]["employdate"].value;
      var dept = document.forms["updateform"]["dept"].value;

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
      document.getElementById("updateform").reset();
    }
  }

  return (
    <div>
      <form id="updateform" name="updateform" >
        <h1 style={{ textAlign: 'center', fontSize: 30, }}> Edit <b>Hello World</b> details </h1>

        <label> First Name: </label>
        <small>Up to 255 Characters </small> <p> </p>
        <input type="text" defaultValue="Hello" name="fname" className="formtextfield" required />{' '}
        <br />
        <label> Last Name: </label> <small>Up to 255 Characters </small> <p></p>
        <input type="text" defaultValue="World" name="lname" class="formtextfield" required />{' '}
        <br />
        <label> Date of Birth: </label> <small> Use the calendar on the right </small>{' '}
        <p />
        <input type="date" value="1992-07-02" name="dob" class="formtextfield" required />{' '}
        <br />
        <label> Username: </label>
        <small>
          {' '}
          After @ must be the system name 'EMS' followed by department initial: HR - Human
          Resource, OP - Operation, MK - Marketing, FN - Finance{' '}
        </small>{' '}
        <p />
        <input type="email" defaultValue="helloworld@EMSHR" name="username" pattern="[a-z0-9._%+-]+@EMS[A-Z]{2,}$" class="formtextfield" required />{' '}
        <br />
        <label> Password: </label>{' '}
        <small> Maximum password length is 16 Characters </small> <p />
        <input type="password" placeholder="Retype Password" maxlength="16" name="pwd" class="formtextfield" required />{' '}
        <br />
        <label> Contact Number: </label> <small> Up to 10 digits </small> <p />
        <input type="tel" defaultValue="0404990022" name="phoneno" maxlength="10" class="formtextfield"
          required
        />{' '}
        <br />
        <label> Address: </label> <small>Up to 255 Characters </small> <p />
        <input type="text" defaultValue="15 Raleway Ave" maxlength="255" name="address" class="formtextfield" required />{' '}
        <br />
        <label> Suburb: </label> <small>Up to 255 Characters </small> <p />
        <input type="text" defaultValue="Sydney" maxlength="255" name="suburb" class="formtextfield" required />{' '}
        <br />
        <label> State: </label> <small> State code up 3 Character </small> <p />
        <input type="text" defaultValue="NSW" name="state" maxlength="3" class="formtextfield" required />{' '}
        <br />
        <label> Post Code: </label> <small> Up 4 Digits </small> <p />
        <input type="text" defaultValue="2000" name="pcode" maxlength="4" class="formtextfield" required />{' '}
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
        <input type="date" value="2019-02-02" name="employdate" class="formtextfield" required />{' '}
        <p />
        <label> Department: </label> <br />
        <select name="dept" class="formtextfield" required>
          <option value="HR"> Human Resource </option>
          <option value="finance"> Finance </option>
          <option value="marketing"> Marketing </option>
          <option value="operation"> Operation </option>
        </select>{' '}
        <p />
        <div style={{ textAlign: 'center', paddingTop: 10 }}>
            <button className="button" id="updatesubmit" type="submit" onClick={handleSubmit}>
              Update <b>Hello World</b> Profile
            </button>{' '}          
        </div>
      </form>
    </div>
  );
};

const UpdateEmployee = () => {
  return <WebLayout content={content()} />;
}

export default UpdateEmployee;
