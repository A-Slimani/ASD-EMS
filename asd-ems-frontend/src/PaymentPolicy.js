import React from 'react';
import WebLayout from './components/WebLayout';
import { Link } from 'react-router-dom';
import { useRouteMatch } from 'react-router';
import paymentPolicyText from './paymentPolicyText.json';

let text = '';
paymentPolicyText.data.forEach(element => {
  text += element + '\n';
});

const Content = () => {
  const match = useRouteMatch('/PaymentPolicy/:id');
  return (
    <div>
      <h1 style={{ fontSize: '30px', textAlign: 'center' }}>
        <b>Payment Policy</b>
      </h1>

      <div dangerouslySetInnerHTML={{ __html: text }}></div>

      <div style={{ textAlign: 'center', paddingTop: 10 }}>
        <Link to={`/UpdatePolicy/${match.params.id}`}> <button className="button"> Update Policy </button> </Link>
      </div>
    </div>
  );
};

const PaymentPolicy = () => {
  return <WebLayout content={Content()} />;
};

export default PaymentPolicy;
