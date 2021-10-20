import { Button, Divider, Space, Table, Input, DatePicker } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import WebLayout from './components/WebLayout';
import employeeService from "./services/Employee";

//Ensures table is able to be referenced as a Const throughout the file
const { Column } = Table;

//Creates const for all content throughout file. Const uses state to ensure all relevant employees are shown
const Content = (event) => {
  const [employees, setEmployees] = useState([]);
  const [dateFilter, setDateFilter] = useState('');

  //Gets all employees from const and ensures all getter and setter functionalities are in places
  useEffect(() => {
    employeeService.getAll().then(employees => {
      setEmployees(employees)
    })
  }, [])

  const filteredList = () => {
    return employees.filter(
      c =>
        c.dateworking[0].match(dateFilter)

    );
  };

  const handleChangeDate = event => {
    console.log(event);
    event !== null ? setDateFilter(event._d.toJSON().substr(0, 9)) : setDateFilter('');
    console.log('date filter: ', dateFilter);
  };
  
  //Returns all content within the page, such as all relevant divs which are placed to guarantee the page's
  //format appears as planned
  return (
    <>
      <div style={{ textAlign: 'center', paddingBottom: '30px' }}>
      <h1 style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold', }}> Employee Roster </h1>
      <Input.Group compact>
        <DatePicker size="large" onChange={handleChangeDate} />
      </Input.Group>
        {/* <input type="date" placeholder="Filter by date" name="Max Salary" class="textfield " /> */}
        {/* <button className="button" name="searchbtn" type="submit"> {' '} Search {' '} </button>{' '} */}
      </div>
      {/* Contains table with current roster information */}
      <Table dataSource={filteredList()}>
        <Column title="Employee ID" dataIndex="id" key="id"/>
        <Column title="First Name" dataIndex="fname" key="firstName"/>
        <Column title="Last Name" dataIndex="lname" key="lastName"/>
        <Column title="Rostered Dates (dd/mm/yyyy)" dataIndex="dateworking" key="dateworking"/>
        <Column title="Options" key="id" render={(p) => (
          <>
          <Space split={<Divider type="vertical" />}>
            <Button>view</Button>
          </Space>
          </>
        )}/>
        {/* <Column title="Employment Type" dataIndex="employmentType" key="employmentType"/> */}
      </Table>
    </>
  );
};

//Displays uniform Staff navigation bar
const UserList = () => {
  return <WebLayout content={Content()} />;
};

export default UserList;
