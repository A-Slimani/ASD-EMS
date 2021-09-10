import React from 'react';
import WebLayout from './components/WebLayout';


const testText = () => {
  return <h1>first header</h1>;
};

const Dashboard = () => {
  return <WebLayout content={testText()} />;
};

export default Dashboard;
