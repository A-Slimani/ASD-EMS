import React from 'react';
import WebLayout from './components/WebLayout';
import { Link } from 'react-router-dom';

const content = () => {
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold', }}> Payroll History </h1>

        <input type="number" placeholder="Employee ID" name="requestedid" class="textfield" />

        <input type="textfield" placeholder="Name" name="requestedfn" class="textfield" />
        <input type="number" placeholder="Salary Range (Min.)" name="Min Salary" class="textfield" />

        <input type="number" placeholder="Salary Range (Max.)" name="Max Salary" class="textfield" />

        <button className="button" name="searchbtn" type="submit"> {' '} Search {' '} </button>{' '}
        <p />
      </div>

      <table className="table">
        <tr>
          <th>ID</th>
          <th>Employee Name</th>
          <th>Amount</th>
          <th>Bonus</th>
          <th>Total Salary</th>
          <th>Payment Method</th>
          <th>Pay Date</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Bob Rob</td>
          <td>100</td>
          <td>100</td>
          <td>200</td>
          <td>Cash</td>
          <td>23/07/2017</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Bob Loss</td>
          <td>200</td>
          <td>100</td>
          <td>300</td>
          <td>Cheque</td>
          <td>19/09/2015</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Bob Toss</td>
          <td>300</td>
          <td>200</td>
          <td>500</td>
          <td>EFTPOS</td>
          <td>19/09/2015</td>
        </tr>
      </table>
    </>
  );
};

const PayrollHistory = () => {
  return <WebLayout content={content()} />;
};

export default PayrollHistory;
