import { Button, Divider, Space, Table, Input } from 'antd';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WebLayout from './components/WebLayout';
import complaintService from './services/Complaint';
import './css/complaintList.less';

const { Column } = Table;

const Content = () => {
  const [complaints, setComplaints] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  // const [typeFilter, setTypeFilter] = useState('');

  const filterByName =
    nameFilter === ''
      ? complaints
      : complaints.filter(c => c.fname.toLowerCase().match(nameFilter));

  useEffect(() => {
    complaintService.getAll().then(filecomplaint => {
      setComplaints(filecomplaint);
    });
  }, []);

  const handleSolved = async e => {
    var option = window.confirm(
      'Do you want to solve complaint with ID ' +
        e.currentTarget.id +
        '? \n\n Select OK to delete or CANCEL action'
    );

    if (option === true) {
      for (let i of complaints) {
        if (e.currentTarget.id == i.id) {
          var concern = Object.assign({}, i);
          concern.status = 'solved';
          await axios.put(
            `http://localhost:3001/filecomplaint/${e.currentTarget.id}`,
            concern
          );
          break;
        }
      }
      window.location.reload();
    }
  };

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold' }}>
          {' '}
          All File Complaints{' '}
        </h1>
        <br />
        <Input.Group compact>
          <Input size="large" style={{ width: '20%' }} placeholder="Name" />
          <Input size="large" style={{ width: '20%' }} placeholder="Type" />
          <Input size="large" style={{ width: '20%' }} placeholder="Date" />
          <Input size="large" style={{ width: '20%' }} placeholder="Status" />
        </Input.Group>
        <br />
        <p />
      </div>

      <div style={{ paddingTop: 10 }}>
        <Table dataSource={filterByName}>
          <Column title="Complaint ID" dataIndex="id" key="id" />
          <Column title="First Name" dataIndex="fname" key="firstName" />
          <Column title="Last Name" dataIndex="lname" key="lastName" />
          <Column title="Type" dataIndex="complainttype" key="complainttype" />
          <Column
            title="Description"
            dataIndex="complaintdescription"
            key="complaintdescription"
          />
          <Column title="Date Submitted" dataIndex="complaintdate" key="complaintdate" />
          <Column title="Status" dataIndex="status" key="status" />
          <Column
            title="Options"
            key="id"
            render={p => (
              <>
                <Space split={<Divider type="vertical" />}>
                  <Button id={p.id} onClick={handleSolved}>
                    {' '}
                    Solved{' '}
                  </Button>
                </Space>
              </>
            )}
          />
        </Table>
      </div>
    </>
  );
};

const ComplaintList = () => {
  return <WebLayout content={Content()} />;
};

export default ComplaintList;
