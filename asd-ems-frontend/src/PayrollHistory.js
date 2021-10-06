import { Button, Divider, Space, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import WebLayout from './components/WebLayout';
import { Link, useHistory } from 'react-router-dom';
import payrollService from "./services/Payroll";
import axios from 'axios';

const { Column } = Table;

const Content = () => {
  const [payrolldb, setPayroll] = useState([]);
  const history = useHistory();

  useEffect(() => {
    payrollService.getAll().then(payrolldb => {
      setPayroll(payrolldb)
    })
  }, [])
  
  const handleDelete = e => {
    var option = window.confirm("Do you want to delete payroll with ID " + e.currentTarget.id + "? \n\n Select OK to delete or CANCEL action");
    if (option === true) {
      axios.delete(`http://localhost:3001/payroll/${e.currentTarget.id}`);
      window.location = "./PayrollHistory"
    }
  }

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
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold', }}> Payroll History </h1>
        <input type="number" placeholder="Payroll ID" name="requestedid" class="textfield" />
        <input type="textfield" placeholder="Name" name="requestedfn" class="textfield" />
        <input type="number" placeholder="Salary Range (Min.)" name="Min Salary" class="textfield" />
        <input type="number" placeholder="Salary Range (Max.)" name="Max Salary" class="textfield" />
        <button className="button" name="searchbtn" type="submit"> {' '} Search {' '} </button>{' '}
        <p />

        <button className="button" name="addnew" type="submit">
          <Link to="./AddPayroll"> <button> Add New Payroll</button></Link>
        </button>
      </div>

      <div style={{paddingTop: 10}}>
        <Table dataSource={payrolldb}>
          <Column title="Payroll ID" dataIndex="id" key="id" value="id"/>
          <Column title="First Name" dataIndex="fname" key="firstName" />
          <Column title="Last Name" dataIndex="lname" key="lastName" />
          <Column title="Amount" dataIndex="amount" key="amount" />
          <Column title="Bonus" dataIndex="bonus" key="bonus" />
          <Column title="Payment Method" dataIndex="paymethod" key="paymethod" />
          <Column title="Pay Date" dataIndex="paydate" key="paydate" />
          <Column title="Description" dataIndex="description" key="Description" />
          <Column title="Options" key="id" render={(p) => (
            <>
              <Space split={<Divider type="vertical" />}>
                <Button id={p.id} onClick={handleDelete}> delete</Button>
                <Button id={p.id} onClick={handleEditRoute}>update</Button>
              </Space>
            </>
          )} />
        </Table>
      </div>
    </>
  );
};

const PayrollHistory = () => {
  return <WebLayout content={Content()} />;
};

export default PayrollHistory;
