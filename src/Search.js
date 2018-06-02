import React, { Component } from 'react'
import { Input, Button } from 'antd'
import PropTypes from 'prop-types'
import './Search.css'
import AnouncementContractApi from './ContractApi'
let api = new AnouncementContractApi()

class Search extends Component {
  constructor (props) {
    super(props)
    this.onNameChange = this.onNameChange.bind(this)
    this.onSearch = this.onSearch.bind(this)
    this.onSwitchToAdd = this.onSwitchToAdd.bind(this)
    this.onSuccess = this.onSuccess.bind(this)
    this.onSwitchToList = this.onSwitchToList.bind(this)
    this.state = {
      name: ''
    }
  }
  onNameChange (e) {
    this.setState({name: e.target.value})
  }
  onSuccess (res) {
    const {onUpdateList} = this.props
    let newList = JSON.parse(res.result)
    onUpdateList(newList)
    this.onSwitchToList()
  }
  onSearch () {
    const {name} = this.state
    if (name === '') {
      window.alert('不能查询空的名字！')
    } else {
      api.getByName(name, this.onSuccess)
    }
  }
  onSwitchToAdd () {
    const {onSwitchRouter} = this.props
    onSwitchRouter('add')
  }
  onSwitchToList () {
    const {onSwitchRouter} = this.props
    onSwitchRouter('list')
  }
  render () {
    return (
      <div className='search'>
        <h1>
          查询公告
        </h1>
        <div className='input-container'>
          <Input.Group size='large'>
            <Input onChange={this.onNameChange} placeholder='输入姓名，查询此人被记录的所有公告' />
          </Input.Group>
        </div>
        <Button className='button-search' size='large' onClick={this.onSearch} type='primary'>查询</Button>
      </div>
    )
  }
}

Search.propTypes = {
  onUpdateList: PropTypes.func,
  onSwitchRouter: PropTypes.func
}
export default Search
