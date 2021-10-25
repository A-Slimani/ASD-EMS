import { Table, Input } from 'antd';
import React, { useEffect, useState } from 'react';
import WebLayout from './components/WebLayout';
import employeeService from "./services/Employee";
import { Redirect } from 'react-router';

//Ensures table is able to be referenced as a Const throughout the file
const { Column } = Table;

//Creates const for all content throughout file. Const uses state to ensure all relevant employees are shown
const Content = (event) => {
  const [employees, setEmployees] = useState([]);
  const [lnameFilter, setLNameFilter] = useState('');
  const [fnameFilter, setFNameFilter] = useState('');

  //Gets all employees from const and ensures all getter and setter functionalities are in places
  useEffect(() => {
    employeeService.getAll().then(employees => {
      setEmployees(employees)
    })
  }, [])

  const filteredList = () => {
    return employees.filter(
      c =>
        c.fname.toLowerCase().match(fnameFilter.toLowerCase()) &&
        c.lname.toLowerCase().match(lnameFilter.toLowerCase())
    );
  };

  // updates each input
  const handleChangeFName = event => {
    setFNameFilter(event);
  };

  const handleChangeLName = event => {
    setLNameFilter(event);
  };

  //Returns all content within the page, such as all relevant divs which are placed to guarantee the page's
  //format appears as planned
  if (localStorage.getItem("id") !== null) {
    return (
      <>
        <div style={{ textAlign: 'center', paddingBottom: '30px' }}>
          <h1 style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold', }}> Employee Roster </h1>
          <Input.Group compact>
            <Input
              size="large"
              style={{ width: '20%' }}
              placeholder="First Name"
              onChange={({ target }) => {
                setFNameFilter(target.value);
              }}
            />
            <Input
              size="large"
              style={{ width: '20%' }}
              placeholder="Last Name"
              onChange={({ target }) => {
                setLNameFilter(target.value);
              }}
            />
          </Input.Group>
        </div>
        {/* Contains table with current roster information */}
        <Table dataSource={filteredList()}>
          <Column title="Employee ID" dataIndex="id" key="id" />
          <Column title="First Name" dataIndex="fname" key="firstName" />
          <Column title="Last Name" dataIndex="lname" key="lastName" />
          <Column title="Rostered Dates (dd/mm/yyyy)" dataIndex="dateworking" key="dateworking" />
        </Table>
      </>
    );
  } else {
    return <Redirect to={{ pathname: '/' }} />
  }
};

//Displays uniform Staff navigation bar
const Roster = () => {
  return <WebLayout content={Content()} />;
};

export default Roster;
