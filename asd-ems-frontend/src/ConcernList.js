import { Button, Divider, Space, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import WebLayout from './components/WebLayout';
import voiceconcernService from "./services/Concern";
import axios from 'axios';
const { Column } = Table;

const Content = () => {
    const [voiceconcern, setConcern] = useState([]);
    const [displayList, setDisplayList] = useState([])

  useEffect(() => {
    voiceconcernService.getAll().then(voiceconcern => {
        setConcern(voiceconcern);
        setDisplayList(voiceconcern);
    })
  }, [])


    const search = function(str) {
        const foundList = []
        for(let i of voiceconcern)  {
            console.log(i.discussdate)
            console.log(str)
            if (i.discussdate == str){
                foundList.push(i);
            }
        }
        return foundList;
    }

    const handleSearch = e => {
        if(e.currentTarget.valueAsDate != null) {
            const dateStr = e.currentTarget.valueAsDate.toLocaleDateString("en-GB")
              .split("/").reverse()
              .join("-");

            const foundList3 = search(dateStr)

            setDisplayList(foundList3)
        }else {
            setDisplayList(voiceconcern)
        }

    }

   //execute delete payroll based on id after select the "delete" button
   const handleDelete = async e => {
       var option = window.confirm("Do you want to resolve the concern with ID " + e.currentTarget.id + "? \n\n Select OK to delete or CANCEL action");

       if (option === true) {
           for (let i of voiceconcern) {
               if(e.currentTarget.id === i.id) {
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
        <h1 style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold', }}> All Employee Concerns </h1>
          <input type="date" name="requesteddate" onChange={handleSearch} class="textfield" />
        <p />
      </div>

      <div style={{ paddingTop: 10 }}>
        <Table dataSource={displayList}>
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
