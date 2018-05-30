import React, { Component } from 'react'
import Search from './Search'
import Add from './Add'
import './App.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }
  render () {
    return (
      <div className='App'>
        <header>
          区块链公告 <small>一经公告，不得删改。</small>
        </header>
        <Search />
      </div>
    )
  }
}

export default App
