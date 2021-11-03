import React from 'react';
import WebLayout from '../components/WebLayout';
// import { Link } from 'react-router-dom';

const content = () => {
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold', }}>Payroll Log</h1>

        <input type="number" placeholder="Employee ID" name="requestedid" class="textfield" />
        <input type="textfield" placeholder="Name" name="requestedfn" class="textfield" />
        <input type="number" placeholder="Min Salary" name="Min Salary" class="textfield" />
        <input type="number" placeholder="Max Salary" name="Max Salary" class="textfield" />

        <button className="button" name="searchbtn" type="submit"> {' '} Search {' '} </button>{' '}
        <p />
      </div>

      <table className="table">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Employment Date</th>
          <th>Department ID</th>
          <th>Manager</th>
          <th>Salary</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Bob Rob</td>
          <td>23/07/2017</td>
          <td>100</td>
          <td>Bob Boss</td>
          <td>50000</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Bob Loss</td>
          <td>19/09/2015</td>
          <td>100</td>
          <td>Bob Boss</td>
          <td>75000</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Bob Toss</td>
          <td>19/09/2015</td>
          <td>200</td>
          <td>Bob Moss</td>
          <td>95000</td>
        </tr>
      </table>
    </>
  );
};

const PayrollLog = () => {
  return <WebLayout content={content()} />;
};

export default PayrollLog;
