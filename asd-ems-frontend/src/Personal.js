import React, { useEffect, useState } from 'react';
import { Button, Divider, Space, Table } from 'antd';
import WebLayout from './components/WebLayout';
import { useHistory, useRouteMatch } from 'react-router-dom';
import employeeService from './services/Employee';
import axios from 'axios';

const Content = () => {
    const match = useRouteMatch('/Personal/:id');
    const history = useHistory();
    const [employee, setEmployee] = useState({});
    const [logtime, setLogTime] = useState([]);
    const [payroll, setPayroll] = useState([]);

    useEffect(() => {
        employeeService.get(match.params.id).then(emp => setEmployee(emp));
    }, []);

    const handleEditRoute = e => {
        history.push({
            pathname: `/UpdateUser/${employee.id}`
        })
    }

    // const id = window.localStorage.getItem("current-admin");
    // useEffect(() => {
    //     employeeService.get(id).then(employee => {
    //         setEmployee(employee);
    //     })
    //     axios.get(`http://localhost:3001/logtime`).then(response => {
    //         const logtimes = []
    //         for (let i of response.data) {
    //             if (i.user_id == id) {
    //                 logtimes.push(i);
    //             }
    //         }
    //         setLogTime(logtimes);
    //         console.log(logtimes)
    //     });
    // })

    return (
        <>
            <div style={{ textAlign: 'center' }}>
                <h1 style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold', }}> Welcome, {employee.fname} </h1>
                <h2>
                    {/* <a href="#logtime"> Logtime </a> | */}
                    <a href="#payhistory"> Pay History </a>
                </h2>
            </div>

            <div id='personal'>
                <h2 style={{ textAlign: 'left', fontSize: 20, textDecorationLine: 'overline', paddingBottom: 15, }}> Personal Information </h2>
                <Button style={{ float: 'right' }} type='submit' className="update" onClick={handleEditRoute} > Update Details </Button>

                <h3> Employee ID: {employee["id"]}</h3>
                <h3> Full Name: {employee["fname"] + " " + employee["lname"]}</h3>
                <h3> Date of Birth:  {employee["dob"]}  </h3>
                <h3> Address: {employee["address"] + " " + employee["suburb"] + " " + employee["state"] + " " + employee["pcode"]} </h3>
                <h3> Bank Number: {employee["accnum"]} </h3>
                <h3> Department: {employee["dept"]} </h3>
                <h3> Employment Date: {employee["employdate"]} </h3>
                <h3> Username: {employee["username"]} </h3>
                <h3> Employment Type: {employee["employtype"]}</h3>
            </div>

            <div id='payhistory'>
                <h2 style={{ textAlign: 'left', fontSize: 20, textDecorationLine: 'overline', paddingTop: 15, }}> Pay History </h2>
                <table className="table">
                    <tr>
                        <th> Date </th>
                        <th> Bank Number </th>
                        <th> Amount $ </th>
                        <th> Bonus $ </th>
                        <th> Description </th>
                    </tr>
                    <tr>
                        <td> dd/mm/yyyy </td>
                        <td> 123 </td>
                        <td> 70000 </td>
                        <td> 5000 </td>
                        <td> Business Claim </td>
                    </tr>
                </table>
            </div>

            {/* <div id='logtime'>
                <h2 style={{ textAlign: 'left', fontSize: 20, textDecorationLine: 'overline', paddingTop: 15, paddingBottom: 15, }}> Logtime </h2>
                <table className="table">
                    <tr>
                        <th> Login ID </th>
                        <th> Login Date and Time </th>
                        <th> Logout Date and Time </th>
                    </tr>
                    <tr>
                        <td> 1 </td>
                        <td> 10 am </td>
                        <td> 10 pm </td>
                    </tr>
                </table>
            </div> */}
        </>
    );
};

const Personal = () => {
    const match = useRouteMatch('/Personal/:id');
    return <WebLayout id={match.params.id} content={Content()} />;
};

export default Personal;
