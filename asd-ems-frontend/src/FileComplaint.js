import React, { useState } from 'react';
import axios from 'axios';
import EmployeeWebLayout from './components/EmployeeWebLayout';
import { Redirect } from 'react-router'

const Content = () => {
  const empid = localStorage.getItem("id");
  const [filecomplaint, setComplaint] = useState({
    userid: empid,
    fname: "", lname: "", complaintdescription: "", complaintdate: "",
    status: "Pending", complainttype: ""
  });

  const { userid, fname, lname, complaintdescription, complainttype, complaintdate } = filecomplaint;

  const onInputChange = e => {
    setComplaint({ ...filecomplaint, [e.target.name]: e.target.value })
  };

  const onSubmit = async e => {
    // await axios.post("http://localhost:3002/filecomplaint", filecomplaint);
    //change me back to :3002 when using Mongo. 3001 for local
    await axios.post("http://localhost:3001/filecomplaint", filecomplaint);
    alert("File Complaint Submitted \n\n The process takes up to 5 business days \n\n Select OK to navigate to dashboard");
    window.location = `/EmployeeDashboard`;
  };

  const handleSubmit = e => {
    function isText(text) { return (/^[A-Za-z]+$/).test(text) }

    e.preventDefault();
    var s = window.confirm("Do you want submit the application with the entered information?\n\nSelect OK to proceed\n\nSelect CANCEL to reset form");
    if (s === true) {
      var fname = document.forms["complaintform"]["fname"].value;
      var lname = document.forms["complaintform"]["lname"].value;
      var complaintdescription = document.forms["complaintform"]["complaintdescription"].value;
      var complaintdate = document.forms["complaintform"]["complaintdate"].value;

      if (fname === "" || isText(fname) === false) { alert("First Name field is empty or invalid format input"); }
      else if (lname === "" || isText(lname) === false) { alert("Last Name field is empty or invalid format input"); }
      else if (complaintdescription === "") { alert("Description field is empty"); }
      else if (complaintdate === "") { alert("Complaint Date  must be select"); }
      else { onSubmit(); }
    }
    else { window.location.reload(); }
  }

  if (localStorage.getItem("id") !== null) {
    return (
      <>
        <div>
          <form id='complaintform' className='form' name='complaintform' onSubmit={e => onSubmit(e)}>
            <h1 style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold', }}> File Complaints </h1>
            <p />
            <label> Date: </label> <br />
            <input
              type="date"
              placeholder="DD/MM/YYYY"
              name="complaintdate"
              className="formtextfield"
              value={complaintdate}
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

            <label> Type of Complaint: </label> <br />
            <select name="complainttype" className="formtextfield" value={complainttype} onChange={e => onInputChange(e)}>
              <option value="select"> -- Select one -- </option>
              <option value="Personal"> Personal </option>
              <option value="Work"> Work </option>
              <option value="General"> General </option>
              <option value="Suggestion"> Suggestion </option>
            </select>{' '}
            <br /> <p />

            <label> Description </label> <br />
            <textarea
              type="text"
              placeholder="Message"
              name="complaintdescription"
              className="formtextfield"
              value={complaintdescription}
              onChange={e => onInputChange(e)}
            />{' '}
            <br /> <p />

            <div style={{ textAlign: 'center', paddingTop: 10 }}>
              <small>
                The application process may takes up to 3-5 business days <br />
                User may check their submitted applications in the personal file
              </small> <br />
              <button type="submit" id="submit" className="button" onClick={handleSubmit} > Submit </button>{' '}
            </div>
          </form>
        </div>
      </>
    );
  } else {
    return <Redirect to={{ pathname: '/' }} />
  }
};

const FileComplaint = () => {
  return <EmployeeWebLayout content={Content()} />;
};

export default FileComplaint;
