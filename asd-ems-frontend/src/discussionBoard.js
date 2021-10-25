import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';
import EmployeeWebLayout from "./components/EmployeeWebLayout";

const Content = () => {
  const [voiceconcern, setConcern] = useState({
    name: "", discussdate: "", topic: "",
    status: "Pending", description: ""
  });

  const { name, discussdate, topic, status, description } = voiceconcern;

  const onInputChange = e => {
    setConcern({ ...voiceconcern, [e.target.name]: e.target.value })
  };

  const onSubmit = async e => {
    await axios.post("http://localhost:3001/voiceconcern", voiceconcern);
    alert("File Complaint Submitted \n\n The process takes up to 5 business days \n\n Select OK to navigate to dashboard");
    window.location = `/EmployeeDashboard`;
  };

  const handleSubmit = e => {
    function isText(text) { return (/^[A-Za-z]+$/).test(text) }

    e.preventDefault();
    var s = window.confirm("Do you want submit the application with the entered information?\n\nSelect OK to proceed\n\nSelect CANCEL to reset form");
    if (s === true) {
      var name = document.forms["dicussform"]["name"].value;
      var description = document.forms["dicussform"]["description"].value;
      var discussdate = document.forms["dicussform"]["discussdate"].value;
      var topic = document.forms["dicussform"]["topic"].value;

      if (name === "" || isText(name) === false) { alert("Name field is empty or invalid format input"); }
      else if (description === "") { alert("Description field is empty"); }
      else if (topic === "") { alert("Topic field is empty"); }
      else if (discussdate === "") { alert("Date  must be select"); }
      else { onSubmit(); }
    }
    else { window.location.reload(); }
  }

  if (localStorage.getItem("id") !== null) {
    return (
      <div>
        <form id='dicussform' className='form' name='dicussform' onSubmit={e => onSubmit(e)}>
          <h1 style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold', }}> Voice Concern </h1>
          <p style={{ textAlign: 'center' }}> We are hearing your voice !!! </p>
          <p />

          <label> Date: </label> <br />
          <input
            type="date"
            placeholder="DD/MM/YYYY"
            name="discussdate"
            className="formtextfield"
            value={discussdate}
            onChange={e => onInputChange(e)}
          />{' '}
          <br /> <p />

          <label> Name: </label> <br />
          <input
            type="text"
            name="name"
            placeholder="Name can be anonymous"
            className="formtextfield"
            value={name}
            onChange={e => onInputChange(e)}
          />{' '}
          <br /> <p />

          <label> Topic: </label> <br />
          <input
            type="text"
            placeholder="Topic of the concern?"
            name="topic"
            className="formtextfield"
            value={topic}
            onChange={e => onInputChange(e)}
          />{' '}
          <br /> <p />

          <label> Description: </label> <br />
          <textarea
            type="text"
            placeholder="Message"
            name="description"
            className="formtextfield"
            value={description}
            onChange={e => onInputChange(e)}
          />{' '}
          <br /> <p />

          <div style={{ textAlign: 'center', paddingTop: 10 }}>
            <small>
              The process may takes up to 3-5 business days <br />
              User may check their submitted applications in the personal file
            </small> <br />
            <button type="submit" id="submit" className="button" onClick={handleSubmit} > Post </button>{' '}
          </div>
        </form>

      </div>
    );
  } else {
    return <Redirect to={{ pathname: '/' }} />
  }
};

const DiscussionBoard = () => {
  return <EmployeeWebLayout content={Content()} />;
};

export default DiscussionBoard;
