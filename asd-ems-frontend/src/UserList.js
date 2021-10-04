import { Button, Divider, Space, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import WebLayout from './components/WebLayout';
import employeeService from "./services/Employee";

const { Column } = Table;

const Content = () => {
<<<<<<< HEAD
  const [employees, setEmployees] = useState([]);
=======
  const [employees, setEmployees] = useState([])
  const history = useHistory();
>>>>>>> Abdullah-branch

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
<<<<<<< HEAD
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold', }}> All Employee </h1>
        <input type="textfield" placeholder="First Name" name="requestedfn" class="textfield" />
        <input type="textfield" placeholder="Last Name" name="requestedln" class="textfield" />
        <input type="number" placeholder="Department" name="requesteddep" class="textfield" />
        <input type="textfield" placeholder="Employment Type" name="requestedet" class="textfield" />

        <button className="button" name="searchbtn" type="submit">
          <Link to="./UserList"> <button> Search</button></Link>
        </button>
        <p />

        <button className="button" name="addnew" type="submit">
          <Link to="./AddUser"> <button> Add New Employee</button></Link>
        </button>
      </div>

      <div style={{paddingTop: 10}}>
        <Table dataSource={employees}>
          <Column title="Employee ID" dataIndex="id" key="id" />
          <Column title="First Name" dataIndex="fname" key="firstName" />
          <Column title="Last Name" dataIndex="lname" key="lastName" />
          <Column title="Department" dataIndex="dept" key="department" />
          <Column title="Employment Type" dataIndex="employtype" key="employmentType" />
          <Column title="Options" key="id" render={(p) => (
            <>
              <Space split={<Divider type="vertical" />}>
                <Button>view</Button>
                <Link to="./UpdateEmployee"><Button>update </Button></Link>
                <Button> delete</Button>
              </Space>
            </>
          )} />
        </Table>
      </div>
=======
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
>>>>>>> Abdullah-branch
    </>
  );
};

const UserList = () => {
  return <WebLayout content={Content()} />;
};

export default UserList;
