import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  CommentOutlined,
  LoginOutlined,
  RobotOutlined,
} from '@ant-design/icons';
import './Dashboard.css';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const { Header, Footer, Sider, Content } = Layout;

const EmployeeWebLayout = ({ content }) => {
  const history = useHistory();

  const handleLogout = e => {
    localStorage.removeItem('id');
      history.push({
        pathname: `./Logout`,
      });
  };

  return (
    <Layout style={{ minHeight: '100vh' }} name="emplayout">
      <Sider>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['menu1']} mode="inline">
          <Menu.Item key="menu1" icon={<PieChartOutlined />}>
            <Link to={`/EmployeeDashboard`}>
              {' '}
              <button> Home </button>{' '}
            </Link>
          </Menu.Item>

          <Menu.Item key="menu2" icon={<FileOutlined />}>
            <Link to={`/Application`}>
              {' '}
              <button name="applaunch"> Launch Application </button>{' '}
            </Link>
          </Menu.Item>

          <Menu.Item key="menu3" icon={<CommentOutlined />}>
            <Link to={`/FileComplaint`}>
              {' '}
              <button> File Complaint </button>{' '}
            </Link>
          </Menu.Item>

          <Menu.Item key="menu4" icon={<DesktopOutlined />}>
            <Link to={`/discussionBoard`}>
              {' '}
              <button> Voice Concern </button>{' '}
            </Link>
          </Menu.Item>

          <Menu.Item key="menu5" icon={<RobotOutlined />}>
            <Link to={`/EmployeePersonal`}>
              {' '}
              <button> Personal File </button>{' '}
            </Link>
          </Menu.Item>

          <Menu.Item key="menu6" icon={<LoginOutlined />}>
            <button onClick={handleLogout}> Logout </button>
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
            <Breadcrumb.Item>Employee</Breadcrumb.Item>
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

export default EmployeeWebLayout;
