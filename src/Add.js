import React, { Component } from 'react'
import { Input, Button } from 'antd'
import './Add.css'

class Add extends Component {
  constructor (props) {
    super(props)
    this.onNameChange = this.onNameChange.bind(this)
    this.onTextChange = this.onTextChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.onSwitchToSearch = this.onSwitchToSearch.bind(this)
    this.state = {
      name: "",
      text: ""
    }
  }
  onNameChange (e) {
    this.setState({name: e.target.value})
  }
  onTextChange (e) {
    this.setState({text: e.target.value})
  }
  onSubmit () {
    const {onSwitchRouter} = this.props
    const {name, text} = this.state
    if (name === "" || text === "") {
      alert("不能提交空的声明！")
    } else {
      onSwitchRouter('list')
    }
  }
  onSwitchToSearch () {
    const {onSwitchRouter} = this.props
    onSwitchRouter('search')
  }
  render () {
    return (
      <div className='add'>
        <h3>
          新建公告
        </h3>
        <Input.Group>
          <Input onChange = {this.onNameChange} placeholder='姓名' />
          <Input.TextArea onChange = {this.onTextChange} placeholder='正文' />
        </Input.Group>
        <Button onClick = {this.onSubmit} type='primary'>确定</Button>
        <Button onClick = {this.onSwitchToSearch} type='primary'>返回查询</Button>
      </div>
    )
  }
}

export default Add
