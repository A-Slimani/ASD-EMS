import { Table, Input, DatePicker } from 'antd';
import React, { useEffect, useState } from 'react';
import WebLayout from './components/WebLayout';
import rosterService from "./services/Roster";
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

//Ensures table is able to be referenced as a Const throughout the file
const { Column } = Table;

//Creates const for all content throughout file. Const uses state to ensure all relevant roster are shown
const Content = (event) => {
  const [roster, setRoster] = useState([]);
  const [lnameFilter, setLNameFilter] = useState('');
  const [fnameFilter, setFNameFilter] = useState('');
  const [dateFilter, setDateFilter] = useState('');

  //Gets all roster from const and ensures all getter and setter functionalities are in places
  useEffect(() => {
    rosterService.getAll().then(roster => {
      setRoster(roster)
    })
  }, [])

  const filteredList = () => {
    return roster.filter(
      c =>
        c.rosterdate.match(dateFilter) &&
        c.fname.toLowerCase().match(fnameFilter.toLowerCase()) &&
        c.lname.toLowerCase().match(lnameFilter.toLowerCase())
    );
  };

  // updates each input
  const handleChangeFName = event => {
    setFNameFilter(event);
  };

  const handleChangeLName = event => {
    setLNameFilter(event);
  };

  const handleChangeDate = event => {
    console.log(event);
    event !== null ? setDateFilter(event._d.toJSON().substr(0, 9)) : setDateFilter('');
    console.log('date filter: ', dateFilter);
  };

  //Returns all content within the page, such as all relevant divs which are placed to guarantee the page's
  //format appears as planned
  if (localStorage.getItem("id") !== null) {
    return (
      <>
        <div style={{ textAlign: 'center', paddingBottom: '30px' }}>
          <h1 style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold', }}> Employee Roster </h1>

          <div style={{ paddingTop: 15 }}>
            <Input.Group compact>
              <Input
                size="large"
                style={{ width: '20%' }}
                placeholder="First Name"
                onChange={({ target }) => {
                  setFNameFilter(target.value);
                }}
              />
              <Input
                size="large"
                style={{ width: '20%' }}
                placeholder="Last Name"
                onChange={({ target }) => {
                  setLNameFilter(target.value);
                }}
              />
              <DatePicker size="large" onChange={handleChangeDate} />
            </Input.Group>
          </div>

          <div style={{ paddingTop: 15 }}>
            <Link to="./AddRoster"> <button className="button"> Add New Roster </button></Link>
          </div>
        </div>

        {/* Contains table with current roster information */}
        <Table dataSource={filteredList()}>
          <Column title="First Name" dataIndex="fname" key="firstName" />
          <Column title="Last Name" dataIndex="lname" key="lastName" />
          <Column title="Rostered Dates (dd/mm/yyyy)" dataIndex="rosterdate" key="rosterdate" />
        </Table>
      </>
    );
  } else {
    return <Redirect to={{ pathname: '/' }} />
  }
};

//Displays uniform Staff navigation bar
const Roster = () => {
  return <WebLayout content={Content()} />;
};

export default Roster;
