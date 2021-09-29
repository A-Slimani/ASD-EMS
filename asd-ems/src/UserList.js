import React from 'react';
import WebLayout from './components/WebLayout';
import { Link } from 'react-router-dom';

const content = () => {
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold', }}> All Employee </h1>
        <input type="textfield" placeholder="First Name" name="requestedfn" class="textfield" />
        <input type="textfield" placeholder="Last Name" name="requestedln" class="textfield" />
        <input type="number" placeholder="Department" name="requesteddep" class="textfield" />
        <input type="textfield" placeholder="Employment Type" name="requestedet" class="textfield" />

        <button className="button" name="searchbtn" type="submit">
          <Link to="./UserList"> <button> Search</button></Link>
        </button>
        <p />

        <button className="button" name="addnew" type="submit">
          <Link to="./AddUser"> <button> Add New Employee</button></Link>
        </button>
      </div>

      <div>
        <table className="table">
          <tr>
            <th> Employee ID </th>
            <th> First Name </th>
            <th> Last Name </th>
            <th> Department </th>
            <th> Employment Type </th>
            <th> Option </th>
          </tr>

          <tr>
            <td> 1 </td>
            <td> Hello </td>
            <td> World </td>
            <td> Human Resource </td>
            <td> Part-Time </td>
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
