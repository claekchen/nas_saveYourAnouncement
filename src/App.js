import React, { Component } from 'react'
import Layout from 'antd/lib/layout'
import Menu from 'antd/lib/menu'
import Icon from 'antd/lib/icon'
import Search from './Search'
import Add from './Add'
import List from './List'
import 'antd/lib/menu/style'
import 'antd/lib/layout/style'
import 'antd/lib/icon/style'
import './App.css'
const {Header, Sider, Footer, Content} = Layout
class App extends Component {
  constructor (props) {
    super(props)
    this.renderRouter = this.renderRouter.bind(this)
    this.onSwitchRouter = this.onSwitchRouter.bind(this)
    this.onMenu = this.onMenu.bind(this)
    this.onUpdateList = this.onUpdateList.bind(this)
    this.state = {
      router: 'search',
      list: []
    }
  }
  renderRouter () {
    const {router, list} = this.state
    switch (router) {
      case 'search':
        return <Search onUpdateList={this.onUpdateList} onSwitchRouter={this.onSwitchRouter} />
      case 'add':
        return <Add onSwitchRouter={this.onSwitchRouter} />
      case 'list':
        return <List list={list} onSwitchRouter={this.onSwitchRouter} />
    }
  }
  onSwitchRouter (router) {
    this.setState({router: router})
  }
  onMenu (item) {
    this.onSwitchRouter(item.key)
  }
  onUpdateList (data) {
    this.setState({list: data})
  }
  render () {
    return (
      <div className='App'>
        <Layout>
          <Sider
            breakpoint='lg'
            collapsedWidth='0'
            onCollapse={(collapsed, type) => { console.log(collapsed, type) }}
          >
            <div className='menu-container'>
              <Menu onClick={this.onMenu} theme='dark' mode='inline' defaultSelectedKeys={['4']}>
                <Menu.Item key='search'>
                  <Icon type='user' />
                  <span className='nav-text'>查询公告</span>
                </Menu.Item>
                <Menu.Item key='add'>
                  <Icon type='video-camera' />
                  <span className='nav-text'>添加公告</span>
                </Menu.Item>
              </Menu>
            </div>
          </Sider>
          <Layout>
            <Header className='header-container'>
              <header>
                区块链公告 <small>一经公告，不得删改。</small>
              </header>
            </Header>
            <Content className='content-container'>
              {
                this.renderRouter()
              }
            </Content>
            <Footer className='footer-container'>
              created by Claek in 2018
            </Footer>
          </Layout>
        </Layout>
      </div>
    )
  }
}

export default App
