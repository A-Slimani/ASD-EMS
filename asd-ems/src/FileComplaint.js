import React from 'react';
import WebLayout from './components/WebLayout';
import { Link } from 'react-router-dom';
import EmployeeWebLayout from './components/EmployeeWebLayout';

const content = () => {
  var date = new Date();

  return (
    <>
      <div style={{ textAlign: 'center', fontSize: 30 }}>
        <h1 style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold', }}> File Complaints </h1>
        <p />
      </div>

      <div>
        <form method="POST" className="form" name="complaintform">
          <label> Date and Time: </label> <br />
          <input type="text" value={date} name="formdate" className="formtextfield" disabled />
          <label> Employee ID </label> <br />
          <input type="text" name="eid" className="formtextfield" required />{' '}
          <br /> <p />

          <label> First Name: </label> <br />
          <input type="text" name="fname" className="formtextfield" required />{' '}
          <br /> <p />

          <label> Last Name: </label> <br />
          <input type="text" name="lastname" className="formtextfield" required />{' '}
          <br /> <p />

          <label> Type of Complaint: </label> <br />
          <select name="complainttype" className="formtextfield" required>
            <option value="select"> -- Select one -- </option>
            <option value="personal"> Personal </option>
            <option value="work"> Work </option>
            <option value="general"> General </option>
            <option value="suggestion"> Suggestion </option>
          </select>{' '}

          <label> Description </label> <br />
          <textarea type="text" placeholder="Message" name="complaintdescription" className="formtextfield" required />{' '}
          <br /> <p />

          <div style={{ textAlign: 'center', paddingTop: 10 }}>
            <small> The application process may takes up to 3-5 business days </small> <br />
            <small> User may check their submitted applications in the personal file </small> <br />
            <Link to="./ComplaintList">{' '} <button type='submit' className="button"> Submit </button>{' '} </Link>
          </div>
        </form>
      </div>
    </>
  );
};

const FileComplaint = () => {
  // return <WebLayout content={content()} />;
  return <EmployeeWebLayout content={content()} />;
};

export default FileComplaint;
