import { Button, Divider, Space, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import WebLayout from './components/WebLayout';
import payrollService from "./services/Payroll";

const { Column } = Table;

const Content = () => {
  const [payrolldb, setPayroll] = useState([])
  const history = useHistory();

  useEffect(() => {
    payrollService.getAll().then(payrolldb => {
      setPayroll(payrolldb)
    })
  }, [])

  const handleEditRoute = e => {
    console.log("e.id: ", e.currentTarget.id)
    console.log(payrolldb)
    
    const payroll = payrolldb.find(x => x.id.toString() === e.currentTarget.id)
    
    console.log('test payroll: ', payroll) 
    history.push({
      pathname: `./UpdatePayroll/${payroll.id}`,
   })
 } 

  return (
    <>
      <Table dataSource={payrolldb}>
        <Column title="Employee ID" dataIndex="id" key="id"/>
        <Column title="First Name" dataIndex="fname" key="fname"/>
        <Column title="Last Name" dataIndex="fname" key="lname"/>
        <Column title="Current Pay" dataIndex="amount" key="amount"/>
        <Column title="Bonus" dataIndex="bonus" key="bonus"/>
        <Column title="Payment Method" dataIndex="paymethod" key="paymethod"/>
        <Column title="Options" key="id" render={(p) => (
          <>
          <Space split={<Divider type="vertical" />}>
          <Button id={p.id} onClick={handleEditRoute}>update</Button>
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