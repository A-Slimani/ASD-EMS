import WebLayout from './components/WebLayout';
import axios from 'axios';
import React, { useState } from 'react';

const Content = () => {
    const [payroll, setPayroll] = useState({
        fname: "", lname: "",
        amount: "", bonus: "",
        paydate: "", paymethod: "",
        description: ""
    });

    const { fname, lname, amount, bonus, paydate, paymethod, description } = payroll;

    const onInputChange = e => {
        setPayroll({ ...payroll, [e.target.name]: e.target.value })
    };

    //execute add function to create new payroll
    const onSubmit = async e => {
        await axios.post("http://localhost:3001/payrolldb", payroll);
        window.location = "./PayrollHistory";
    };

    //handle create payroll form validation
    //will display notification when incorrect format input and prevent from proceed to next page
    function handleSubmit(e) {
        function isNumber(n) { return /^-?[\d.]+(?:e-?\d+)?$/.test(n); }
        function isText(text) { return (/^[A-Za-z]+$/).test(text) }

        e.preventDefault();
        var s = window.confirm("Do you want add a new user with the entered information?\n\nSelect OK to proceed\n\nSelect CANCEL to reset form");
        if (s === true) {
            var fname = document.forms["payrollform"]["fname"].value;
            var lname = document.forms["payrollform"]["lname"].value;
            var amount = document.forms["payrollform"]["amount"].value;
            var bonus = document.forms["payrollform"]["bonus"].value;
            var description = document.forms["payrollform"]["description"].value;
            var paydate = document.forms["payrollform"]["paydate"].value;

            if (fname === "" || isText(fname) === false) { alert("First Name field is empty or invalid format input"); }
            else if (lname === "" || isText(lname) === false) { alert("Last Name field is empty or invalid format input"); }
            else if (amount === "" || isNumber(amount) === false) { alert("Amount field is empty or invalid format input"); }
            else if (bonus === "" || isNumber(bonus) === false) { alert("Contact Number field is empty or invalid format input"); }
            else if (description === "") { alert("Provide payment reason for this payroll"); }
            else if ((new Date().getFullYear() - new Date(paydate).getFullYear()) >= 3) { alert("Payment cannot exceed 3 years"); }
            else { onSubmit(); }
        }
        else { document.getElementById("payrollform").reset(); }
    }

    //the payroll form enable admin to create new payroll for each payment paid
    //each element has an input validation such that correct data inputted into each field
    //the button called the create/add function when selected to store the data into the database
    return (
        <>
            <div>
                <form id='payrollform' name='payrollform' onSubmit={e => onSubmit(e)} >
                    <h1 style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold', }}> Create New Payroll </h1>
                    <p style={{ textAlign: 'center' }}> {' '} Please fill out the payroll details </p>
                    <label> Pay Date: </label>
                    <input
                        type="date"
                        name="paydate"
                        className="formtextfield"
                        value={paydate}
                        onChange={e => onInputChange(e)}
                    />{' '}
                    <br />

                    <label> Employee First Name: </label>
                    <input
                        type="text"
                        placeholder="First Name"
                        name="fname"
                        className="formtextfield"
                        value={fname}
                        onChange={e => onInputChange(e)}
                    />{' '}
                    <br />

                    <label> Employee Last Name: </label>
                    <input
                        type="text"
                        placeholder="Last Name"
                        name="lname"
                        className="formtextfield"
                        value={lname}
                        onChange={e => onInputChange(e)}
                    />{' '}
                    <br />

                    <label> Amount $: </label>
                    <p />
                    <input
                        type="number"
                        placeholder="Current Pay"
                        name="amount"
                        className="formtextfield"
                        value={amount}
                        onChange={e => onInputChange(e)}
                    />{' '}
                    <br />

                    <label> Bonus $: </label>
                    <p />
                    <input
                        type="number"
                        placeholder="Bonus"
                        name="bonus"
                        className="formtextfield"
                        value={bonus}
                        onChange={e => onInputChange(e)}
                    />{' '}
                    <br />

                    <label> Payment Method: </label> <br />
                    <select name="paymethod" className="formtextfield" value={paymethod} onChange={e => onInputChange(e)}>
                        <option value="select"> -- Select one -- </option>
                        <option value="cash"> Cash </option>
                        <option value="cheque"> Cheque </option>
                        <option value="eftpos"> EFTPOS </option>
                        <option value="others"> Others </option>
                    </select>{' '}
                    <p />

                    <label> Description </label>
                    <p />
                    <textarea
                        type="text"
                        placeholder="Payment Reason"
                        name="description"
                        className="formtextfield"
                        value={description}
                        onChange={e => onInputChange(e)}
                    />{' '}
                    <br />
                    <div style={{ textAlign: 'center', paddingTop: 10 }}>
                        <button type="submit" id="submit" className="button" onClick={handleSubmit}> Create New Payroll </button>{' '}
                    </div>
                </form>
            </div>
        </>
    );
};

const AddPayroll = () => {
    return <WebLayout content={Content()} />;
};

export default AddPayroll;
