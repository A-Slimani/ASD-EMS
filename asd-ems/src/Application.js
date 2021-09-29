import React from 'react';
import WebLayout from './components/WebLayout';
import { Link } from 'react-router-dom';
// import EmployeeWebLayout from './components/EmployeeWebLayout';

const content = () => {
  var date = new Date();

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold', }}> Launch Application </h1>
        <p />
      </div>

      <div>
        <form method="POST" className="form" name="complaintform">
          <label> Date and Time: </label> <br />
          <input type="text" value={date} name="formdate" className="formtextfield" disabled />
          <label> Employee ID: </label> <br />
          <input type="text" name="eid" className="formtextfield" required />{' '}
          <br /> <p />

          <label> First Name: </label> <br />
          <input type="text" name="fname" className="formtextfield" required />{' '}
          <br /> <p />

          <label> Last Name: </label> <br />
          <input type="text" name="lastname" className="formtextfield" required />{' '}
          <br /> <p />

          <label> Type of Application: </label> <br />
          <select name="complainttype" className="formtextfield" required>
            <option value="select"> -- Select one -- </option>
            <option value="transfer"> Transfer between Departments </option>
            <option value="claim"> Business Claims </option>
            <option value="leave"> Apply Leave </option>
            <option value="resign"> Resignation </option>
            <option value="other"> Others </option>
          </select>{' '}

          <label> Sub-Category: </label> <br />
          <textarea type="text" placeholder="Provide detailed description of the application" name="subcategory" className="formtextfield" required />{' '}
          <br /> <p />

          <label> Reason </label> <br />
          <textarea type="text" placeholder="Provide detailed and valid reason" name="reason" className="formtextfield" required />{' '}
          <br /> <p />

          <div style={{ textAlign: 'center', paddingTop: 10 }}>
            <small>
              The application process may takes up to 3-5 business days <br />
              User may check their submitted applications in the personal file
            </small> <br />
            <Link to="./ApplicationList">
              <button type='submit' className="button"> Submit </button>{' '}
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

const Application = () => {
  return <WebLayout content={content()} />;
};

export default Application;
