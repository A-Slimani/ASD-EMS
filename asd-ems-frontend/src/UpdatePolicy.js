import WebLayout from './components/WebLayout';
import axios from 'axios';
import React, { useState } from 'react';
import { Redirect } from 'react-router';
// import paymentPolicyText from './paymentPolicyText.json';

let text = '';
// paymentPolicyText.data.forEach(element => {
//     text += element + '\n';
// });

function setText(str) {
    let formTextField = document.getElementsByClassName("formtextfield")[0];
    formTextField.value = formTextField.value + str;

    let preview = document.getElementsByClassName("preview")[0];
    preview.innerHTML = preview + str;
}

function updatePreview() {
    let formTextField = document.getElementsByClassName("formtextfield")[0];
    let preview = document.getElementsByClassName("preview")[0];

    preview.innerHTML = formTextField.value;
}

// const [paymentpolicy, setPaymentPolicy] = useState({
//     fname: formTextField.value,
//   });

const Content = () => {
    const [paymentpolicy, setPolicy] = useState({ policytext: "" });

    const { policytext } = paymentpolicy;

    const onInputChange = e => {
        setPolicy({ ...paymentpolicy, [e.target.name]: e.target.value });
    };

    const onSubmit = async e => {
        // policy.policytext has the info I want, though the below does nothing
        //await axios.post("http://localhost:3001/paymentpolicy", paymentpolicy);
        await axios.post("https://asd-ems-db.herokuapp.com/paymentpolicy", paymentpolicy);
        window.location = "/PaymentPolicy";
    };

    const handleSubmit = e => {
        e.preventDefault();
        var policyText = document.forms["policyform"]["policytext"].value;
        if (policyText.includes("<script")) {
            alert("Error: script tag found in editor text, this may give you a bad time")
            window.location.reload(); 
        } else {
            onSubmit(e);
        }
    };

    if (localStorage.getItem("id") !== null) {
        return (
            <div className="container">
                <h1 style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold', }}> Update Payment Policy </h1>
                <p style={{ textAlign: 'center' }}> Please use HTML tags to structure the payment policy </p>
                <div style={{display: "flex"}}>
                    <h1 style={{fontSize: "3em", textAlign: "center", width: "50%"}}>Editor</h1>
                    <h1 style={{fontSize: "3em", textAlign: "center", width: "50%"}}>Preview</h1>
                </div>
                <div className="navbar" style={{margin: "1em 5em"}}>
                    <ul>
                        <li> <button onClick={() => {setText("\n<ul style='margin-left: 40px'>\n\t<li style='padding-left: 10px'>...</li>\n</ul>")}}> Bullet Point </button> </li>
                        <li> <button onClick={() => {setText("\n<b>\n\t\n</b>")}}><b>Bold</b></button> </li>
                        <li> <button onClick={() => {setText("\n<i>\n\t\n</i>")}}><i>Italic</i></button> </li>
                        <li> <button onClick={() => {setText("\n<u>\n\t\n</u>")}}><u>Underline</u></button> </li>
                        <li> <button onClick={() => {setText("\n<h1 style='font-size: 1.5em'>\n\t\n</h1>")}}>Heading</button> </li>
                        <li> <button onClick={() => {setText("\n<p>\n\t\n</p>")}}>Paragraph</button> </li>
                        <li> <button onClick={() => {setText("\n<span style='color: red'>\n\t\n</span>")}}> Text Color </button> </li>
                    </ul>
                </div>
                <div style={{display: "flex"}}>
                    <div className="thing" style={{margin: "0 1.5em 0 5em", width: "50%"}}>
                        <form id="policyform" onSubmit={e => onSubmit(e)}>
                            <textarea
                                type="text"
                                name="policytext"
                                className="formtextfield"
                                onChange={e => {onInputChange(e); updatePreview()}}
                                cols="50" rows="20">
                                    {text}
                            </textarea>
                            <div style={{ textAlign: 'center', paddingTop: "3em" }}>
                                <button type="submit" className="button" onClick={handleSubmit}>Update Policy</button>
                            </div>
                        </form>
                    </div>
                    <div className="preview-container" style={{margin: "0 5em 0 1.5em", width: "50%"}}>
                        <div className="preview" style={{backgroundColor: "white", height: "100%", padding: "0 5em 3em 5em"}}></div>
                    </div>
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
