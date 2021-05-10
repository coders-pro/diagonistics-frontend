import React, { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './screens/home/Home'
import Dashboard from './screens/dashboard/Dashboard'
import { Layout, Menu } from 'antd'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons'
import { LayoutStyle } from './DashboardStyle'

function App() {
  const [collapsed, setCollapsed] = useState(false)

  const { Header, Sider, Content } = Layout;

  const toggle = () => {
    setCollapsed(!collapsed)
  }


  return (
    <LayoutStyle>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              nav 1
              </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              nav 2
              </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              nav 3
              </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            <Router>
              <Route path='/' exact component={Home} />
              <Route path='/dashboard' component={Dashboard} />
            </Router>
          </Content>
        </Layout>
      </Layout>
    </LayoutStyle>
  )
}

export default App;
