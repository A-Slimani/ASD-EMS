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
                <div className="navbar">
                    <h1 style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold', }}> Update Payment Policy </h1>
                    <p style={{ textAlign: 'center' }}> Please use HTML tags to structure the payment policy </p>
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
                            <Link to={`/PaymentPolicy`}> <button className="button"> Updated New Policy </button> </Link>
                        </div>
                    </form>
                </div>
            </div>
        );
    } else {
        return <Redirect to={{ pathname: '/' }} />
    }
};

const UpdatePolicy = () => {
    return <WebLayout content={Content()} />;
};

export default UpdatePolicy;
