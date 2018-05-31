import React, { Component } from 'react'
import { Input, Button } from 'antd'
import './Add.css'

class Add extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }
  render () {
    return (
      <div className='add'>
        <h3>
          新建公告
        </h3>
        <Input.Group>
          <Input placeholder='姓名' />
          <Input.TextArea placeholder='正文' />
        </Input.Group>
        <Button type='primary'>确定</Button>
        <Button type='primary'>返回查询</Button>
      </div>
    )
  }
}

export default Add
