import { Button, Divider, Space, Table, Input, Select, DatePicker } from 'antd';
import React, { useEffect, useState } from 'react';
import WebLayout from './components/WebLayout';
import { Link, useHistory } from 'react-router-dom';
import payrollService from "./services/Payroll";
import { Redirect } from 'react-router';
import axios from 'axios';

const { Column } = Table;
const { Option } = Select;

const Content = () => {
  const [payrolldb, setPayroll] = useState([]);

  const [payMethodFilter, setPayMethodFilter] = useState('');
  const [payDateFilter, setPayDateFilter] = useState('');
  const [payNameFilter, setNameFilter] = useState('');

  const history = useHistory();

  useEffect(() => {
    payrollService.getAll().then(payrolldb => {
      setPayroll(payrolldb)
    })
  }, [])

  // filters the values with all the inputs
  const filteredList = () => {
    return payrolldb.filter(
      c =>
        c.paymethod.match(payMethodFilter) &&
        c.paydate.match(payDateFilter) &&
        (c.fname.toLowerCase().match(payNameFilter.toLowerCase()) ||
          c.lname.toLowerCase().match(payNameFilter.toLowerCase))
    );
  };

  // updates each input
  const handleChangeType = event => {
    setNameFilter(event);
  };

  const handleChangeMethod = event => {
    setPayMethodFilter(event);
  };

  const handleChangeDate = event => {
    console.log(event);
    event !== null ? setPayDateFilter(event._d.toJSON().substr(0, 9)) : setPayDateFilter('');
    console.log('date filter: ', payDateFilter);
  };

  // const filterByPayMethod = payMethodFilter === '' ? payrolldb : payrolldb.filter(c => c.paymethod.toLowerCase().match(payMethodFilter.toLowerCase()));

  //execute delete payroll based on id after select the "delete" button
  //also update the database when the function is executed
  const handleDelete = e => {
    var option = window.confirm("Do you want to delete payroll with ID " + e.currentTarget.id + "? \n\n Select OK to delete or CANCEL action");
    if (option === true) {
      axios.delete(`https://asd-ems-db.herokuapp.com/payrolldb/${e.currentTarget.id}`);
      history.push({
        pathname: `/PayrollHistory`,
      })
    }
  }

  const handleEditRoute = e => {
    console.log("e.id: ", e.currentTarget.id)
    console.log(payrolldb)

    const payroll = payrolldb.find(x => x.id.toString() === e.currentTarget.id)

    console.log('test payroll: ', payroll)
    history.push({
      pathname: `/UpdatePayroll/${payroll.id}`,
    })
  }

  //table display a the list of all created payrols
  //the update button will call the update function when selected
  //the delete button will call the delete function when selected
  if (localStorage.getItem("id") !== null) {
    return (
      <>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold', }}> Payroll History </h1>
          <p />
          <div style={{ textAlign: 'center', paddingTop: 20 }}>
            <Input.Group compact>
              <Input
                size="large"
                style={{ width: '20%' }}
                placeholder="Name"
                onChange={({ target }) => {
                  setNameFilter(target.value);
                }}
              />

              <Select
                id="type"
                placeholder="Payment Method"
                size="large"
                style={{ width: '20%' }}
                onChange={handleChangeMethod}
                allowClear>
                <Option value="Cheque">Cheque</Option>
                <Option value="Cash">Cash</Option>
                <Option value="EFTPOS">EFTPOS</Option>
              </Select>

              <DatePicker size="large" onChange={handleChangeDate} />

            </Input.Group>
          </div>
          <div style={{ paddingTop: 15 }}>
            <button className="button" name="addnew" type="submit">
              <Link to="./AddPayroll"> <button> Add New Payroll</button></Link>
            </button>
          </div>
        </div>

        <div style={{ paddingTop: 10 }}>
          <Table dataSource={filteredList()}>
            <Column title="Payroll ID" dataIndex="id" key="id" value="id" />
            <Column title="First Name" dataIndex="fname" key="firstName" />
            <Column title="Last Name" dataIndex="lname" key="lastName" />
            <Column title="Amount ($)" dataIndex="amount" key="amount" />
            <Column title="Bonus ($)" dataIndex="bonus" key="bonus" />
            <Column title="Payment Method" dataIndex="paymethod" key="paymethod" />
            <Column title="Pay Date (yyyy/mm/dd)" dataIndex="paydate" key="paydate" />
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
  } else {
    return <Redirect to={{ pathname: '/' }} />
  }
};

const PayrollHistory = () => {
  return <WebLayout content={Content()} />;
};

export default PayrollHistory;
