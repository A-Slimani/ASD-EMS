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
        <Column title="Current Pay" dataIndex="currentPay" key="currentPay"/>
        <Column title="Bonus" dataIndex="bonus" key="bonus"/>
        <Column title="Payment Method" dataIndex="paymentMethod" key="paymentMethod"/>
        <Column title="Options" key="id" render={(p) => (
          <>
          <Space split={<Divider type="vertical" />}>
            <Link to="./UpdatePayroll"><Button>update </Button></Link>
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
