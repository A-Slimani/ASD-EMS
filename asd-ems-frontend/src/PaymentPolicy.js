import React from 'react';
import WebLayout from './components/WebLayout';
import { Link } from 'react-router-dom';

import testiboi from './paymentPolicyText.json';

let text = '';
testiboi.data.forEach(element => {
  text += element + '\n';
});

const content = () => {
  return (
    <div>
      <h1 style={{ fontSize: '30px', textAlign: 'center' }}>
        <b>Payment Policy</b>
      </h1>

      <div dangerouslySetInnerHTML={{__html: text}}></div>

      <div style={{ textAlign: 'center', paddingTop: 10 }}>
        <Link to="./UpdatePolicy"> <button className="button"> Update Policy </button> </Link>
      </div>
    </div>
  );
};

const PaymentPolicy = () => {
  return <WebLayout content={content()} />;
};

export default PaymentPolicy;
