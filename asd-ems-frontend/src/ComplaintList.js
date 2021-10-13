import { Button, Divider, Space, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import WebLayout from './components/WebLayout';
import complaintService from "./services/Complaint";
import axios from 'axios';

const { Column } = Table;

const Content = () => {
  const [complaints, setComplaints] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  // const [typeFilter, setTypeFilter] = useState('');

  const filterByName = nameFilter === '' ? complaints : complaints.filter(c => c.fname.toLowerCase().match(nameFilter))

  useEffect(() => {
    complaintService.getAll().then(filecomplaint => {
      setComplaints(filecomplaint)
    })
  }, [])

  const handleSolved = async e => {
    var option = window.confirm("Do you want to solve complaint with ID " + e.currentTarget.id + "? \n\n Select OK to delete or CANCEL action");

    if (option === true) {
      for (let i of complaints) {
        if (e.currentTarget.id == i.id) {
          var concern = Object.assign({}, i);
          concern.status = "solved";
          await axios.put(`http://localhost:3001/filecomplaint/${e.currentTarget.id}`, concern);
          break;
        }
      }
      window.location.reload();
    }
  }

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold', }}> All File Complaints </h1>
        <input type="name" placeholder="Name" name="requestedname" class="textfield" onChange={({ target }) => { setNameFilter(target.value) }} />
        <p />
      </div>

      <div style={{ paddingTop: 10 }}>
        <Table dataSource={filterByName}>
          <Column title="Complaint ID" dataIndex="id" key="id" />
          <Column title="First Name" dataIndex="fname" key="firstName" />
          <Column title="Last Name" dataIndex="lname" key="lastName" />
          <Column title="Type" dataIndex="complainttype" key="complainttype" />
          <Column title="Description" dataIndex="complaintdescription" key="complaintdescription" />
          <Column title="Date Submitted" dataIndex="complaintdate" key="complaintdate" />
          <Column title="Status" dataIndex="status" key="status" />
          <Column title="Options" key="id" render={(p) => (
            <>
              <Space split={<Divider type="vertical" />}>
                <Button id={p.id} onClick={handleSolved}> Solved </Button>
              </Space>
            </>
          )} />
        </Table>
      </div>
    </>
  );
};

const ComplaintList = () => {
  return <WebLayout content={Content()} />;
};

export default ComplaintList;
