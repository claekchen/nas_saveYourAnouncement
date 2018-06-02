import React, { Component } from 'react'
import Input from 'antd/lib/input'
import Button from 'antd/lib/button'
import PropTypes from 'prop-types'
import AnouncementContractApi from './ContractApi'
import 'antd/lib/input/style'
import 'antd/lib/button/style'
import './Add.css'
let api = new AnouncementContractApi()

class Add extends Component {
  constructor (props) {
    super(props)
    this.onNameChange = this.onNameChange.bind(this)
    this.onTextChange = this.onTextChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.onSwitchToSearch = this.onSwitchToSearch.bind(this)
    this.state = {
      name: '',
      text: ''
    }
  }
  onNameChange (e) {
    this.setState({name: e.target.value})
  }
  onTextChange (e) {
    this.setState({text: e.target.value})
  }
  onSuccess () {
    window.alert('请在星云链插件中确认交易。')
  }
  onSubmit () {
    const {name, text} = this.state
    if (name === '' || text === '') {
      window.alert('不能提交空的声明！')
    } else {
      api.add(name, text, this.onSuccess)
    }
  }
  onSwitchToSearch () {
    const {onSwitchRouter} = this.props
    onSwitchRouter('search')
  }
  render () {
    return (
      <div className='add'>
        <h1>
          新建公告
        </h1>
        <div className='input-container'>
          <Input.Group size='large'>
            <Input onChange={this.onNameChange} placeholder='姓名' />
            <br />
            <br />
            <br />
            <Input.TextArea className='textarea' autosize={{minRows: 5, maxRows: 25}} onChange={this.onTextChange} placeholder='正文' />
          </Input.Group>
        </div>
        <Button className='button-add' size='large' onClick={this.onSubmit} type='primary'>新建</Button>
      </div>
    )
  }
}

Add.propTypes = {
  onSwitchRouter: PropTypes.func
}
export default Add
