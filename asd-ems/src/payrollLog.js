
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import './style.css';
import React from 'react';
import {Link} from "react-router-dom"

const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;

class payrollLog extends React.Component {
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
              <Menu.Item key="4"> <Link to="./addUser"><button> Add User </button> </Link></Menu.Item>
              <Menu.Item key="5"> <Link to="./fileComplaint"><button> File Complaint </button> </Link></Menu.Item>
              <Menu.Item key="7"> <Link to="./application"><button> Application </button> </Link></Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Payroll Manage">
            <Menu.Item key="7"> <Link to="./payrollHistory"><button> Payroll History </button> </Link>  </Menu.Item>
              <Menu.Item key="6"><Link to="./payrollLog"><button> Payroll Log </button></Link></Menu.Item>
              <Menu.Item key="8"> <Link to="./paymentPolicy"><button> Payment Policy </button></Link> </Menu.Item>
            </SubMenu>
            <Menu.Item key="2" icon={<DesktopOutlined />}> 
              <Link to="./discussionBoard"><button> Voice Concern </button> </Link>
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
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item> Payroll Manage </Breadcrumb.Item>
              <Breadcrumb.Item> Payroll Log </Breadcrumb.Item>
            </Breadcrumb>

            <div style={{textAlign: 'center'}}>
              <h1 style={{textAlign: 'center'}}>Payroll Log</h1>
              <input type="number" placeholder="Employee ID" name="requestedid" class="textfield"/>
              <input type="textfield" placeholder="Name" name="requestedfn" class="textfield"/>
              <input type="number" placeholder="Min Salary" name="Min Salary" class="textfield"/>
              <input type="number" placeholder="Max Salary" name="Max Salary" class="textfield"/>
              <button className="button" name="searchbtn" type="submit"> Search </button> <p/>
            </div>

            <table className="table">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Employment Date</th>
                    <th>Department ID</th>
                    <th>Manager</th>
                    <th>Salary</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Bob Rob</td>
                    <td>23/07/2017</td>
                    <td>100</td>
                    <td>Bob Boss</td>
                    <td>50000</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Bob Loss</td>
                    <td>19/09/2015</td>
                    <td>100</td>
                    <td>Bob Boss</td>
                    <td>75000</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Bob Toss</td>
                    <td>19/09/2015</td>
                    <td>200</td>
                    <td>Bob Moss</td>
                    <td>95000</td>
                </tr>
            </table>

          </Content>

          <Footer style={{ textAlign: 'center' }}> @Copyright 2021 - ASD Group 6  </Footer>
        </Layout>
      </Layout>
    );
    }
}

    export default payrollLog;