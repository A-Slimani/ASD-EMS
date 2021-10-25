import React, { useEffect, useState } from 'react';
import WebLayout from './components/WebLayout';
import { useHistory } from 'react-router-dom';
import { Redirect } from 'react-router';
import employeeService from './services/Employee';

const Content = () => {
    const empid = localStorage.getItem("id");
    const history = useHistory();

    const [employee, setEmployee] = useState({});
    const [payroll, setPayroll] = useState([]);

    const MaskData = require('maskdata');

    useEffect(() => {
        employeeService.get(empid).then(emp => setEmployee(emp));
    }, []);

    const maskPasswordOptions = {
        maskWith: "*", //default masking value 
        maxMaskedCharacters: 20, //number of masking value is limited to 20
        unMaskedCharacters: 0, //to show unmasked value - first
        unMaskedEndCharacters: 0 //to show unmasked value - last
    };

    const maskCardOptions = {
        maskWith: "X", //default masking value
        unmaskedStartDigits: 10, // max value is 10
        unmaskedEndDigits: 1
    };

    const password = employee["pwd"];
    const maskedPassword = MaskData.maskPassword(password, maskPasswordOptions); //mask password

    const bankno = employee["accnum"];
    const maskedBankNo = MaskData.maskPassword(bankno, maskCardOptions); //mask bank number details

    const sbs = employee["accbsb"];
    const maskedSBS = MaskData.maskPassword(sbs, maskCardOptions); //mask sbs number details

    const handleEditRoute = e => {
        history.push({
            pathname: `/UpdateEmployee/${empid}`
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

    if (localStorage.getItem("id") !== null) {
    return (
        <>
            <div style={{ textAlign: 'center' }}>
                <h1 style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold', }}> Welcome, {employee.fname} </h1>
                <h2>
                    <a href="#payhistory"> Pay History </a>
                </h2>
            </div>

            <div id='personal'>
                <h2 style={{ textAlign: 'left', fontSize: 20, textDecorationLine: 'overline', paddingBottom: 15, }}> Personal Information </h2>
                <button style={{ float: 'right' }} type='submit' className="update" onClick={handleEditRoute} > Update Details </button>

                <h3> Employee ID: {employee["id"]}</h3>
                <h3> Full Name: {employee["fname"] + " " + employee["lname"]}</h3>
                <h3> Date of Birth:  {employee["dob"]}  </h3>
                <h3> Address: {employee["address"] + " " + employee["suburb"] + " " + employee["state"] + " " + employee["pcode"]} </h3>
                <h3> Bank Number: {maskedBankNo} </h3>
                <h3> SBS Number: {maskedSBS} </h3>
                <h3> Department: {employee["dept"]} </h3>
                <h3> Employment Date: {employee["employdate"]} </h3>
                <h3> Username: {employee["username"]} </h3>
                <h3> Password: {maskedPassword} </h3>
                <h3> Employment Type: {employee["employtype"]}</h3>
            </div>

            {/* <div id='payhistory'>
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
            </div> */}
        </>
    );
} else {
    return <Redirect to={{ pathname: '/' }} />
  }
};

const Personal = () => {
    return <WebLayout content={Content()} />;
};

export default Personal;
