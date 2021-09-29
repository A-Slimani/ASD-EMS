import React from 'react';
import WebLayout from './components/WebLayout';
import { Link } from 'react-router-dom';

const content = () => {
    return (
        <div>
            <div className="navbar">
                <ul>
                    <li> <button> Bullet Point </button> </li>
                    <li> <button> Bold </button> </li>
                    <li> <button> Italic </button> </li>
                    <li> <button> Underline </button> </li>
                    <li> <button> Text Color </button> </li>
                </ul>
            </div>
            <div>
                <textarea type="text" className="formtextfield" cols="50" rows="50" >
                    "payment policy from the database"

                    Enterprise Management Systems reflects that by purchasing our Employee Management
                    System, you will be agreeing to the following terms and conditions:

                    Any refunds required are to be completed within 20 business days, in which you
                    will no longer have access to the Employee Management System, its database, or
                    the Enterprise Systems Management servers.

                    Issues pertaining to the initial installation of the Employee Management System
                    are to be brought up with the Enterprise Management Systems Admin (Human
                    Resources) team, and may not be used to confirm a refund within the 20 business
                    day period.

                    Enterprise Management Systems also reflects that by using our Employee Management
                    System, you will be agreeing to the following terms and conditions:

                    Enterprise Management Systems reserves the right to not be held responsible for
                    loss of information, both pertaining to and not pertaining to payment
                    information from the use of the Employment Management System.

                    That any issues regarding payments is to go directly to the Admin (Human
                    Resources) team to ensure the issue is dealt with correctly.

                    That delays in payment are to be sent to the Enterprise Management Systems Admin
                    (Human Resources) team within 5 business days.

                    That you accept and comply with the respective jurisdiction for any, and all
                    disputes that may arise and relate to Enterprise Management Systems.

                    That you accept that Enterprise Management Systems reserves the right to
                    change/update company policies and regulations.
                </textarea>

                <div style={{ textAlign: 'center', paddingTop: 10 }}>
                    <Link to="./PaymentPolicy"> <button className="button"> Updated New Policy </button> </Link>
                </div>
            </div>
        </div>
    );
};

const PaymentPolicy = () => {
    return <WebLayout content={content()} />;
};

export default PaymentPolicy;
