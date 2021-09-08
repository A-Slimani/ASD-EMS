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

class paymentPolicy extends React.Component {
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
              <Menu.Item key="5"> <Link to="./updateUser"><button> Update User </button> </Link></Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Payroll Manage">
              <Menu.Item key="6"> Employee Management </Menu.Item>
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
              <Breadcrumb.Item> EMS </Breadcrumb.Item>
              <Breadcrumb.Item> Discussion Board </Breadcrumb.Item>
            </Breadcrumb>
            
            <div>  
                    <h1 style={{fontSize: '30px', textAlign: 'center'}}> <b>Payment Policy</b> </h1>
                    <p style={{fontSize: '20px', paddingLeft:'45px', paddingTop: '50px', textAlign: 'left'}}> Enterprise Management Systems reflects that by purchasing our Employee Management System, you will be agreeing to the following terms and conditions:  
                      <li style={{paddingLeft: '20px'}}>Any refunds required are to be completed within 20 business days, in which you will no longer have access to the Employee Management System, its database, or the Enterprise Systems Management servers.</li>
                      <li style={{paddingLeft: '20px'}}>Issues pertaining to the initial installation of the Employee Management System are to be brought up with the Enterprise Management Systems Admin (Human Resources) team, and may not be used to confirm a refund within the 20 business day period.</li>
                    </p>
                    <p style={{fontSize: '20px', paddingLeft:'45px', paddingTop: '50px', textAlign: 'left'}}> Enterprise Management Systems also reflects that by using our Employee Management System, you will be agreeing to the following terms and conditions:  
                      <li style={{paddingLeft: '20px'}}>Enterprise Management Systems reserves the right to not be held responsible for loss of information, both pertaining to and not pertaining to payment information from the use of the Employment Management System.</li>
                      <li style={{paddingLeft: '20px'}}>That any issues regarding payments is to go directly to the Admin (Human Resources) team to ensure the issue is dealt with correctly. </li>
                      <li style={{paddingLeft: '20px'}}>That delays in payment are to be sent to the Enterprise Management Systems Admin (Human Resources) team within 5 business days.</li>
                      <li style={{paddingLeft: '20px'}}>That you accept and comply with the respective jurisdiction for any, and all disputes that may arise and relate to Enterprise Management Systems.</li>
                      <li style={{paddingLeft: '20px'}}>That you accept that Enterprise Management Systems reserves the right to change/update company policies and regulations. </li>
                      <p><br></br><i>Many thanks,</i><br></br> 
                                    Martin Lym <br></br>
                                               <br></br>
                                    Human Resources Manager <br></br>
                                    <b>Enterprise Management Systems</b></p>
                    </p>

            </div>

          </Content>

          <Footer style={{ textAlign: 'center' }}> @Copyright 2021 - ASD Group 6  </Footer>
        </Layout>
      </Layout>
    );
    }
}

    export default paymentPolicy