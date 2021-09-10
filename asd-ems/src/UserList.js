import React from 'react';
import WebLayout from './components/WebLayout';
import { Link } from 'react-router-dom';

const content = () => {
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ textAlign: 'center' }}> All Employee </h1>
        <input
          type="number"
          placeholder="Employee ID"
          name="requestedid"
          class="textfield"
        />
        <input
          type="textfield"
          placeholder="Employee First Name"
          name="requestedfn"
          class="textfield"
        />
        <input
          type="textfield"
          placeholder="Employee Last Name"
          name="requestedln"
          class="textfield"
        />
        <button className="button" name="searchbtn" type="submit">
          {' '}
          Search{' '}
        </button>{' '}
        <p />
        <button className="button" name="addnew" type="submit">
          {' '}
          Add New Employee{' '}
        </button>
      </div>

      <div>
        <table className="table">
          <tr>
            <th> Employee ID </th>
            <th> First Name </th>
            <th> Last Name </th>
            <th> Department </th>
            <th> Employment Date </th>
            <th> Option </th>
          </tr>

          <tr>
            <td> 1 </td>
            <td> Hello </td>
            <td> World </td>
            <td> Human Resource </td>
            <td> 600 </td>
            <td>
              {' '}
              <Link to="#"> View </Link> <br />{' '}
              <Link to="./UpdateEmployee"> Update </Link> <br />{' '}
              <Link to="#"> Delete </Link>{' '}
            </td>
          </tr>
        </table>
      </div>
    </>
  );
};

const UserList = () => {
  return <WebLayout content={content()} />;
};

export default UserList;
