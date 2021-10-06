import React, { useEffect, useState } from 'react';
import EmployeeWebLayout from './components/EmployeeWebLayout';
import employeeService from './services/Employee';
import { Link, useHistory, useRouteMatch } from 'react-router-dom';

const Content = () => {
  const match = useRouteMatch('/EmployeePersonal/:id');
  const [employee, setEmployee] = useState();
	const history = useHistory();

	const showEmployee = () => {
		return employee !== undefined ? employee : ""
	}

  useEffect(() => {
    employeeService.get(match.params.id).then(emp => setEmployee(emp));
  }, []);

	const handleEditRoute = e => {
		history.push({
			pathname: `/UpdateUser/${employee.id}`
		})	
	}

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold' }}>
          Welcome, {showEmployee().fname + " " + showEmployee().lname}
        </h1>
        <h2>
          <a href="#applicationsubmit"> Application Submitted </a> |
          <a href="#complaintsubmit"> Complaint Submitted </a> |
          <a href="#logtime"> Logtime </a> |<a href="#payhistory"> Pay History </a>
        </h2>
      </div>

      <div id="personal">
        <h2
          style={{
            textAlign: 'left',
            fontSize: 20,
            textDecorationLine: 'underline',
            paddingBottom: 15,
          }}>
          Personal Information{' '}
        </h2>
        <button style={{ float: 'right' }} type="submit" className="update" onClick={handleEditRoute}>
          {' '}
          Update Details{' '}
        </button>
        <h3> <b>Employee ID:</b> {showEmployee().id}</h3>
        <h3> <b>Full Name:</b> {showEmployee().fname + " " + showEmployee().lname}</h3>
        <h3> <b>Date of Birth:</b> {showEmployee().dob}</h3>
        <h3> <b>Address:</b> {showEmployee().address + " " + showEmployee().suburb + " " + showEmployee().pcode}</h3>
        <h3> <b>Bank Number:</b>. {showEmployee().accnum} </h3>
        <h3> <b>Department:</b> {showEmployee().dept}</h3>
        <h3> <b>Employment Date:</b> {showEmployee().employdate}</h3>
        <h3> <b>Username:</b> {showEmployee().username}</h3>
      </div>

      {/* <div id="applicationsubmit">
        <h2
          style={{
            textAlign: 'left',
            fontSize: 20,
            textDecorationLine: 'overline',
            paddingTop: 15,
            paddingBottom: 15,
          }}>
          {' '}
          Application Submitted{' '}
        </h2>
        <table className="table">
          <tr>
            <th> Application ID </th>
            <th> Date Submitted </th>
            <th> Name </th>
            <th> Description </th>
            <th> Status </th>
          </tr>
          <tr>
            <td> 1 </td>
            <td> dd/mm/yyyy </td>
            <td> apply leave </td>
            <td> description </td>
            <td>
              {' '}
              pending <br /> approved <br /> declined <br />{' '}
            </td>
          </tr>
        </table>
      </div>

      <div id="complaintsubmit">
        <h2
          style={{
            textAlign: 'left',
            fontSize: 20,
            textDecorationLine: 'overline',
            paddingTop: 15,
            paddingBottom: 15,
          }}>
          {' '}
          Complaints Submitted{' '}
        </h2>
        <table className="table">
          <tr>
            <th> Complaint ID </th>
            <th> Date Submitted </th>
            <th> Name </th>
            <th> Description </th>
            <th> Status </th>
          </tr>
          <tr>
            <td> 1 </td>
            <td> dd/mm/yyyy </td>
            <td> work issue </td>
            <td> description </td>
            <td>
              {' '}
              pending <br /> solved <br />{' '}
            </td>
          </tr>
        </table>
      </div>

      <div id="payment-updates">
        <h2
          style={{
            textAlign: 'left',
            fontSize: 20,
            textDecorationLine: 'overline',
            paddingTop: 15,
            paddingBottom: 15,
          }}>
          {' '}
          Salary Update Requests{' '}
        </h2>
        <table className="table">
          <tr>
            <th> Request ID </th>
            <th> Date Submitted </th>
            <th> Name </th>
            <th> Description </th>
            <th> Requested Salary </th>
            <th> Status </th>
          </tr>
          <tr>
            <td> 1 </td>
            <td> dd/mm/yyyy </td>
            <td> work issue </td>
            <td> description </td>
            <td> $80,000 </td>
            <td>
              {' '}
              pending <br /> solved <br />{' '}
            </td>
          </tr>
        </table>
      </div>

      <div id="logtime">
        <h2
          style={{
            textAlign: 'left',
            fontSize: 20,
            textDecorationLine: 'overline',
            paddingTop: 15,
            paddingBottom: 15,
          }}>
          {' '}
          Logtime{' '}
        </h2>
        <table className="table">
          <tr>
            <th> Login ID </th>
            <th> Login Date and Time </th>
            <th> Logout Date and Time </th>
          </tr>
          <tr>
            <td> 1 </td>
            <td> 10 am </td>
            <td> 10 pm </td>
          </tr>
        </table>
      </div>

      <div id="payhistory">
        <h2
          style={{
            textAlign: 'left',
            fontSize: 20,
            textDecorationLine: 'overline',
            paddingTop: 15,
          }}>
          {' '}
          Pay History{' '}
        </h2>
        <table className="table">
          <tr>
            <th> Date </th>
            <th> Bank Number </th>
            <th> Amount $ </th>
            <th> Bonus $ </th>
            <th> Description </th>
          </tr>
          <tr>
            <td> dd/mm/yyyy </td>
            <td> 123 </td>
            <td> 70000 </td>
            <td> 5000 </td>
            <td> Business Claim </td>
          </tr>
        </table>
      </div>

      <div id="transfer-requests">
        <h2
          style={{
            textAlign: 'left',
            fontSize: 20,
            textDecorationLine: 'overline',
            paddingTop: 15,
            paddingBottom: 15,
          }}>
          {' '}
          Branch Transfer Requests{' '}
        </h2>
        <table className="table">
          <tr>
            <th> Transfer ID </th>
            <th> Date Submitted </th>
            <th> Name </th>
            <th> Description </th>
            <th> Current Branch </th>
            <th> New Branch </th>
            <th> Status </th>
          </tr>
          <tr>
            <td> 1 </td>
            <td> dd/mm/yyyy </td>
            <td> work issue </td>
            <td> description </td>
            <td> Bankstown </td>
            <td> Canley Vale </td>
            <td>
              {' '}
              pending <br /> solved <br />{' '}
            </td>
          </tr>
        </table>
      </div>

      <div id="resignation">
        <h2
          style={{
            textAlign: 'left',
            fontSize: 20,
            textDecorationLine: 'overline',
            paddingTop: 15,
            paddingBottom: 15,
          }}>
          {' '}
          Resignation Requests{' '}
        </h2>
        <table className="table">
          <tr>
            <th> Resignation ID </th>
            <th> Date Submitted </th>
            <th> Name </th>
            <th> Description </th>
            <th> Status </th>
          </tr>
          <tr>
            <td> 1 </td>
            <td> dd/mm/yyyy </td>
            <td> work issue </td>
            <td> description </td>
            <td> received</td>
          </tr>
        </table>
      </div> */}
    </>
  );
};

const EmployeePersonal = () => {
  const match = useRouteMatch('/EmployeePersonal/:id');
  return <EmployeeWebLayout id={match.params.id} content={Content()} />;
};

export default EmployeePersonal;
