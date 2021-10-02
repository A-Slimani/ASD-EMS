import React from 'react';
import { Link } from 'react-router-dom';
import EmployeeWebLayout from "./components/EmployeeWebLayout";

const content = () => {
  var date = new Date();

  return (
    <div>
      <form method="POST" className="form" name="dicussform">
        <h1 style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold', }}> Voice Concern </h1>
        <p style={{ textAlign: 'center' }}> We are hearing you voice !!! </p>
        <label> Date and Time: </label>
        <input type="text" value={date} name="formdate" className="formtextfield" disabled />
        <label> Name: </label> <br />
        <input type="text" placeholder="Name can be anonymous" name="anonymous" className="formtextfield" />{' '}
        <br />
        <p />
        <label> Topic: </label> <br />
        <input type="text" placeholder=" " name="topic" className="formtextfield" />{' '}
        <br />
        <p />
        <label> What are you trying to achieve ? </label> <br />
        <textarea type="text" placeholder="Message" name="content" className="formtextfield" />{' '}
        <br />
        <p />
        <label> How differently you can do ? </label> <br />
        <textarea type="text" placeholder="Message" name="content" className="formtextfield" />{' '}
        <br />
        <p />
        <div style={{ textAlign: 'center', paddingTop: 10 }}>
        <Link to="./discussionBoard"> {' '} <button type='submit' className="button"> Post </button>{' '}</Link>
      </div>
      </form>
      
    </div>
  );
};

const DiscussionBoard = () => {
  return <EmployeeWebLayout content={content()} />;
};

export default DiscussionBoard;
