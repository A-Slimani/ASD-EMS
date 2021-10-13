import { Button, Divider, Space, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import WebLayout from './components/WebLayout';
import employeeService from "./services/Employee";
import axios from 'axios';

const { Column } = Table;

const Content = () => {
  const [employees, setEmployees] = useState([])
  const [deptFilter, setDeptFilter] = useState('');

  const history = useHistory();

  useEffect(() => {
    employeeService.getAll().then(employees => {
      setEmployees(employees)
    })
  }, [])

  const filterByDept = deptFilter === '' ? employees : employees.filter(c => c.dept.toLowerCase().match(deptFilter.toLowerCase()));

  //update function
  const handleEditRoute = e => {
    console.log("e.id: ", e.currentTarget.id)
    console.log(employees)
    const employee = employees.find(x => x.id.toString() === e.currentTarget.id)
    console.log('test employee: ', employee)
    history.push({
      pathname: `./UpdateEmployee/${employee.id}`,
    })
  }

  //execute delete payroll based on id after select the "delete" button
  //also update the database when the function is executed
  const handleDelete = e => {
    var option = window.confirm("Do you want to delete employee with ID " + e.currentTarget.id + "? \n\n Select OK to delete or CANCEL action");
    if (option === true) {
      axios.delete(`http://localhost:3001/employees/${e.currentTarget.id}`);
      window.location = "./UserList"
    }
  }

  //table display a the list of all created users
  //the update button will call the update function when selected
  //the delete button will call the delete function when selected
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold', }}> Employee List </h1>
        <input type="text" placeholder="Department" name="requesteddept" className="textfield" onChange={({ target }) => { setDeptFilter(target.value) }} />
        <p />

        <button className="button" name="addnew" type="submit">
          <Link to="./AddUser"> <button> Add New Employee </button></Link>
        </button>
      </div>

      <div style={{ paddingTop: 10 }}>
        <Table dataSource={filterByDept}>
          <Column title="Employee ID" dataIndex="id" key="id" />
          <Column title="First Name" dataIndex="fname" key="firstName" />
          <Column title="Last Name" dataIndex="lname" key="lastName" />
          <Column title="Department" dataIndex="dept" key="employmentType" />
          <Column title="Employment Type" dataIndex="employtype" key="employmentType" />
          <Column title="Options" key="id" render={(p) => (
            <>
              <Space split={<Divider type="vertical" />}>
                <Button>view</Button>
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
