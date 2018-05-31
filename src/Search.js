import React, { Component } from 'react'
import { Input, Button } from 'antd'
import './Search.css'

class Search extends Component {
  constructor (props) {
    super(props)
    this.onNameChange = this.onNameChange.bind(this)
    this.onSearch = this.onSearch.bind(this)
    this.onSwitchToAdd = this.onSwitchToAdd.bind(this)
    this.state = {
      name: ""
    }
  }
  onNameChange (e) {
    this.setState({name: e.target.value})
  }
  onSearch () {
    const {name} = this.state
    if (name === "") {
      alert('不能查询空的名字！')
    } else {
      alert('yes')
    }
  }
  onSwitchToAdd () {
    const {onSwitchRouter} = this.props
    onSwitchRouter('add')
  }
  render () {
    return (
      <div className='search'>
        <h3>
          查询公告
        </h3>
        <Input.Group>
          <Input onChange = {this.onNameChange} placeholder = "输入姓名，查询此人被记录的所有公告"/>
        </Input.Group>
        <Button onClick = {this.onSearch} type='primary'>查询</Button>
        <Button onClick = {this.onSwitchToAdd} type='primary'>我想添加一条公告</Button>
      </div>
    )
  }
}

export default Search
