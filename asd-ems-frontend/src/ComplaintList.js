import { Button, Divider, Space, Table, Input, Select, DatePicker } from 'antd';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WebLayout from './components/WebLayout';
import complaintService from './services/Complaint';

const { Column } = Table;
const { Option } = Select;

const Content = () => {
  const [complaints, setComplaints] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [dateFilter, setDateFilter] = useState('');

  useEffect(() => {
    complaintService.getAll().then(filecomplaint => {
      setComplaints(filecomplaint);
    });
  }, []);

  // filters the values with all the inputs
  const filteredList = () => {
    return complaints.filter(
      c =>
        c.complainttype.match(typeFilter) &&
        c.status.match(statusFilter) &&
        c.complaintdate.match(dateFilter) &&
        (c.fname.toLowerCase().match(nameFilter.toLowerCase()) ||
          c.lname.toLowerCase().match(nameFilter.toLowerCase))
    );
  };

  // updates each input
  const handleChangeType = event => {
    setTypeFilter(event);
  };

  const handleChangeStatus = event => {
    setStatusFilter(event);
  };

  const handleChangeDate = event => {
    console.log(event);
    event !== null ? setDateFilter(event._d.toJSON().substr(0, 9)) : setDateFilter('');
    console.log('date filter: ', dateFilter);
  };

  // Handled solved / pending complaints
  const handleSolved = async e => {
    var option = window.confirm(
      'Do you want to solve complaint with ID ' +
        e.currentTarget.id +
        '? \n\n Select OK to delete or CANCEL action'
    );

    if (option === true) {
      for (let i of complaints) {
        if (e.currentTarget.id === i.id) {
          var concern = Object.assign({}, i);
          concern.status = 'solved';
          await axios.put(
            `http://localhost:3001/filecomplaint/${e.currentTarget.id}`,
            concern
          );
          break;
        }
      }
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
          <Input
            size="large"
            style={{ width: '20%' }}
            placeholder="Name"
            onChange={({ target }) => {
              setNameFilter(target.value);
            }}
          />
          <Select
            id="type"
            placeholder="type"
            size="large"
            style={{ width: '20%' }}
            onChange={handleChangeType}
            allowClear>
            <Option value="general">general</Option>
            <Option value="work">work</Option>
            <Option value="personal">personal</Option>
            <Option value="suggestion">suggestion</Option>
          </Select>
          <DatePicker size="large" onChange={handleChangeDate} />
          <Select
            id="type"
            placeholder="status"
            size="large"
            style={{ width: '20%' }}
            onChange={handleChangeStatus}
            allowClear>
            <Option value="pending">pending</Option>
            <Option value="solved">solved</Option>
          </Select>
        </Input.Group>
        <br />
        <p />
      </div>

      <div style={{ paddingTop: 10 }}>
        <Table dataSource={filteredList()}>
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
