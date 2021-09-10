import React from 'react';
import WebLayout from './components/WebLayout';
import { Link } from 'react-router-dom';

const content = () => {
  return (
    <div>
      <form method="POST" className="form" name="dicussform">
        <h1 style={{ textAlign: 'center' }}> Voice Concern </h1>
        <p style={{ textAlign: 'center' }}> We are hearing you voice !!! </p>
        <label> Name: </label> <br />
        <input
          type="text"
          placeholder="Name can be anonymous"
          name="anonymous"
          className="formtextfield"
        />{' '}
        <br />
        <p />
        <label> Topic: </label> <br />
        <input type="text" placeholder=" " name="topic" className="formtextfield" />{' '}
        <br />
        <p />
        <label> Whar are you trying to achieve ? </label> <br />
        <textarea
          type="text"
          placeholder="Message"
          name="content"
          className="formtextfield"
        />{' '}
        <br />
        <p />
        <label> How differently you can do ?: </label> <br />
        <textarea
          type="text"
          placeholder="Message"
          name="content"
          className="formtextfield"
        />{' '}
        <br />
        <p />
        <div style={{ textAlign: 'center', paddingTop: 10 }}>
          <Link to="./discussionBoard">
            {' '}
            <button className="button"> Post </button>{' '}
          </Link>
        </div>
      </form>
    </div>
  );
};

const DiscussionBoard = () => {
  return <WebLayout content={content()} />;
};

export default DiscussionBoard;
