import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import './Dashboard.css';
import React, { state, onCollapse } from 'react';
import { Link } from 'react-router-dom';

const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;

const WebLayout = ({ content }) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Home
          </Menu.Item>
          <SubMenu key="sub1" icon={<UserOutlined />} title="Employee Manage">
            <Menu.Item key="2">
              {' '}
              <Link to="./UserList">
                <button> Employee List </button>{' '}
              </Link>{' '}
            </Menu.Item>
            <Menu.Item key="3">
              {' '}
              <Link to="./AddUser">
                <button> Add Employee</button>{' '}
              </Link>
            </Menu.Item>
            <Menu.Item key="4">
              {' '}
              <Link to="./FileComplaint">
                <button> File Complaint </button>{' '}
              </Link>
            </Menu.Item>
            <Menu.Item key="5">
              {' '}
              <Link to="./Application">
                <button> Application </button>{' '}
              </Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<UserOutlined />} title="Payroll Manage">
            <Menu.Item key="6"> Employee Management </Menu.Item>
            <Menu.Item key="7">
              <Link to="./PayrollLog">
                <button> Payroll Log </button>
              </Link>
            </Menu.Item>
            <Menu.Item key="8">
              {' '}
              <Link to="./PaymentPolicy">
                <button> PaymentPolicy</button>
              </Link>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="9" icon={<DesktopOutlined />}>
            <Link to="./DiscussionBoard">
              <button> Voice Concern </button>{' '}
            </Link>
          </Menu.Item>
          <Menu.Item key="10" icon={<FileOutlined />}>
            <Link to="./Logout">
              <button> Logout </button>{' '}
            </Link>
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
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          {content}
        </Content>
        <Footer style={{ textAlign: 'center' }}> @Copyright 2021 - ASD Group 6 </Footer>
      </Layout>
    </Layout>
  );
};

export default WebLayout;
