import { Button, Divider, Space, Table, Input, Select, DatePicker } from 'antd';
import React, { useEffect, useState } from 'react';
import WebLayout from './components/WebLayout';
import applicationService from './services/Application';
import axios from 'axios';
import { Redirect } from 'react-router';

const { Column } = Table;
const { Option } = Select;

const Content = () => {
  const [applicationform, setApplications] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [dateFilter, setDateFilter] = useState('');

  useEffect(() => {
    applicationService.getAll().then(applicationform => {
      setApplications(applicationform);
    });
  }, []);

  // filters the values with all the inputs
  const filteredList = () => {
    return applicationform.filter(
      c =>
        c.applicationtype.match(typeFilter) &&
        c.status.match(statusFilter) &&
        c.applicationdate.match(dateFilter) &&
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

  const handleApprove = async e => {
    var option = window.confirm(
      'Do you want to approve application with ID ' +
        e.currentTarget.id +
        '? \n\n Select OK to delete or CANCEL action'
    );

    if (option === true) {
      for (let i of applicationform) {
        if (e.currentTarget.id === i.id) {
          var concern = Object.assign({}, i);
          concern.status = 'Approved';
          await axios.put(
            `https://asd-ems-db.herokuapp.com/applicationform/${e.currentTarget.id}`,
            concern
          );
          break;
        }
      }
    }
    window.location.reload();
  };

  const handleReject = async e => {
    var option = window.confirm(
      'Do you want to reject application with ID ' +
        e.currentTarget.id +
        '? \n\n Select OK to delete or CANCEL action'
    );

    if (option === true) {
      for (let i of applicationform) {
        if (e.currentTarget.id == i.id) {
          var concern = Object.assign({}, i);
          concern.status = 'Rejected';
          await axios.put(
            `https://asd-ems-db.herokuapp.com/applicationform/${e.currentTarget.id}`,
            concern
          );
          break;
        }
      }
    }
    window.location.reload();
  };

  if (localStorage.getItem('id') !== null) {
    return (
      <>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold' }}>
            {' '}
            All Applications{' '}
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
              placeholder="Application Type"
              size="large"
              style={{ width: '20%' }}
              onChange={handleChangeType}
              allowClear>
              <Option value="Transfer between Department">
                Transfer between Department
              </Option>
              <Option value="Business Claim">Business Claim</Option>
              <Option value="Apply Leave">Apply Leave</Option>
              <Option value="Resignation">Resignation</Option>
              <Option value="Others">Others</Option>
            </Select>

            <DatePicker size="large" onChange={handleChangeDate} />

            <Select
              id="type"
              placeholder="Status"
              size="large"
              style={{ width: '20%' }}
              onChange={handleChangeStatus}
              allowClear>
              <Option value="Pending">Pending</Option>
              <Option value="Approved">Approved</Option>
              <Option value="Rejected">Rejected</Option>
            </Select>
          </Input.Group>
          <br />
          <p />
        </div>

        <div style={{ paddingTop: 10 }}>
          <Table dataSource={filteredList()}>
            <Column title="Application ID" dataIndex="id" key="id" />
            <Column title="First Name" dataIndex="fname" key="firstName" />
            <Column title="Last Name" dataIndex="lname" key="lastName" />
            <Column
              title="Application Type"
              dataIndex="applicationtype"
              key="applicationtype"
            />
            <Column title="Sub-Category" dataIndex="subcategory" key="subcategory" />
            <Column title="Reason" dataIndex="reason" key="reason" />
            <Column
              title="Date Submitted"
              dataIndex="applicationdate"
              key="applicationdate"
            />
            <Column title="Status" dataIndex="status" key="status" />
            <Column
              title="Options"
              key="id"
              render={p => (
                <>
                  <Space split={<Divider type="vertical" />}>
                    <Button id={p.id} onClick={handleApprove}>
                      {' '}
                      Approve{' '}
                    </Button>
                    <Button id={p.id} onClick={handleReject}>
                      {' '}
                      Reject{' '}
                    </Button>
                  </Space>
                </>
              )}
            />
          </Table>
        </div>
      </>
    );
  } else {
    return <Redirect to={{ pathname: '/' }} />;
  }
};

const ApplicationList = () => {
  return <WebLayout content={Content()} />;
};

export default ApplicationList;
