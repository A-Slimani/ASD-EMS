import { Button, Divider, Space, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import WebLayout from './components/WebLayout';
import payrollService from "./services/Payroll";

const { Column } = Table;

const Content = () => {
  const [payroll, setPayroll] = useState([])

  useEffect(() => {
    payrollService.getAll().then(payroll => {
      setPayroll(payroll)
    })
  }, [])

  return (
    <>
      <Table dataSource={payroll}>
        <Column title="Employee ID" dataIndex="id" key="id"/>
        <Column title="First Name" dataIndex="firstName" key="firstName"/>
        <Column title="Last Name" dataIndex="lastName" key="lastName"/>
        <Column title="Current Pay" dataIndex="amount" key="amount"/>
        <Column title="Bonus" dataIndex="bonus" key="bonus"/>
        <Column title="Payment Method" dataIndex="paymethod" key="paymethod"/>
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
