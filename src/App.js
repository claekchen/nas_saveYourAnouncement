import React, { Component } from 'react'
import Search from './Search'
import Add from './Add'
import List from './List'
import './App.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.renderRouter = this.renderRouter.bind(this)
    this.state = {
      router: 'search'
    }
  }
  renderRouter () {
    const {router} = this.state
    switch (router) {
      case 'search':
        return <Search />
      case 'add':
        return <Add />
      case 'list':
        return <List />
    }
  }
  render () {
    return (
      <div className='App'>
        <header>
          区块链公告 <small>一经公告，不得删改。</small>
        </header>
        {
          this.renderRouter()
        }
      </div>
    )
  }
}

export default App
