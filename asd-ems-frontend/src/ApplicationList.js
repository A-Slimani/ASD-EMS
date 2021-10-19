import { Button, Divider, Space, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import WebLayout from './components/WebLayout';
import applicationService from "./services/Application";
import axios from 'axios';

const { Column } = Table;

const Content = () => {
  const [applicationform, setApplications] = useState([]);
  const [formTypeFilter, setFormTypeFilter] = useState('');

  useEffect(() => {
    applicationService.getAll().then(applicationform => {
      setApplications(applicationform)
    })
  }, [])

  const filterByType = formTypeFilter === '' ? applicationform : applicationform.filter(c => c.applicationtype.toLowerCase().match(formTypeFilter.toLowerCase()));

  const handleApprove = async e => {
    var option = window.confirm("Do you want to approve application with ID " + e.currentTarget.id + "? \n\n Select OK to delete or CANCEL action");

    if (option === true) {
      for (let i of applicationform) {
        if (e.currentTarget.id === i.id) {
          var concern = Object.assign({}, i);
          concern.status = "approved";
          await axios.put(`http://localhost:3001/applicationform/${e.currentTarget.id}`, concern);
          break;
        }
      }
      window.location.reload();
    }
  }

  const handleReject = async e => {
    var option = window.confirm("Do you want to reject application with ID " + e.currentTarget.id + "? \n\n Select OK to delete or CANCEL action");

    if (option === true) {
      for (let i of applicationform) {
        if (e.currentTarget.id == i.id) {
          var concern = Object.assign({}, i);
          concern.status = "rejected";
          await axios.put(`http://localhost:3001/applicationform/${e.currentTarget.id}`, concern);
          break;
        }
      }
      window.location.reload();
    }
  }

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold', }}> All Applications </h1>
        <input type="textfield" placeholder="Application Type" name="requestedtype" class="textfield" onChange={({ target }) => { setFormTypeFilter(target.value) }} />
        <p />
      </div>

      <div style={{ paddingTop: 10 }}>
        <Table dataSource={filterByType}>
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
                <Button id={p.id} onClick={handleApprove}> Approve </Button>
                <Button id={p.id} onClick={handleReject}> Reject </Button>
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
