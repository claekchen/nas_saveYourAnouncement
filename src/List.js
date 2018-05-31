import React, { Component } from 'react'
import { Collapse, Button } from 'antd'
import './Add.css'
const mock = [
    {
        name: '1',
        text: '1231313',
        date: '2018/5/21'
    },
    {
        name: '1',
        text: '1231313',
        date: '2018/5/21'
    },
    {
        name: '1',
        text: '1231313',
        date: '2018/5/21'
    },
    {
        name: '1',
        text: '1231313',
        date: '2018/5/21'
    }
]
class List extends Component {
  constructor (props) {
    super(props)
    this.onSwitchToSearch = this.onSwitchToSearch.bind(this)
    this.state = {
    }
  }
  renderList (data) {
    let res = []
    data.map((item, index) => {
        const elem = <Collapse.Panel header = {item.name} key = {index}>
                        <p>{item.text}</p>
                     </Collapse.Panel>
        res.push(elem)
    })
    return res
  }
  onSwitchToSearch () {
    const {onSwitchRouter} = this.props
    onSwitchRouter('search')
  }
  render () {
    return (
      <div className='list'>
        <Button onClick = {this.onSwitchToSearch} type='primary'>返回查询</Button>
        <Collapse>
            {this.renderList(mock)}
        </Collapse>
      </div>
    )
  }
}

export default List
