import React from 'react';
import WebLayout from './components/WebLayout';
import { useRouteMatch } from 'react-router-dom';

const testText = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold' }}>
        {' '}
        Hello, Admin{' '}
      </h1>
      <h2
        style={{
          textAlign: 'left',
          fontSize: 20,
          textDecorationLine: 'overline',
          paddingBottom: 5,
        }}>
        {' '}
        Announcement{' '}
      </h2>
      <li>
        System maintenance is due at midnight to tomorrow 7am. Ensure not to use the
        system during the maintenance time as changed information may not be saved.
      </li>
      <li>
        {' '}
        Starting next year, a new payment policy is apply. Please read the new policy in
        the "Payment Policy" page.{' '}
      </li>
      <li> End of year party ticket is open, date and time is to be annouce. </li>
      <br />
      <p />

      <h2
        style={{
          textAlign: 'left',
          fontSize: 20,
          textDecorationLine: 'overline',
          paddingBottom: 5,
        }}>
        {' '}
        General Information{' '}
      </h2>
      <li>
        As an employee from the Human Resource (HR) department, also known as the admin in
        the EMS system, you have the priviledge to view, add, delete and modify employees
        as well as your personal information.
      </li>
      <li>
        As an EMS user, it is your responsibilities to ensure that all the provided
        information are accurate, relevant and recent. Thus, all submitted applications
        and complaints are valid and reasonable.
      </li>
      <li>
        As an admin, it is your responsibilities to assess the information where all
        submitted applications and complaints will be required to be assessed before
        approving/decline.
      </li>
      <li>
        EMS users are expected to visit and check the system regularly for new/updated
        information such as changes in application and complaints status or simply daily
        annoucement.
      </li>
      <br />
      <p />

      <h2
        style={{
          textAlign: 'left',
          fontSize: 20,
          textDecorationLine: 'overline',
          paddingBottom: 5,
        }}>
        {' '}
        Navigation in EMS{' '}
      </h2>
      <p>
        The navigations are categorised into groups including:
        <li> Employee Manage - Employee List, Add New Employee </li>
        <li> Payroll Manage - Payroll History, Log and Payment Policy </li>
        <li> Application - Launch and Manage Application </li>
        <li> Complaints - File and Manage Complaints </li>
        <li> Concern Manage - Manage Concerns from Employee </li>
        <li>
          {' '}
          Personal File - View information including: personal, logtime, pay history,
          submmited application and compliants{' '}
        </li>
      </p>

      <p>
        <br></br>
        <i>Many thanks,</i>
        <br></br>
        Martin Lym <br></br>
        <br></br>
        Human Resources Manager <br></br>
        <b>Enterprise Management Systems</b>
      </p>
    </div>
  );
};

const Dashboard = () => {
  return <WebLayout content={testText()} />;
};

export default Dashboard;
