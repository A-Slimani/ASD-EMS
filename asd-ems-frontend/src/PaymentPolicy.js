import React, {useEffect, useState} from 'react';
import WebLayout from './components/WebLayout';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import paymentPolicyText from './paymentPolicyText.json';
import axios from 'axios';

    // const onSubmit = async e => {
    //     // policy.policytext has the info I want, though the below does nothing
    //     await axios.get("http://localhost:3001/paymentpolicy", paymentpolicy);
    //     //await axios.post("https://asd-ems-db.herokuapp.com/paymentpolicy", paymentpolicy);
    //     window.location = "/PaymentPolicy";
    // };


//let text = axios.get("http://localhost:3001/paymentpolicy");
//alert(text);

// paymentPolicyText.data.forEach(element => {
//   text += element + '\n';
// });

const Content = () => {
  let test = axios.get("https://asd-ems-db.herokuapp.com/paymentpolicy");
        //await axios.post("https://asd-ems-db.herokuapp.com/paymentpolicy", paymentpolicy);
  //console.log(test.then(res => res.data.policytext));

  const promise1 = new Promise((resolve, reject) => {
  resolve(test.then(res => res.data.policytext));
  });

  promise1.then((value) => {
  console.log(value);
    document.getElementById("id").innerHTML = value;
  });

//const testiboi = async () => await axios.get("http://localhost:3001/paymentpolicy").then(result => result.data);
  // const [employees, setEmployees] = useState([])

  // useEffect(() => {
  //   employees.getAll().then(employees => {
  //   setEmployees(employees)
  //   })
  // }, []);

  if (localStorage.getItem("id") !== null) {
  return (
    <div>
      <h1 style={{ fontSize: '30px', textAlign: 'center' }}>
        <b>Payment Policy</b>
      </h1>
      {}

      <div id="id"></div>

      <div style={{ textAlign: 'center', paddingTop: 10 }}>
        <Link to="./UpdatePolicy"><button className="button"> Update Policy </button></Link>
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
