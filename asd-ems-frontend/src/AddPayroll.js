import React from 'react';
import WebLayout from './components/WebLayout';

const content = () => {
    function handleSubmit(e) {
        function isNumber(n) { return /^-?[\d.]+(?:e-?\d+)?$/.test(n); }
        function isText(text) { return (/^[A-Za-z]+$/).test(text) }

        e.preventDefault();
        var s = window.confirm("Do you want add a new user with the entered information?\n\nSelect OK to proceed\n\nSelect CANCEL to reset form");
        if (s === true) {
            var fname = document.forms["payrollform"]["fname"].value;
            var lname = document.forms["payrollform"]["lname"].value;
            var amount = document.forms["payrollform"]["amt"].value;
            var bonus = document.forms["payrollform"]["bonus"].value;
            var description = document.forms["payrollform"]["description"].value;


            if (fname === "" || isText(fname) === false) { alert("First Name field is empty or invalid format input"); }
            else if (lname === "" || isText(lname) === false) { alert("Last Name field is empty or invalid format input"); }
            else if (amount === "" || isNumber(amount) === false) { alert("Amount field is empty or invalid format input"); }
            else if (bonus === "" || isNumber(bonus) === false) { alert("Contact Number field is empty or invalid format input"); }
            else if (description === "") { alert("Provide payment reason for this payroll"); }
            else { window.location = "./PayrollHistory"; }
        }
        else { document.getElementById("payrollform").reset(); }
    }

    return (
        <>
            <div>
                <form id='payrollform' name='payrollform'>
                    <h1 style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold', }}> Create New Payroll </h1>
                    <p style={{ textAlign: 'center' }}> {' '} Please fill out the payroll details </p>
                    <label> Pay Date: </label>
                    <input type="text" value={new Date()} name="paydate" className="formtextfield" disabled />{' '}
                    <br />

                    <label> Employee First Name: </label>
                    <input type="text" placeholder="First Name" name="fname" className="formtextfield" required />{' '}
                    <br />
                    <label> Employee Last Name: </label>
                    <input type="text" placeholder="Last Name" name="lname" className="formtextfield" required />{' '}
                    <br />
                    <label> Amount $: </label>
                    <p />
                    <input type="number" placeholder="Current Pay" name="amt" className="formtextfield" required />{' '}
                    <br />
                    <label> Bonus $: </label>
                    <p />
                    <input type="number" placeholder="Bonus" name="bonus" className="formtextfield" required />{' '}
                    <br />
                    <label> Payment Method: </label> <br />
                    <select name="paymethod" className="formtextfield" required>
                        <option value="select"> -- Select one -- </option>
                        <option value="cash"> Cash </option>
                        <option value="cheque"> Cheques </option>
                        <option value="eftpos"> EFTPOS </option>
                        <option value="others"> Others </option>
                    </select>{' '}
                    <p />
                    <label> Description: </label>
                    <p />
                    <textarea type="text" placeholder="Please provide reason for chosen payment method. If unapplicable, write 'n/a'." name="description" className="formtextfield" required />{' '}
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
    return <WebLayout content={content()} />;
};

export default AddPayroll;
