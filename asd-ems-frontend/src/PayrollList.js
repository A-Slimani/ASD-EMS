import { Button, Divider, Space, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import WebLayout from './components/WebLayout';
import employeeService from "./services/Employee";

const { Column } = Table;

const Content = () => {
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    employeeService.getAll().then(employees => {
      setEmployees(employees)
    })
  }, [])

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
            <Link to="./UpdateEmployee"><Button>update </Button></Link>
            <Button>delete</Button>
          </Space>
          </>
        )}/>
      </Table>
    </>
  );
};

const PayrollList = () => {
  return <WebLayout content={Content()} />;
};

export default PayrollList;
