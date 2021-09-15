import './style.css';
import WebLayout from './components/WebLayout'
import React from 'react';
import { Link } from 'react-router-dom';

const content = () => {
  return (
    <div>
      <form>
        <h1 style={{ textAlign: 'center' }}>
          {' '}
          Edit <b>Hello World</b> details
        </h1>
        <label> First Name: </label>
        <small>Up to 255 Characters </small> <p> </p>
        <input
          type="text"
          defaultValue="Hello"
          name="fname"
          class="formtextfield"
          required
        />{' '}
        <br />
        <label> Last Name: </label> <small>Up to 255 Characters </small> <p></p>
        <input
          type="text"
          defaultValue="World"
          name="lname"
          class="formtextfield"
          required
        />{' '}
        <br />
        <label> Date of Birth: </label> <small> Use the calendar on the right </small>{' '}
        <p />
        <input
          type="date"
          value="1992-07-02"
          name="dob"
          class="formtextfield"
          required
        />{' '}
        <br />
        <label> Username: </label>
        <small>
          {' '}
          After @ must be the system name 'EMS' followed by department initial: HR - Human
          Resource, OP - Operation, MK - Marketing, FN - Finance{' '}
        </small>{' '}
        <p />
        <input
          type="email"
          defaultValue="helloworld@EMSHR"
          name="username"
          pattern="[a-z0-9._%+-]+@EMS[A-Z]{2,}$"
          class="formtextfield"
          required
        />{' '}
        <br />
        <label> Password: </label>{' '}
        <small> Maximum password length is 16 Characters </small> <p />
        <input
          type="password"
          placeholder="Retype Password"
          maxlength="16"
          name="pwd"
          class="formtextfield"
          required
        />{' '}
        <br />
        <label> Contact Number: </label> <small> Up to 10 digits </small> <p />
        <input
          type="tel"
          defaultValue="0404990022"
          name="phoneno"
          maxlength="10"
          class="formtextfield"
          required
        />{' '}
        <br />
        <label> Address: </label> <small>Up to 255 Characters </small> <p />
        <input
          type="text"
          defaultValue="15 Raleway Ave"
          maxlength="255"
          name="address"
          class="formtextfield"
          required
        />{' '}
        <br />
        <label> Suburb: </label> <small>Up to 255 Characters </small> <p />
        <input
          type="text"
          defaultValue="Sydney"
          maxlength="255"
          name="suburb"
          class="formtextfield"
          required
        />{' '}
        <br />
        <label> State: </label> <small> State code up 3 Character </small> <p />
        <input
          type="text"
          defaultValue="NSW"
          name="state"
          maxlength="3"
          class="formtextfield"
          required
        />{' '}
        <br />
        <label> Post Code: </label> <small> Up 4 Digits </small> <p />
        <input
          type="text"
          defaultValue="2000"
          name="pcode"
          maxlength="4"
          class="formtextfield"
          required
        />{' '}
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
        <input
          type="date"
          value="2019-02-02"
          name="employdate"
          class="formtextfield"
          required
        />{' '}
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
          <Link to="./userList">
            {' '}
            <button className="button">
              {' '}
              Update <b>Hello World</b> Profile
            </button>{' '}
          </Link>
        </div>
      </form>
    </div>
  );
};

const UpdateEmployee = () => {
  return <WebLayout content={content()} />;
}

export default UpdateEmployee;
