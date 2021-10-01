import { Layout, Menu, Breadcrumb } from 'antd';
import { DesktopOutlined, PieChartOutlined, FileOutlined, TeamOutlined, UserOutlined, CommentOutlined, LoginOutlined, RobotOutlined } from '@ant-design/icons';
import './Dashboard.css';
import React from 'react';
import { Link } from 'react-router-dom';

const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;

const WebLayout = ({ content }) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['menu1']} mode="inline">
          <Menu.Item key="menu1" icon={<PieChartOutlined />}>
            <Link to="./Dashboard"> <button> Home </button>{' '}</Link>
          </Menu.Item>

          <SubMenu key="sub1" icon={<UserOutlined />} title="Employee Manage">
            <Menu.Item key="3">{' '} <Link to="./AddUser"> <button> Add Employee</button>{' '}</Link></Menu.Item>
            <Menu.Item key="2">{' '} <Link to="./UserList"> <button> Employee List </button>{' '}</Link>{' '}</Menu.Item>
          </SubMenu>

          <SubMenu key="sub2" icon={<TeamOutlined />} title="Payroll Manage">
            <Menu.Item key="4"> <Link to="./AddPayroll"> <button> New Payroll </button></Link></Menu.Item>
            <Menu.Item key="5"> <Link to="./PayrollHistory"> <button> Payroll History </button> </Link> </Menu.Item>
            {/* <Menu.Item key="5"> <Link to="./PayrollLog"> <button> Payroll Log </button></Link></Menu.Item> */}
            <Menu.Item key="6">{' '} <Link to="./PaymentPolicy"><button> Payment Policy</button></Link></Menu.Item>
          </SubMenu>

          <SubMenu key="sub3" icon={<FileOutlined />} title="Applications">
            {/* <Menu.Item key="7"> <Link to="Application"> <button> Launch Application </button> </Link></Menu.Item> */}
            <Menu.Item key="8">{' '} <Link to="./ApplicationList"><button> Manage Application </button></Link></Menu.Item>
          </SubMenu>

          <SubMenu key="sub4" icon={<CommentOutlined />} title="Complaints">
            {/* <Menu.Item key="9"> <Link to="./FileComplaint"> <button> File Complaint </button>{' '}</Link> </Menu.Item> */}
            <Menu.Item key="10"> {' '} <Link to="./ComplaintList"> <button> Manage Complaints </button> </Link></Menu.Item>
          </SubMenu>

          <Menu.Item key="menu2" icon={<DesktopOutlined />}>
            <Link to="./ConcernList"> <button> Concern Manage </button>{' '} </Link>
          </Menu.Item>

          <Menu.Item key="menu3" icon={<RobotOutlined />}>
            <Link to="./Personal"> <button> Personal File </button>{' '} </Link>
          </Menu.Item>

          <Menu.Item key="menu4" icon={<LoginOutlined />}>
            <Link to="./Logout"> <button> Logout </button>{' '}</Link>
          </Menu.Item>
        </Menu>
      </Sider>

      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <h1 style={{ color: 'white', textAlign: 'center', fontSize: '20px' }}>
            Employee Management System
          </h1>
        </Header>
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Admin</Breadcrumb.Item>
          </Breadcrumb>
          {content}
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          @Copyright 2021 - ASD Group 6 <br />
          My Duong, Catherine Pe Benito, George Hetrelezis, Reagan Brasch, Abdullah Slimani, Asif Bin Kabir
        </Footer>
      </Layout>
    </Layout>
  );
};

export default WebLayout;
