import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  CommentOutlined,
  LoginOutlined,
  RobotOutlined
} from '@ant-design/icons';
import './Dashboard.css';
import React from 'react';
import { Link } from 'react-router-dom';

const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;

const WebLayout = ({ id, content }) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['menu1']} mode="inline">
          <Menu.Item key="menu1" icon={<PieChartOutlined />}>
            <Link to={`/Dashboard/${id}`}> <button> Home </button></Link>
          </Menu.Item>

          <SubMenu key="sub1" icon={<UserOutlined />} title="Employee Manage">
            <Menu.Item key="3"><Link to={`/AddUser/${id}`}> <button> Add Employee</button></Link></Menu.Item>
            <Menu.Item key="2"> <Link to={`/UserList/${id}`}> <button> Employee List </button></Link></Menu.Item>
            <Menu.Item key="4"><Link to={`/Roster/${id}`}> <button> Roster </button></Link></Menu.Item>
          </SubMenu>

          <SubMenu key="sub2" icon={<TeamOutlined />} title="Payroll Manage">
            <Menu.Item key="4"> <Link to={`/AddPayroll/${id}`}> <button> New Payroll </button></Link></Menu.Item>
            <Menu.Item key="5"> <Link to={`/PayrollHistory/${id}`}> <button> Payroll History </button> </Link> </Menu.Item>
            <Menu.Item key="6"> <Link to={`/PaymentPolicy/${id}`}> <button> Payment Policy</button></Link></Menu.Item>
          </SubMenu>

          <Menu.Item key="menu2" icon={<FileOutlined />}>
            <Link to={`/ApplicationList/${id}`}> <button> Manage Application </button></Link>
          </Menu.Item>

          <Menu.Item key="menu3" icon={<CommentOutlined />}>
            <Link to={`/ComplaintList/${id}`}><button> Manage Complaints </button></Link>
          </Menu.Item>

          <Menu.Item key="menu4" icon={<DesktopOutlined />}>
            <Link to={`/ConcernList/${id}`}> <button> Concern Manage </button> </Link>
          </Menu.Item>

          <Menu.Item key="menu5" icon={<RobotOutlined />}>
            <Link to={`/Personal/${id}`}><button> Personal File </button>{' '} </Link>
          </Menu.Item>

          <Menu.Item key="menu6" icon={<LoginOutlined />}>
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
          Misty Duong, Catherine Pe Benito, George Hetrelezis, Reagan Brasch, Abdullah Slimani, Asif Bin Kabir
        </Footer>
      </Layout>
    </Layout>
  );
};

export default WebLayout;
