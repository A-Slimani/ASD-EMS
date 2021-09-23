import React from 'react';
import WebLayout from './components/WebLayout';
import { Link } from 'react-router-dom';

const content = () => {
  return (
    <div>
      <h1 style={{ fontSize: '30px', textAlign: 'center' }}>
        {' '}
        <b>Payment Policy</b>{' '}
      </h1>
      <p
        style={{
          fontSize: '20px',
          paddingLeft: '45px',
          paddingTop: '50px',
          textAlign: 'left',
        }}>
        {' '}
        Enterprise Management Systems reflects that by purchasing our Employee Management
        System, you will be agreeing to the following terms and conditions:
        <li style={{ paddingLeft: '20px' }}>
          Any refunds required are to be completed within 20 business days, in which you
          will no longer have access to the Employee Management System, its database, or
          the Enterprise Systems Management servers.
        </li>
        <li style={{ paddingLeft: '20px' }}>
          Issues pertaining to the initial installation of the Employee Management System
          are to be brought up with the Enterprise Management Systems Admin (Human
          Resources) team, and may not be used to confirm a refund within the 20 business
          day period.
        </li>
      </p>
      <p
        style={{
          fontSize: '20px',
          paddingLeft: '45px',
          paddingTop: '50px',
          textAlign: 'left',
        }}>
        {' '}
        Enterprise Management Systems also reflects that by using our Employee Management
        System, you will be agreeing to the following terms and conditions:
        <li style={{ paddingLeft: '20px' }}>
          Enterprise Management Systems reserves the right to not be held responsible for
          loss of information, both pertaining to and not pertaining to payment
          information from the use of the Employment Management System.
        </li>
        <li style={{ paddingLeft: '20px' }}>
          That any issues regarding payments is to go directly to the Admin (Human
          Resources) team to ensure the issue is dealt with correctly.{' '}
        </li>
        <li style={{ paddingLeft: '20px' }}>
          That delays in payment are to be sent to the Enterprise Management Systems Admin
          (Human Resources) team within 5 business days.
        </li>
        <li style={{ paddingLeft: '20px' }}>
          That you accept and comply with the respective jurisdiction for any, and all
          disputes that may arise and relate to Enterprise Management Systems.
        </li>
        <li style={{ paddingLeft: '20px' }}>
          That you accept that Enterprise Management Systems reserves the right to
          change/update company policies and regulations.{' '}
        </li>
        <p>
          <br></br>
          <i>Many thanks,</i>
          <br></br>
          Martin Lym <br></br>
          <br></br>
          Human Resources Manager <br></br>
          <b>Enterprise Management Systems</b>
        </p>
      </p>
      <div style={{ textAlign: 'center', paddingTop: 10 }}>
        <button className="button"> Update Policy </button>{' '}
      </div>
    </div>
  );
};

const PaymentPolicy = () => {
  return <WebLayout content={content()} />;
};

export default PaymentPolicy;
