import { Button, Divider, Space, Table, Input, Select, DatePicker } from 'antd';
import React, { useEffect, useState } from 'react';
import WebLayout from './components/WebLayout';
import voiceconcernService from "./services/Concern";
import axios from 'axios';
import { Redirect } from 'react-router';

const { Column } = Table;
const { Option } = Select;

const Content = () => {
  const [voiceconcern, setConcern] = useState([]);

  const [nameFilter, setNameFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [dateFilter, setDateFilter] = useState('');

  // const [displayList, setDisplayList] = useState([])

  useEffect(() => {
    voiceconcernService.getAll().then(voiceconcern => {
      setConcern(voiceconcern);
      // setDisplayList(voiceconcern);
    })
  }, [])

  // filters the values with all the inputs
  const filteredList = () => {
    return voiceconcern.filter(
      c =>
        c.status.match(statusFilter) &&
        c.discussdate.match(dateFilter) &&
        (c.name.toLowerCase().match(nameFilter.toLowerCase()))
    );
  };

  // updates each input
  const handleChangeType = event => {
    setNameFilter(event);
  };

  const handleChangeStatus = event => {
    setStatusFilter(event);
  };

  const handleChangeDate = event => {
    console.log(event);
    event !== null ? setDateFilter(event._d.toJSON().substr(0, 9)) : setDateFilter('');
    console.log('date filter: ', dateFilter);
  };

  //execute function to change the status from "pending" to "solved"
  const handleSolved = async e => {
    var option = window.confirm("Do you want to delete Concern with ID " + e.currentTarget.id + "? \n\n Select OK to delete or CANCEL action");

    if (option === true) {
      for (let i of voiceconcern) {
        if (e.currentTarget.id == i.id) {
          var concern = Object.assign({}, i);
          concern.status = "Solved";
          await axios.put(`https://asd-ems-db.herokuapp.com/voiceconcern/${e.currentTarget.id}`, concern);
          break;
        }
      }
      history.push({
        pathname: `/Dashboard`,
      })
    }
  }

  if (localStorage.getItem("id") !== null) {
    return (
      <>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold', }}> Employee Concerns </h1>
          <br />
          <Input.Group compact>
            <Input
              size="large"
              style={{ width: '20%' }}
              placeholder="First Name"
              onChange={({ target }) => {
                setNameFilter(target.value);
              }}
            />

            <DatePicker size="large" onChange={handleChangeDate} />

            <Select
              id="type"
              placeholder="Status"
              size="large"
              style={{ width: '20%' }}
              onChange={handleChangeStatus}
              allowClear>
              <Option value="Pending">Pending</Option>
              <Option value="Solved">Solved</Option>
            </Select>
          </Input.Group>
          <br />
          <p />
        </div>


        <div style={{ paddingTop: 10 }}>
          <Table dataSource={filteredList()}>
            <Column title="Concern ID" dataIndex="id" key="id" />
            <Column title="Name" dataIndex="name" key="name" />
            <Column title="Topic" dataIndex="topic" key="topic" />
            <Column title="Enquiry/Description" dataIndex="description" key="description" />
            <Column title="Discuss Date" dataIndex="discussdate" key="discussdate" />
            <Column title="Status" dataIndex="status" key="status" />
            <Column title="Options" key="id" render={(p) => (
              <>
                <Space split={<Divider type="vertical" />}>
                  <Button id={p.id} onClick={handleSolved}> Solved</Button>
                </Space>
              </>
            )} />
          </Table>
        </div>
      </>
    );
  } else {
    return <Redirect to={{ pathname: '/' }} />
  }
};

const ConcernList = () => {
  return <WebLayout content={Content()} />;
};

export default ConcernList;
