import { Button, Divider, Space, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import WebLayout from './components/WebLayout';
import { Link, useHistory } from 'react-router-dom';
import payrollService from "./services/Payroll";
import axios from 'axios';

const { Column } = Table;

const Content = () => {
  const [payrolldb, setPayroll] = useState([]);
  const [payMethodFilter, setPayMethodFilter] = useState('');
  const history = useHistory();

  useEffect(() => {
    payrollService.getAll().then(payrolldb => {
      setPayroll(payrolldb)
    })
  }, [])

  const filterByPayMethod = payMethodFilter === '' ? payrolldb : payrolldb.filter(c => c.paymethod.toLowerCase().match(payMethodFilter.toLowerCase()));

  //execute delete payroll based on id after select the "delete" button
  //also update the database when the function is executed
  const handleDelete = e => {
    var option = window.confirm("Do you want to delete payroll with ID " + e.currentTarget.id + "? \n\n Select OK to delete or CANCEL action");
    if (option === true) {
      axios.delete(`http://localhost:3001/payrolldb/${e.currentTarget.id}`);
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

  //table display a the list of all created payrols
  //the update button will call the update function when selected
  //the delete button will call the delete function when selected
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold', }}> Payroll History </h1>
        <input type="textfield" placeholder="Payment Method" name="requestedmethod" class="textfield" onChange={({ target }) => { setPayMethodFilter(target.value) }} />
        <p />

        <button className="button" name="addnew" type="submit">
          <Link to="./AddPayroll"> <button> Add New Payroll</button></Link>
        </button>
      </div>

      <div style={{ paddingTop: 10 }}>
        <Table dataSource={filterByPayMethod}>
          <Column title="Payroll ID" dataIndex="id" key="id" value="id" />
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
