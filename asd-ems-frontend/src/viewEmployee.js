import { Button, Divider, Space, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import WebLayout from './components/WebLayout';
import employeeService from "./services/Employee";

const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;

class addUser extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
                <Link to="./Dashboard"><button> Home </button> </Link>
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="Employee Manage">
              <Menu.Item key="3"> <Link to="./userList"><button> Employee List </button> </Link> </Menu.Item>
              <Menu.Item key="8"> <Link to="./viewEmployee"><button> View Employee </button> </Link></Menu.Item>
              <Menu.Item key="4"> <Link to="./addUser"><button> Add User </button> </Link></Menu.Item>
              <Menu.Item key="5"> <Link to="./fileComplaint"><button> File Complaint </button> </Link></Menu.Item>
              <Menu.Item key="7"> <Link to="./application"><button> Application </button> </Link></Menu.Item>
              <Menu.Item key="11"> <Link to="./voiceConcern"><button> Voice Concern </button> </Link></Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Payroll Manage">
              <Menu.Item key="6"> Employee Management </Menu.Item>
              <Menu.Item key="8"> Payment Policy </Menu.Item>
            </SubMenu>
            <Menu.Item key="2" icon={<DesktopOutlined />}> 
              <Link to="./discussionBoard"><button> Discussion Board </button> </Link>
            </Menu.Item>
            <Menu.Item key="9" icon={<FileOutlined />}> 
              <Link to="./Logout"><button> Logout </button> </Link> 
            </Menu.Item>
          </Menu>
        </Sider>
        
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            <h1 style={{ color: 'white', textAlign: 'center', fontSize :"20px" }}>Employee Management System</h1>
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <div>
                    <h1 style={{textAlign: 'center', fontStyle: 'bold'}}> View Employee </h1>
                    
                    <div style={{textAlign: 'center'}}>
                        <label> Name: </label>
                        <small> John Doe </small>
                        <br></br>
                        
                        <label> Working Days: </label>
                        <small> Monday,  </small>
                        <small> Tuesday </small>
                        <br></br>

                        <label> Pay: </label>
                        <small> 120000 </small>
                        <br></br>

                        <label> Status: </label>
                        <small> Active </small>

                    </div>
   
            </div>

          </Content>

          <Footer style={{ textAlign: 'center' }}> @Copyright 2021 - ASD Group 6  </Footer>
        </Layout>
      </Layout>
    );
    }
}

    export default addUser