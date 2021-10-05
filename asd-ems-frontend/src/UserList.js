import { Button, Divider, Space, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import WebLayout from './components/WebLayout';
import employeeService from "./services/Employee";

const { Column } = Table;

const Content = () => {
  const [employees, setEmployees] = useState([])
  const history = useHistory();

  useEffect(() => {
    employeeService.getAll().then(employees => {
      setEmployees(employees)
    })
  }, [])

  const handleEditRoute = e => {
    console.log("e.id: ", e.currentTarget.id)
    console.log(employees)
    const employee = employees.find(x => x.id.toString() === e.currentTarget.id)
    console.log('test employee: ', employee) 
    history.push({
      pathname: `./UpdateEmployee/${employee.id}`,
    })
  } 

  return (
    <>
      <Table dataSource={employees}>
        <Column title="Employee ID" dataIndex="id" key="id"/>
        <Column title="First Name" dataIndex="fname" key="firstName"/>
        <Column title="Last Name" dataIndex="lname" key="lastName"/>
        <Column title="Employment Type" dataIndex="employtype" key="employmentType"/>
        <Column title="Options" key="id" render={(p) => (
          <>
          <Space split={<Divider type="vertical" />}>
            <Button>view</Button>
            <Button id={p.id} onClick={handleEditRoute}>update</Button>
            <Button>delete</Button>
          </Space>
          </>
        )}/>
      </Table>
    </>
  );
};

const UserList = () => {
  return <WebLayout content={Content()} />;
};

export default UserList;
