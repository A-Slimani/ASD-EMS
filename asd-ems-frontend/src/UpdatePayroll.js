import './style.css';
import WebLayout from './components/WebLayout'
import React, { useState } from 'react';

const Content = () => {
  const [employee, setEmployee] = useState([])

  function goBack(e) {
    e.preventDefault();
    var option = window.confirm("Do you want leave the page?\n\nSelect OK to go back and data will not be saved\n\nSelect CANCEL to remain on the page")
    if (option === true) { window.history.back(); }
  }

  function handleSubmit(e) {
    function isNumber(n) { return /^-?[\d.]+(?:e-?\d+)?$/.test(n); }
    function isName(name) { return /^-?[a-zA-Z0-9._%+-]+@EMS[HR,OP,MK,FN]{2}$/.test(name) }
    function isText(text) { return (/^[A-Za-z]+$/).test(text) }

    e.preventDefault();
    var s = window.confirm("Do you update the information with entered data?\n\nSelect OK to proceed\n\nSelect CANCEL to remain on the page");
    if (s === true) {

      var currentpay = document.forms["updateform"]["currentpay"].value;
      var pcode = document.forms["updateform"]["pcode"].value;
      var paymentmethod = document.forms["updateform"]["paymentmethod"].value;
      var description = document.forms["updateform"]["description"].value;

      if (currentpay === "" || isNumber(currentpay) === false) { alert("Current pay field is empty or invalid format input"); }
      else if (pcode === "" || isNumber(pcode) === false) { alert("Post Code is empty or invalid format input"); }
      else if (paymentmethod === "") { alert("Payment Method must be select"); }
      else if (description === "") { alert("Provide payment reason for this payroll");}
      else { window.location = "./UserList"; }
    }
  }

  return (
    <div>
      <button style={{ float: 'left' }} type='submit' className="update" onClick={goBack} > Back </button> <br />
      <form id="updateform" name="updateform" >
        <h1 style={{ textAlign: 'center', fontSize: 30, }}> Edit <b>Employee</b> payroll details </h1>

        <label> Current Pay: </label> <small> Up to 10 digits </small> <p />
        <input type="text" defaultValue="50000" name="currentpay" maxlength="10" className="formtextfield" required />{' '}
        <br />
        <label> Bonus: </label> <small> Up to 6 digits </small> <p />
        <input type="text" defaultValue="5000" name="pcode" maxlength="6" className="formtextfield" required />{' '}
        <p />
        <label> Payment Method: </label> <br />
        <select name="paymentmethod" className="formtextfield" required>
          <option value="HR"> Cash </option>
          <option value="finance"> Cheques </option>
          <option value="marketing"> Eftpos </option>
          <option value="operation"> Others </option>
        </select>{' '}
        <p />
        <label> Description: </label>
                    <p />
                    <textarea type="text" placeholder="Please provide reason for chosen payment method. If unapplicable, write 'n/a'." name="description" className="formtextfield" required />{' '}
                    <br />
        <div style={{ textAlign: 'center', paddingTop: 10 }}>
          <button className="button" id="updatesubmit" type="submit" onClick={handleSubmit}>
            Update <b> Employee </b> Payroll details
          </button>{' '}
        </div>
      </form>
    </div>
  );
};

const UpdatePayroll = () => {
  return <WebLayout content={Content()} />;
}

export default UpdatePayroll;