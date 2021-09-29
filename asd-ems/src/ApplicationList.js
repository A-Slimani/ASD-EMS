import React from 'react';
import WebLayout from './components/WebLayout';
import { Link } from 'react-router-dom';

const content = () => {
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold', }}> All Applications </h1>
        <input type="number" placeholder="Application ID" name="requestedid" class="textfield" />
        <input type="textfield" placeholder="Name" name="requestedfn" class="textfield" />
        <input type="date" name="requesteddate" class="textfield" />
        <button className="button" name="searchbtn" type="submit">
          {' '}
          Search{' '}
        </button>{' '}
        <p />
      </div>

      <div>
        <table className="table">
          <tr>
            <th> Application ID </th>
            <th> Name </th>
            <th> Description </th>
            <th> Reason </th>
            <th> Owner </th>
            <th> Date Submitted </th>
            <th> Status </th>
            <th> Option </th>
          </tr>

          <tr>
            <td> 1 </td>
            <td> Transfer </td>
            <td> Transfer from HR to OP </td>
            <td> Why? </td>
            <td> Bill </td>
            <td> dd/mm/yyyy </td>
            <td>
              {' '} Pending <br /> Approved <br /> Rejected {' '}
            </td>
            <td>
              {' '}
              <Link to="#"> Approved </Link> <br />{' '}
              <Link to="#"> Rejected </Link>{' '}
            </td>
          </tr>
        </table>
      </div>
    </>
  );
};

const ApplicationList = () => {
  return <WebLayout content={content()} />;
};

export default ApplicationList;
