import React from 'react'
import { Layout, Menu } from 'antd';
import {Link} from 'react-router-dom'

const { Header } = Layout;


export default function Navbar() {
  return (
    <div>
     <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1"><Link to="/signup">Signup</Link></Menu.Item>
          <Menu.Item key="2"><Link to="/login">Login</Link></Menu.Item>
        </Menu>
        </Header>
      </Layout>
    </div>
  )
}
