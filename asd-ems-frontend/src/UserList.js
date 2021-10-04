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

  // const deletePerson = e => {
  //   console.log(e.currentTarget.id);
  //   const p = persons.find(n => n.id === e.currentTarget.id);
  //   console.log('test p: ', p);
  //   if (window.confirm(`Delete ${p.name}`)) {
  //     personService.remove(p.id);
  //     setRefresh(true);
  //     // setMessage(`${p.name} removed`);
  //     setTimeout(() => {
  //        // setMessage(null);
  //     }, 5000);
  //   }
  // };

  const handleEditRoute = e => {
    console.log("e.id: ", e.currentTarget.id)
    console.log(employees)
    const employee = employees.find(x => x.id === e.currentTarget.id)
    console.log('test employee: ', employee) 
    history.push({
      pathname: `./UpdateEmployee/${employee.id}`,
    })
  } 

  return (
    <>
      <Table dataSource={employees}>
        <Column title="Employee ID" dataIndex="id" key="id"/>
        <Column title="First Name" dataIndex="firstName" key="firstName"/>
        <Column title="Last Name" dataIndex="lastName" key="lastName"/>
        <Column title="Employment Type" dataIndex="employmentType" key="employmentType"/>
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
