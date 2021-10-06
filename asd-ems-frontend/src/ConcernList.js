import { Button, Divider, Space, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import WebLayout from './components/WebLayout';
import voiceconcernService from "./services/Concern";
import axios from 'axios';
const { Column } = Table;

const Content = () => {
  const [voiceconcern, setConcern] = useState([]);

  useEffect(() => {
    voiceconcernService.getAll().then(voiceconcern => {
      setConcern(voiceconcern)
    })
  }, [])

   //execute delete payroll based on id after select the "delete" button
   const handleDelete = e => {
    var option = window.confirm("Do you want to delete Concern with ID " + e.currentTarget.id + "? \n\n Select OK to delete or CANCEL action");
    if (option === true) {
      axios.delete(`http://localhost:3001/voiceconcern${e.currentTarget.id}`);
      window.location = "./ConcernList"
    }
  }

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold', }}> All Employee Concerns </h1>
        <input type="number" placeholder="Concern ID" name="requestedid" class="textfield" />
        <input type="textfield" placeholder="Name" name="requestedfn" class="textfield" />
        <input type="date" name="requesteddate" class="textfield" />
        <button className="button" name="searchbtn" type="submit"> {' '} Search {' '} </button>{' '}
        <p />
      </div>

      <div style={{ paddingTop: 10 }}>
        <Table dataSource={voiceconcern}>
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
  return <WebLayout content={Content()} />;
};

export default ConcernList;
