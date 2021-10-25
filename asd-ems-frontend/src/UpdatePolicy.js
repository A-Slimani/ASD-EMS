import React from 'react';
import WebLayout from './components/WebLayout';
import { Link } from 'react-router-dom';
import { useRouteMatch } from 'react-router';
import paymentPolicyText from './paymentPolicyText.json';

let text = '';
paymentPolicyText.data.forEach(element => {
    text += element + '\n';
});

function setText(str) {
    let formTextField = document.getElementsByClassName("formtextfield")[0];
    formTextField.value = formTextField.value + str;

    let preview = document.getElementsByClassName("preview")[0];
    preview.innerHTML = preview + str;
}

function updatePreview() {
    let formTextField = document.getElementsByClassName("formtextfield")[0];
    let preview = document.getElementsByClassName("preview")[0];
    console.log(preview.innerHTML);
    preview.innerHTML = formTextField.value;
}

const Content = () => {
    return (
        <div className="container">
            <div className="navbar">
                <ul>
                    <li> <button onClick={() => {setText("\n<ul>\n\t<li style='padding-left: 20px'>...</li>\n</ul>")}}> Bullet Point </button> </li>
                    <li> <button onClick={() => {setText("\n<b>\n\t\n</b>")}}> Bold </button> </li>
                    <li> <button onClick={() => {setText("\n<i>\n\t\n</i>")}}> Italic </button> </li>
                    <li> <button onClick={() => {setText("\n<u>\n\t\n</u>")}}> Underline </button> </li>
                    <li> <button onClick={() => {setText("\n<span color=red>\n\t\n</span>")}}> Text Color </button> </li>
                </ul>
            </div>
            <div style={{display: "flex"}}>
                <div className="thing" style={{width: "50%"}}>
                    <div>
                        <form>
                            <textarea
                                type="text"
                                className="formtextfield"
                                onChange={() => updatePreview()}
                                cols="50" rows="50">
                                {"<div style='font-size: 20px; padding-left: 45px; padding-top: 50px; text-align: left'>\n\t\n</div>"}
                            </textarea>

                            <div style={{ textAlign: 'center', paddingTop: 10 }}>
                                <Link to="/PaymentPolicy"> <button className="button"> Updated New Policy </button> </Link>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="preview-container" style={{margin: "0 3em", width: "50%"}}>
                    <div className="preview" style={{backgroundColor: "white"}}></div>
                </div>
            </div>
        </div>
    );
};

const UpdatePolicy = () => {
    return <WebLayout  content={Content()} />;
};

export default UpdatePolicy;
