import React, {useEffect, useState} from 'react';
import WebLayout from '../components/WebLayout';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import paymentPolicyText from '../paymentPolicyText.json';
import axios from 'axios';

const Content = () => {
  let test = axios.get("https://asd-ems-db.herokuapp.com/paymentpolicy");

  const promise1 = new Promise((resolve, reject) => {
  resolve(test.then(res => res.data.policytext));
  });

  promise1.then((value) => {
  console.log(value);
    document.getElementById("id").innerHTML = value;
  });

  if (localStorage.getItem("id") !== null) {
  return (
    <div>
      <h1 style={{ fontSize: '30px', textAlign: 'center' }}>
        <b>Payment Policy</b>
      </h1>
      <div id="id"></div>
      <div style={{ textAlign: 'center', paddingTop: 10 }}>
        <Link to="/UpdatePolicy"><button className="button"> Update Policy </button></Link>
      </div>
    </div>
  );
} else {
  return <Redirect to={{ pathname: '/' }} />
}
};

const PaymentPolicy = () => {
  return <WebLayout content={Content()} />;
};

export default PaymentPolicy;
