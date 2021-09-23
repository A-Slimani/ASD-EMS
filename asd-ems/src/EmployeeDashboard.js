import React from 'react';
import EmployeeWebLayout from './components/EmployeeWebLayout';

const testText = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold', }}> Hello, "Employee Name" </h1>
      <h2 style={{ textAlign: 'left', fontSize: 20, textDecorationLine: 'overline', paddingBottom: 5, }}> Annoucement </h2>
      <li>
        System maintenance is due at midnight to tomorrow 7am. Ensure not to use the system during the maintenance time
        as changed information may not be saved.
      </li>
      <li> Starting next year, a new payment policy is apply. Please read the new policy in the "Payment Policy" page. </li>
      <li> End of year party ticket is open, date and time is to be annouce. </li>
      <br /><p />

      <h2 style={{ textAlign: 'left', fontSize: 20, textDecorationLine: 'overline', paddingBottom: 5, }}> General Information </h2>
      <li>
        As an employee from departments other than Human Resource (HR), also known as the employee in the EMS system, you will not have the
        priviledge to add, delete and modify other employees information. However, you can view and update your personal infromation
        as well as launch application and files complaints.
      </li>
      <li>
        As an employee, it is your responsibilities to ensure that all the provided information are accurate, relevant and recent.
        Thus, all submitted applications and complaints are valid and reasonable.
      </li>
      <li>
        EMS user are expected to visit and check the system regularly for new/updated information
        such as changes in application and complaints status or simply daily annoucement
      </li>
      <br /><p />

      <h2 style={{ textAlign: 'left', fontSize: 20, textDecorationLine: 'overline', paddingBottom: 5, }}> Navigation in EMS </h2>
      <p>
        The navigations are categorised into groups including:
        <li> Lauch Application - Complete the application form and submit </li>
        <li> File Complaints - complete the complaint form and submit </li>
        <li> Voice Concern - Acts as a discussion board where users can dicuss anonymously </li>
        <li> Personal File - View information including: information, logtime, pay history, submmited application and compliants </li>
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

const EmployeeDashboard = () => {
  return <EmployeeWebLayout content={testText()} />;
};

export default EmployeeDashboard;
