import React, { useEffect, useState } from 'react';
import WebLayout from './components/WebLayout';
import employeeService from './services/Employee';
import { useHistory, useRouteMatch } from 'react-router-dom';

const Content = () => {
    const match = useRouteMatch('/Profile/:id');
    const [employee, setEmployee] = useState();
    const history = useHistory();
    const MaskData = require('maskdata');

    function goBack() { window.history.back(); }

    const showEmployee = () => {
        return employee !== undefined ? employee : ""
    }

    useEffect(() => {
        employeeService.get(match.params.id).then(emp => setEmployee(emp));
    }, []);

    const handleEditRoute = e => {
        history.push({
            pathname: `/UpdateUser/${employee.id}`
        })
    }

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

    const password = showEmployee().pwd;
    const maskedPassword = MaskData.maskPassword(password, maskPasswordOptions); //mask password

    const bankno = showEmployee().accnum;
    const maskedBankNo = MaskData.maskPassword(bankno, maskCardOptions); //mask bank number details

    const sbs = showEmployee().accbsb;
    const maskedSBS = MaskData.maskPassword(sbs, maskCardOptions); //mask sbs number details

    return (
        <>
            <div style={{ textAlign: 'center' }}>
                <button style={{ float: 'left' }} type='submit' className="update" onClick={goBack} > Back </button>
                <h1 style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold' }}>
                    Welcome, {showEmployee().fname + " " + showEmployee().lname}
                </h1>
                <h2>
                    <a href="#applicationsubmit"> Application Submitted </a> |
                    <a href="#complaintsubmit"> Complaint Submitted </a> |
                    <a href="#payhistory"> Pay History </a>
                </h2>
            </div>

            <div id="personal">
                <h2
                    style={{
                        textAlign: 'left',
                        fontSize: 20,
                        textDecorationLine: 'underline',
                        paddingBottom: 15,
                    }}>
                    Personal Information{' '}
                </h2>

                <button style={{ float: 'right' }} type="submit" className="update" onClick={handleEditRoute}> {' '} Update Details{' '} </button>
                <h3> <b>Employee ID:</b> {showEmployee().id}</h3>
                <h3> <b>Full Name:</b> {showEmployee().fname + " " + showEmployee().lname}</h3>
                <h3> <b>Date of Birth:</b> {showEmployee().dob}</h3>
                <h3> <b>Address:</b> {showEmployee().address + " " + showEmployee().suburb + " " + showEmployee().pcode}</h3>
                <h3> <b>Bank Number:</b>. {maskedBankNo} </h3>
                <h3> <b>SBS:</b> {maskedSBS}</h3>
                <h3> <b>Department:</b> {showEmployee().dept}</h3>
                <h3> <b>Employment Date:</b> {showEmployee().employdate}</h3>
                <h3> <b>Username:</b> {showEmployee().username}</h3>
                <h3> <b>Password:</b> {maskedPassword}</h3>
                <h3> <b>Employment Type:</b> {showEmployee().employtype}</h3>
            </div>

            <div id="applicationsubmit">
                <h2
                    style={{
                        textAlign: 'left',
                        fontSize: 20,
                        textDecorationLine: 'overline',
                        paddingTop: 15,
                        paddingBottom: 15,
                    }}>
                    {' '}
                    Application Submitted{' '}
                </h2>
                <table className="table">
                    <tr>
                        <th> Application ID </th>
                        <th> Date Submitted </th>
                        <th> Name </th>
                        <th> Description </th>
                        <th> Status </th>
                    </tr>
                    <tr>
                        <td> 1 </td>
                        <td> dd/mm/yyyy </td>
                        <td> apply leave </td>
                        <td> description </td>
                        <td>
                            {' '}
                            pending <br /> approved <br /> declined <br />{' '}
                        </td>
                    </tr>
                </table>
            </div>

            <div id="complaintsubmit">
                <h2
                    style={{
                        textAlign: 'left',
                        fontSize: 20,
                        textDecorationLine: 'overline',
                        paddingTop: 15,
                        paddingBottom: 15,
                    }}>
                    {' '}
                    Complaints Submitted{' '}
                </h2>

                <table className="table">
                    <tr>
                        <th> Complaint ID </th>
                        <th> Date Submitted </th>
                        <th> Name </th>
                        <th> Description </th>
                        <th> Status </th>
                    </tr>
                    <tr>
                        <td> 1 </td>
                        <td> dd/mm/yyyy </td>
                        <td> work issue </td>
                        <td> description </td>
                        <td>
                            {' '}
                            pending <br /> solved <br />{' '}
                        </td>
                    </tr>
                </table>
            </div>

            <div id="payhistory">
                <h2
                    style={{
                        textAlign: 'left',
                        fontSize: 20,
                        textDecorationLine: 'overline',
                        paddingTop: 15,
                    }}>
                    {' '}
                    Pay History{' '}
                </h2>

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
        </>
    );
};

const Profile = () => {
    return <WebLayout content={Content()} />;
};

export default Profile;

