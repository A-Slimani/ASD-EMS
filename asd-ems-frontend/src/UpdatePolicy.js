import React from 'react';
import WebLayout from './components/WebLayout';
import { Link } from 'react-router-dom';

import paymentPolicyText from './paymentPolicyText.json';

let text = '';
paymentPolicyText.data.forEach(element => {
    text += element + '\n';
});

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
                <form> 
                <textarea 
                    type="text" 
                    className="formtextfield" 
                    cols="50" rows="50">
                        {text}
                </textarea>

                <div style={{ textAlign: 'center', paddingTop: 10 }}>
                    <Link to="./PaymentPolicy"> <button className="button"> Updated New Policy </button> </Link>
                </div>
                </form>
            </div>
        </div>
    );
};

const PaymentPolicy = () => {
    return <WebLayout content={content()} />;
};

export default PaymentPolicy;
