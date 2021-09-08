import { Layout, Menu, Breadcrumb} from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import './style.css';
import React from 'react';
import { Link } from 'react-router-dom';

const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;

class UpdateEmployee extends React.Component {
  state = {
    collapsed: false,
    value: 1,
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  onChange = e => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              <Link to="./Dashboard">
                <button> Home </button>{' '}
              </Link>
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
                  <button> Add User </button>{' '}
                </Link>
              </Menu.Item>
              <Menu.Item key="5">
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
              <Menu.Item key="8"> Payment Policy </Menu.Item>
            </SubMenu>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              <Link to="./discussionBoard">
                <button> Discussion Board </button>{' '}
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
              <Breadcrumb.Item> Employee Manage </Breadcrumb.Item>
              <Breadcrumb.Item> Add New User </Breadcrumb.Item>
            </Breadcrumb>

            <div>
              <form>
                <h1 style={{ textAlign: 'center' }}>
                  {' '}
                  Edit <b>Hello World</b> details
                </h1>
                <label> First Name: </label>
                <small>Up to 255 Characters </small> <p> </p>
                <input
                  type="text"
                  defaultValue="Hello"
                  name="fname"
                  class="formtextfield"
                  required
                />{' '}
                <br />
                <label> Last Name: </label> <small>Up to 255 Characters </small> <p></p>
                <input
                  type="text"
                  defaultValue="World"
                  name="lname"
                  class="formtextfield"
                  required
                />{' '}
                <br />
                <label> Date of Birth: </label>{' '}
                <small> Use the calendar on the right </small> <p />
                <input
                  type="date"
									value="1992-07-02"
                  name="dob"
                  class="formtextfield"
                  required
                />{' '}
                <br />
                <label> Username: </label>
                <small>
                  {' '}
                  After @ must be the system name 'EMS' followed by department initial: HR
                  - Human Resource, OP - Operation, MK - Marketing, FN - Finance{' '}
                </small>{' '}
                <p />
                <input
                  type="email"
                  defaultValue="helloworld@EMSHR"
                  name="username"
                  pattern="[a-z0-9._%+-]+@EMS[A-Z]{2,}$"
                  class="formtextfield"
                  required
                />{' '}
                <br />
                <label> Password: </label>{' '}
                <small> Maximum password length is 16 Characters </small> <p />
                <input
                  type="password"
                  placeholder="Retype Password"
                  maxlength="16"
                  name="pwd"
                  class="formtextfield"
                  required
                />{' '}
                <br />
                <label> Contact Number: </label> <small> Up to 10 digits </small> <p />
                <input
                  type="tel"
                  defaultValue="0404990022"
                  name="phoneno"
                  maxlength="10"
                  class="formtextfield"
                  required
                />{' '}
                <br />
                <label> Address: </label> <small>Up to 255 Characters </small> <p />
                <input
                  type="text"
                  defaultValue="15 Raleway Ave"
                  maxlength="255"
                  name="address"
                  class="formtextfield"
                  required
                />{' '}
                <br />
                <label> Suburb: </label> <small>Up to 255 Characters </small> <p />
                <input
                  type="text"
                  defaultValue="Sydney"
                  maxlength="255"
                  name="suburb"
                  class="formtextfield"
                  required
                />{' '}
                <br />
                <label> State: </label> <small> State code up 3 Character </small> <p />
                <input
                  type="text"
                  defaultValue="NSW"
                  name="state"
                  maxlength="3"
                  class="formtextfield"
                  required
                />{' '}
                <br />
                <label> Post Code: </label> <small> Up 4 Digits </small> <p />
                <input
                  type="text"
                  defaultValue="2000"
                  name="pcode"
                  maxlength="4"
                  class="formtextfield"
                  required
                />{' '}
                <p />
                <label> Employment Type: </label> <p />
                <input type="radio" id="html" name="employtype" value="fulltime" checked/>
                <label for="fulltime"> Full Time </label> <p />
                <input type="radio" id="css" name="employtype" value="parttime" />
                <label for="parttime"> Part Time </label>
                <p />
                <input type="radio" id="javascript" name="employtype" value="casual" />
                <label for="casual"> Casual Worker </label> <p />
                <label> Employment Date: </label>{' '}
                <small> Use the calendar on the right </small> <p />
                <input
                  type="date"
									value="2019-02-02"
                  name="employdate"
                  class="formtextfield"
                  required
                />{' '}
                <p />
                <label> Department: </label> <br />
                <select name="dept" class="formtextfield" required>
                  <option value="HR"> Human Resource </option>
                  <option value="finance"> Finance </option>
                  <option value="marketing"> Marketing </option>
                  <option value="operation"> Operation </option>
                </select>{' '}
                <p />
                <div style={{ textAlign: 'center', paddingTop: 10 }}>
                  <Link to="./userList">
                    {' '}
                    <button className="button"> Update <b>Hello World</b> Profile</button>{' '}
                  </Link>
                </div>
              </form>
            </div>
          </Content>

          <Footer style={{ textAlign: 'center' }}> @Copyright 2021 - ASD Group 6 </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default UpdateEmployee;
