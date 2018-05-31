import React, { Component } from 'react'
import { Input, Button } from 'antd'
import './Search.css'

class Search extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }
  render () {
    return (
      <div className='search'>
        <h3>
          查询公告
        </h3>
        <Input.Group>
          <Input placeholder = "输入姓名，查询此人被记录的所有公告"/>
        </Input.Group>
        <Button type='primary'>查询</Button>
        <Button type='primary'>我想添加一条公告</Button>
      </div>
    )
  }
}

export default Search
