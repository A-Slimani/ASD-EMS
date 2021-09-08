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

class discussionBoard extends React.Component {
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
            <Menu.Item key="7"> <Link to="./payrollHistory"><button> Payroll History </button> </Link>  </Menu.Item>
              <Menu.Item key="6"><Link to="./payrollLog"><button> Payroll Log </button></Link></Menu.Item>
              <Menu.Item key="8"> 
                <Link to="./paymentPolicy"><button> Payment Policy </button></Link>
              </Menu.Item>
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
              <Breadcrumb.Item> EMS </Breadcrumb.Item>
              <Breadcrumb.Item> Voice Concern </Breadcrumb.Item>
            </Breadcrumb>
            
            <div>  
                <form method="POST" className="form" name="dicussform">
                    <h1 style={{textAlign: 'center'}}> Voice Concern </h1>
                    <p style={{textAlign: 'center'}}> We are hearing you voice !!! </p>

                    <label> Name: </label> <br/>
                    <input type='text' placeholder="Name can be anonymous" name='anonymous' className="formtextfield"/> <br/> 
                     <p/>

                    <label> Topic: </label> <br/>
                    <input type='text' placeholder=" " name='topic' className="formtextfield"/> <br/> 
                     <p/>

                    <label> Whar are you trying to achieve ? </label> <br/>
                    <textarea type='text' placeholder="Message" name='content' className="formtextfield"/> <br/>
                    <p/>

                    <label> How differently you can do ?: </label> <br/>
                    <textarea type='text' placeholder="Message" name='content' className="formtextfield"/> <br/>
                     <p/>
                    
                    <div style={{textAlign: 'center', paddingTop: 10}}>
                        <Link to="./discussionBoard"> <button className="button" > Post </button> </Link>
                    </div> 
                </form>
            </div>

          </Content>

          <Footer style={{ textAlign: 'center' }}> @Copyright 2021 - ASD Group 6  </Footer>
        </Layout>
      </Layout>
    );
    }
}

    export default discussionBoard