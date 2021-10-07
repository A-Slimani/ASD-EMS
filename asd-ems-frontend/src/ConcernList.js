import { Button, Divider, Space, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import WebLayout from './components/WebLayout';
import voiceconcernService from "./services/Concern";
import axios from 'axios';
const { Column } = Table;

const Content = () => {
    const [voiceconcern, setConcern] = useState([]);
    const [displayList, setDisplayList] = useState([])
    const [idSearchParam, setIdSearchParam] = useState("")
    const [nameSearchParam, setNameSearchParam] = useState("")
    const [dateSearchParam, setDateSearchParam] = useState("")

  useEffect(() => {
    voiceconcernService.getAll().then(voiceconcern => {
        setConcern(voiceconcern);
        setDisplayList(voiceconcern);
    })
  }, [])


    const search = function(str, field) {
        const foundList = []
        if (field == "date") {
            for(let i of voiceconcern)  {
                if (i.discussdate == str){
                    foundList.push(i);
                }
           }
        }else if (field == "name") {
            for(let i of voiceconcern)  {
                if (i.name == str){
                    foundList.push(i);
                }
           }
        }else if (field == "id") {
            for(let i of voiceconcern)  {
                if (i.id == str){
                    foundList.push(i);
                }
           }
        }
        return foundList;
    }

    const handleSearch = e => {
        if (idSearchParam == "" && nameSearchParam == "" && dateSearchParam == "") {
            setDisplayList(voiceconcern);
        }
        const foundList1 =  search(idSearchParam, "id");
        const foundList2 = search(nameSearchParam, "name");
        const foundList3 = search(dateSearchParam, "date")

        // concatenate sets
        const union = function (setA, setB) {
            let _union = new Set(setA)
            for (let elem of setB) {
                _union.add(elem)
            }
            return _union
        }

        let set1 = union(new Set(foundList1), new Set(foundList2));
        let set2 = union(set1, new Set(foundList3));

        setDisplayList(Array.from(set2))
    }

    const searchInput = e => {
        if (e.currentTarget.name = "requestedid") {
            setIdSearchParam(e.currentTarget.value);
        }else {
            setNameSearchParam(e.currentTarget.value);
        }
    }

   //execute delete payroll based on id after select the "delete" button
   const handleDelete = async e => {
       var option = window.confirm("Do you want to delete Concern with ID " + e.currentTarget.id + "? \n\n Select OK to delete or CANCEL action");

       if (option === true) {
           for (let i of voiceconcern) {
               if(e.currentTarget.id == i.id) {
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
          <input type="number" placeholder="Concern ID" onChange={searchInput} name="requestedid" class="textfield" />
          <input type="textfield" placeholder="Name" onChange={searchInput} name="requestedfn" class="textfield" />
          <input type="date" name="requesteddate" onChange={searchInput} class="textfield" />
          <button className="button" name="searchbtn" onClick={handleSearch}> {' '} Search {' '} </button>
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
