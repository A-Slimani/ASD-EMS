import React from 'react';
import WebLayout from './components/WebLayout';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
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

    preview.innerHTML = "<div style='font-size: 20px; padding-left: 45px; padding-top: 50px; text-align: left'>" + formTextField.value + "</div>";
}

// const [paymentpolicy, setPaymentPolicy] = useState({
//     fname: formTextField.value,
//   });

const Content = () => {
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
                        <li> <button onClick={() => {setText("\n<ul>\n\t<li style='padding-left: 20px'>...</li>\n</ul>")}}> Bullet Point </button> </li>
                        <li> <button onClick={() => {setText("\n<b>\n\t\n</b>")}}><b>Bold</b></button> </li>
                        <li> <button onClick={() => {setText("\n<i>\n\t\n</i>")}}><i>Italic</i></button> </li>
                        <li> <button onClick={() => {setText("\n<u>\n\t\n</u>")}}><u>Underline</u></button> </li>
                        <li> <button onClick={() => {setText("\n<h1 style='font-size: 1.5em'>\n\t\n</h1>")}}>Heading</button> </li>
                        <li> <button onClick={() => {setText("\n<p>\n\t\n</p>")}}>Paragraph</button> </li>
                        <li> <button onClick={() => {setText("\n<span style='color: red'>\n\t\n</span>")}}> Text Color </button> </li>
                    </ul>
                </div>
                <div style={{display: "flex"}}>
                    <div className="thing" style={{margin: "0 2.5em 0 5em", width: "50%"}}>
                        <form>
                            <textarea
                                type="text"
                                className="formtextfield"
                                onChange={() => updatePreview()}
                                style={{resize: "none"}}
                                cols="50" rows="20">
                            </textarea>
                        </form>
                    </div>
                    <div className="preview-container" style={{margin: "0 5em 0 2.5em", width: "50%"}}>
                        <div className="preview" style={{backgroundColor: "white", height: "100%", padding: "3em 5em"}}></div>
                    </div>
                </div>
                <div style={{ textAlign: 'center', paddingTop: "3em" }}>
                    <Link to={`/PaymentPolicy`}> <button className="button"> Updated New Policy </button> </Link>
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
