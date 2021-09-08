import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import './Dashboard.css';
import React from 'react';
import { Link } from 'react-router-dom';

const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;

class Dashboard extends React.Component {
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
              Home
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="Employee Manage">
              <Menu.Item key="3">
                {' '}
                <Link to="./userList">
                  <button> Employee List </button>{' '}
                </Link>{' '}
              </Menu.Item>
              <Menu.Item key="4">
                {' '}
                <Link to="./addUser">
                  <button> Add Employee</button>{' '}
                </Link>
              </Menu.Item>
              <Menu.Item key="6">
                {' '}
                <Link to="./fileComplaint">
                  <button> File Complaint </button>{' '}
                </Link>
              </Menu.Item>
              <Menu.Item key="7">
                {' '}
                <Link to="./application">
                  <button> Application </button>{' '}
                </Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Payroll Manage">
              <Menu.Item key="6"> Employee Management </Menu.Item>
              <Menu.Item key="6">
                <Link to="./payrollLog">
                  <button> Payroll Log </button>
                </Link>
              </Menu.Item>
              <Menu.Item key="8"> Payment Policy </Menu.Item>
            </SubMenu>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              <Link to="./discussionBoard">
                <button> Voice Concern </button>{' '}
              </Link>
            </Menu.Item>
            <Menu.Item key="9" icon={<FileOutlined />}>
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
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}>
              Bill is a cat.
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}> @Copyright 2021 - ASD Group 6 </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Dashboard;
