import { Button, Divider, Space, Table, Input, Select, DatePicker } from 'antd';
import React, { useEffect, useState } from 'react';
import WebLayout from './components/WebLayout';
import voiceconcernService from "./services/Concern";
import axios from 'axios';
import { useRouteMatch } from 'react-router';

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

  //execute delete payroll based on id after select the "delete" button
  const handleDelete = async e => {
    var option = window.confirm("Do you want to resolve the concern with ID " + e.currentTarget.id + "? \n\n Select OK to delete or CANCEL action");

    if (option === true) {
      for (let i of voiceconcern) {
        if (e.currentTarget.id === i.id) {
          var concern = Object.assign({}, i);
          concern.status = "solved";
          await axios.put(`http://localhost:3001/voiceconcern/${e.currentTarget.id}`, concern);
          break;
        }
      }
      window.location = "./ConcernList"
    }
  }

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold', }}> Employee Concerns </h1>
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

          <DatePicker size="large" onChange={handleChangeDate} />

          <Select
            id="type"
            placeholder="Status"
            size="large"
            style={{ width: '20%' }}
            onChange={handleChangeStatus}
            allowClear>
            <Option value="pending">Pending</Option>
            <Option value="solved">Solved</Option>
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
          <Column title="Goal" dataIndex="achivementgoal" key="achivementgoal" />
          <Column title="Method" dataIndex="methodachievement" key="methodachievement" />
          <Column title="Discuss Date" dataIndex="discussdate" key="discussdate" />
          <Column title="Status" dataIndex="status" key="status" />
          <Column title="Options" key="id" render={(p) => (
            <>
              <Space split={<Divider type="vertical" />}>
                <Button id={p.id} onClick={handleDelete}> Solved</Button>
              </Space>
            </>
          )} />
        </Table>
      </div>
    </>
  );
};

const ConcernList = () => {
  const match = useRouteMatch('/ConcernList/:id');
  return <WebLayout id={match.params.id} content={Content()} />;
};

export default ConcernList;
