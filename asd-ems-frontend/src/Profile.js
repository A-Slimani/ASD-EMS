import React, { useEffect, useState } from 'react';
import WebLayout from './components/WebLayout';
import employeeService from './services/Employee';
import { useHistory } from 'react-router-dom';
import { Redirect, useRouteMatch } from 'react-router';

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
            pathname: `/UpdateEmployee/${employee.id}`
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

    if (localStorage.getItem("id") !== null) {
        return (
            <>
                <div style={{ textAlign: 'center' }}>
                    <button style={{ float: 'left' }} type='submit' className="update" onClick={goBack} > Back </button>
                    <h1 style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold' }}>
                        Welcome, {showEmployee().fname + " " + showEmployee().lname}
                    </h1>
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
                            <td> {showEmployee().fname} </td>
                        </tr>
                        <tr>
                            <td> Last Name </td>
                            <td> {showEmployee().lname} </td>
                        </tr>
                        <tr>
                            <td> Date of Birth </td>
                            <td> {showEmployee().dob} </td>
                        </tr>
                        <tr>
                            <td> Address </td>
                            <td> {showEmployee().address} </td>
                        </tr>
                        <tr>
                            <td> Suburb </td>
                            <td> {showEmployee().suburb} </td>
                        </tr>
                        <tr>
                            <td> Post Code </td>
                            <td> {showEmployee().pcode} </td>
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
                            <td> {showEmployee().accname} </td>
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
                            <td> {showEmployee().id} </td>
                        </tr>
                        <tr>
                            <td> Employment Date </td>
                            <td> {showEmployee().employdate} </td>
                        </tr>
                        <tr>
                            <td> Deaprtment </td>
                            <td> {showEmployee().dept} </td>
                        </tr>
                        <tr>
                            <td> Employment Type </td>
                            <td> {showEmployee().employtype} </td>
                        </tr>
                        <tr>
                            <td> Username </td>
                            <td> {showEmployee().username} </td>
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

                {/* <div id="applicationsubmit">
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
                </div> */}
            </>
        );
    } else {
        return <Redirect to={{ pathname: '/' }} />
    }
};

const Profile = () => {
    return <WebLayout content={Content()} />;
};

export default Profile;

