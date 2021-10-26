import React, { useEffect, useState } from 'react';
import WebLayout from './components/WebLayout';
import { useHistory } from 'react-router-dom';
import { Redirect } from 'react-router';
import employeeService from './services/Employee';

const Content = () => {
    const empid = localStorage.getItem("id");
    const history = useHistory();
    const [employee, setEmployee] = useState({});

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

    if (localStorage.getItem("id") !== null) {
        return (
            <>
                <div style={{ textAlign: 'center' }}>
                    <h1 style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold', }}> Welcome, {employee.fname} </h1>
                    <h2>
                        <a href="#personal"> Personal Information </a> |
                        <a href="#bankdetails"> Bank Details </a> |
                        <a href="#employmentdetails"> Employment Details </a>
                    </h2>
                </div>

                <div id="personal" style={{ paddingTop: 20 }}>
                    <h2
                        style={{
                            textAlign: 'left',
                            fontSize: 20,
                            textDecorationLine: 'overline',
                            paddingBottom: 15,
                        }}>
                        Personal Information
                    </h2>
                    <table className="table">
                        <tr>
                            <td> First Name </td>
                            <td> {employee["fname"]} </td>
                        </tr>
                        <tr>
                            <td> Last Name </td>
                            <td> {employee["lname"]} </td>
                        </tr>
                        <tr>
                            <td> Date of Birth </td>
                            <td> {employee["dob"]} </td>
                        </tr>
                        <tr>
                            <td> Address </td>
                            <td> {employee["address"]} </td>
                        </tr>
                        <tr>
                            <td> Suburb </td>
                            <td> {employee["suburb"]} </td>
                        </tr>
                        <tr>
                            <td> Post Code </td>
                            <td> {employee["pcode"]} </td>
                        </tr>
                    </table>
                </div>

                <div id="bankdetails" style={{ paddingTop: 20 }}>
                    <h2
                        style={{
                            textAlign: 'left',
                            fontSize: 20,
                            textDecorationLine: 'overline',
                            paddingBottom: 15,
                        }}>
                        Bank Details
                    </h2>
                    <table className="table">
                        <tr>
                            <td> Account Name </td>
                            <td> {employee["accname"]} </td>
                        </tr>
                        <tr>
                            <td> Bank Account Number </td>
                            <td> {maskedBankNo} </td>
                        </tr>
                        <tr>
                            <td> SBS Number </td>
                            <td> {maskedSBS} </td>
                        </tr>
                    </table>
                </div>

                <div id="employmentdetails" style={{ paddingTop: 20 }}>
                    <h2
                        style={{
                            textAlign: 'left',
                            fontSize: 20,
                            textDecorationLine: 'overline',
                            paddingBottom: 15,
                        }}>
                        Employement Details
                    </h2>

                    <table className="table">
                        <tr>
                            <td> Employee ID </td>
                            <td> {employee["id"]} </td>
                        </tr>
                        <tr>
                            <td> Employment Date </td>
                            <td> {employee["employdate"]} </td>
                        </tr>
                        <tr>
                            <td> Employment Type </td>
                            <td> {employee["employtype"]} </td>
                        </tr>
                        <tr>
                            <td> Deaprtment </td>
                            <td> {employee["dept"]} </td>
                        </tr>
                        <tr>
                            <td> Username </td>
                            <td> {employee["username"]} </td>
                        </tr>
                        <tr>
                            <td> Password </td>
                            <td> {maskedPassword} </td>
                        </tr>
                    </table>
                </div>

                <div style={{ textAlign: "center", paddingTop: 20 }}>
                    <button type="submit" className="update" onClick={handleEditRoute}> Update Details </button>
                </div>
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
