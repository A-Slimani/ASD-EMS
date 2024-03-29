import { Button, Divider, Space, Table, Input, Select } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import WebLayout from '../components/WebLayout';
import employeeService from "../services/Employee";
import axios from 'axios';

const { Column } = Table;
const { Option } = Select;

const Content = () => {
  const [employees, setEmployees] = useState([])
  const [deptFilter, setDeptFilter] = useState('');
  const [nameFilter, setNameFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');

  const history = useHistory();

  useEffect(() => {
    employeeService.getAll().then(employees => {
      setEmployees(employees)
    })
  }, [])

  // filters the values with all the inputs
  const filteredList = () => {
    return employees.filter(
      c =>
        c.employtype.match(typeFilter) &&
        c.dept.match(deptFilter) &&
        (c.fname.toLowerCase().match(nameFilter.toLowerCase()) ||
          c.lname.toLowerCase().match(nameFilter.toLowerCase))
    );
  };

  // updates each input
  const handleChangeType = event => {
    setTypeFilter(event);
  };

  const handleChangeDept = event => {
    setDeptFilter(event);
  };

  //view function
  const handleView = e => {
    console.log("e.id: ", e.currentTarget.id)
    console.log(employees)
    const employee = employees.find(x => x.id.toString() === e.currentTarget.id)
    console.log('test employee: ', employee)
    history.push({
      pathname: `/Profile/${employee.id}`,
    })
  }

  //update function
  const handleEditRoute = e => {
    console.log("e.id: ", e.currentTarget.id)
    console.log(employees)
    const employee = employees.find(x => x.id.toString() === e.currentTarget.id)
    console.log('test employee: ', employee)
    history.push({
      pathname: `/UpdateEmployee/${employee.id}`,
    })
  }

  //execute delete payroll based on id after select the "delete" button
  //also update the database when the function is executed
  const handleDelete = e => {
    var option = window.confirm("Do you want to delete employee with ID " + e.currentTarget.id + "? \n\n Select OK to delete or CANCEL action");
    if (option === true) {
      axios.delete(`https://asd-ems-db.herokuapp.com/employees/${e.currentTarget.id}`);
      window.location.reload();
    }
  }

  //table display a the list of all created users
  //the update button will call the update function when selected
  //the delete button will call the delete function when selected
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold', }}> Employee List </h1>
          <br />
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
              placeholder="Department"
              size="large"
              style={{ width: '20%' }}
              onChange={handleChangeDept}
              allowClear>
              <Option value="HR">HR</Option>
              <Option value="Operation">Operation</Option>
              <Option value="Marketing">Marketing</Option>
              <Option value="Finance">Finance</Option>
            </Select>

            <Select
              id="type"
              placeholder="Employment Type"
              size="large"
              style={{ width: '20%' }}
              onChange={handleChangeType}
              allowClear>
              <Option value="Full-Time">Full-Time</Option>
              <Option value="Part-Time">Part-Time</Option>
              <Option value="Casual">Casual</Option>
            </Select>
          </Input.Group>
          <br />
        </div>
        <button className="button" name="addnew" type="submit">
          <Link to="./AddUser"> <button> Add New Employee </button></Link>
        </button>
      </div>

      <div style={{ paddingTop: 10 }}>
        <Table dataSource={filteredList()}>
          <Column title="Employee ID" dataIndex="id" key="id" />
          <Column title="First Name" dataIndex="fname" key="firstName" />
          <Column title="Last Name" dataIndex="lname" key="lastName" />
          <Column title="Department" dataIndex="dept" key="employmentType" />
          <Column title="Employment Type" dataIndex="employtype" key="employmentType" />
          <Column title="Options" key="id" render={(p) => (
            <>
              <Space split={<Divider type="vertical" />}>
                <Button id={p.id} onClick={handleView}>view</Button>
                <Button id={p.id} onClick={handleEditRoute}>update</Button>
                <Button id={p.id} onClick={handleDelete}>delete</Button>
              </Space>
            </>
          )} />
        </Table>
      </div>
    </>
  );
};

const UserList = () => {
  return <WebLayout content={Content()} />;
};

export default UserList;
