import React from 'react';
import WebLayout from './components/WebLayout';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import paymentPolicyText from './paymentPolicyText.json';

let text = '';
paymentPolicyText.data.forEach(element => {
  text += element + '\n';
});

const Content = () => {
  if (localStorage.getItem("id") !== null) {
  return (
    <div>
      <h1 style={{ fontSize: '30px', textAlign: 'center' }}>
        <b>Payment Policy</b>
      </h1>

      <div dangerouslySetInnerHTML={{ __html: text }}></div>

      <div style={{ textAlign: 'center', paddingTop: 10 }}>
        <button className="button"> Update Policy </button>
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
