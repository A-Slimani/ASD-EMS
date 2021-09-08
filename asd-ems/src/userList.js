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

class userList extends React.Component {
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
              <Menu.Item key="6"> Employee Management </Menu.Item>
              <Menu.Item key="6"><Link to="./payrollLog"><button> Payroll Log </button></Link></Menu.Item>
              <Menu.Item key="8"> 
                <Link to="./paymentPolicy"><button> Payment Policy </button></Link>
              </Menu.Item>
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
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item> Employee Manage </Breadcrumb.Item>
              <Breadcrumb.Item> User List </Breadcrumb.Item>
            </Breadcrumb>

                <div style={{textAlign: 'center'}}>
                    <h1 style={{textAlign: 'center'}}> All Employee </h1>                    
                    <input type="number" placeholder="Employee ID" name="requestedid" class="textfield"/>
                    <input type="textfield" placeholder="Employee First Name" name="requestedfn" class="textfield"/>
                    <input type="textfield" placeholder="Employee Last Name" name="requestedln" class="textfield"/>
                    <button className="button" name="searchbtn" type="submit"> Search </button> <p/>
                    <button className="button" name="addnew" type="submit"> Add New Employee </button>
                </div>

                <div>
                    <table className="table">
                        <tr>
                            <th> Employee ID </th>
                            <th> First Name </th>
                            <th> Last Name </th>
                            <th> Department </th>
                            <th> Employment Date </th>
                            <th> Option </th>
                        </tr>

                        <tr>
                            <td> 1 </td>
                            <td> Hello </td>
                            <td> World </td>
                            <td> Human Resource </td>
                            <td> 600 </td>
                            <td> <Link to="#"> View </Link> <br/> <Link to="./UpdateEmployee"> Update </Link> <br/> <Link to="#"> Delete </Link> </td>
                        </tr>
                    </table>
                </div> 
          </Content>

          <Footer style={{ textAlign: 'center' }}> @Copyright 2021 - ASD Group 6  </Footer>
        </Layout>
      </Layout>
    );
    }
}

    export default userList