import { InputRightAddon } from '@chakra-ui/input';
import { Button, Divider, Space, Table, Input, DatePicker } from 'antd';
import React, { useEffect, useState } from 'react';
import WebLayout from './components/WebLayout';
import complaintService from './services/Complaint';

const { Column } = Table;

const Content = () => {
  const [complaints, setComplaints] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [dateFilter, setDateFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  const filterByName =
    nameFilter === ''
      ? complaints
      : complaints.filter(c => c.fname.toLowerCase().match(nameFilter));

  const filteredComplaints =
    nameFilter === ''
      ? complaints
      : complaints.filter(complaint => {
          complaint.fname.toLowerCase().match(nameFilter) &&
            complaint.type.match(typeFilter) &&
            complaint.type.match(dateFilter) &&
            complaint.type.match(statusFilter);
        });

  useEffect(() => {
    complaintService.getAll().then(filecomplaint => {
      setComplaints(filecomplaint);
    });
  }, []);

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold' }}>
          {' '}
          All File Complaints{' '}
        </h1>
        <br />
        <Input.Group compact>
          <Input size="large" style={{ width: '20%' }} placeholder="Name" bordered={false}/>
          <Input size="large" style={{ width: '20%' }} placeholder="Type" bordered={false}/>
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
                  <Button> Solved </Button>
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
