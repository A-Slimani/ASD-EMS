import { Button, Divider, Space, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import WebLayout from './components/WebLayout';
import applicationService from "./services/Application";

const { Column } = Table;

const Content = () => {
  const [applicationform, setApplications] = useState([]);

  useEffect(() => {
    applicationService.getAll().then(applicationform => {
      setApplications(applicationform)
    })
  }, [])

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold', }}> All Applications </h1>
        <input type="number" placeholder="Application ID" name="requestedid" class="textfield" />
        <input type="textfield" placeholder="Application Type" name="requestedtype" class="textfield" />
        <input type="date" name="requesteddate" class="textfield" />
        <button className="button" name="searchbtn" type="submit">
          {' '}
          Search{' '}
        </button>{' '}
        <p />
      </div>

      <div style={{paddingTop: 10}}>
        <Table dataSource={applicationform}>
          <Column title="Application ID" dataIndex="id" key="id" />
          <Column title="First Name" dataIndex="fname" key="firstName" />
          <Column title="Last Name" dataIndex="lname" key="lastName" />
          <Column title="Application Type" dataIndex="applicationtype" key="applicationtype" />
          <Column title="Sub-Category" dataIndex="subcategory" key="subcategory" />
          <Column title="Reason" dataIndex="reason" key="reason" />
          <Column title="Date Submitted" dataIndex="applicationdate" key="applicationdate" />
          <Column title="Status" dataIndex="status" key="status" />
          <Column title="Options" key="id" render={(p) => (
            <>
              <Space split={<Divider type="vertical" />}>
                <Button> Approve </Button>
                <Button> Reject </Button>
              </Space>
            </>
          )} />
        </Table>
      </div>
    </>
  );
};

const ApplicationList = () => {
  return <WebLayout content={Content()} />;
};

export default ApplicationList;
