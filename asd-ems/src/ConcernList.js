import React from 'react';
import WebLayout from './components/WebLayout';
import { Link } from 'react-router-dom';

const content = () => {
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold', }}> All Employee Concerns </h1>
        <input type="number" placeholder="Concern ID" name="requestedid" class="textfield" />
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
            <th> Concern ID </th>
            <th> Name </th>
            <th> Topic </th>
            <th> What </th>
            <th> How/Why </th>
            <th> Date Submitted </th>
            <th> Status </th>
            <th> Option </th>
          </tr>

          <tr>
            <td> 1 </td>
            <td> Bill </td>
            <td> today </td>
            <td> Not Happy </td>
            <td> No bonus</td>
            <td> dd/mm/yyyy </td>
            <td> Pending <br/> Solved </td>
            <td> <Link to="#"> Solved </Link> <br /> </td>
          </tr>
        </table>
      </div>
    </>
  );
};

const ConcernList = () => {
  return <WebLayout content={content()} />;
};

export default ConcernList;
