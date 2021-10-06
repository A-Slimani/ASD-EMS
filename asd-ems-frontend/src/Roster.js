import { Button, Divider, Space, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import WebLayout from './components/WebLayout';
import employeeService from "./services/Employee";

//Ensures table is able to be referenced as a Const throughout the file
const { Column } = Table;

//Creates const for all content throughout file. Const uses state to ensure all relevant employees are shown
const Content = (event) => {
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    employeeService.getAll().then(employees => {
      setEmployees(employees)
    })
  }, [])
  
  //Returns all content within the page, such as all relevant divs which are placed to guarantee the page's
  //format appears as planned
  return (
    <>

      <div style={{ textAlign: 'center', paddingBottom: '30px' }}>
        <input type="date" placeholder="Filter by date" name="Max Salary" class="textfield " />
        <button className="button" name="searchbtn" type="submit"> {' '} Search {' '} </button>{' '}
      </div>
      <Table dataSource={employees}>
        <Column title="Employee ID" dataIndex="id" key="id"/>
        <Column title="First Name" dataIndex="fname" key="firstName"/>
        <Column title="Last Name" dataIndex="lname" key="lastName"/>
        <Column title="Rostered Dates (dd/mm/yyyy)" dataIndex="dateworking" key="roster"/>
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

const UserList = () => {
  return <WebLayout content={Content()} />;
};

export default UserList;
