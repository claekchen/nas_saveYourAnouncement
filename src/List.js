import React, { Component } from 'react'
import { Collapse } from 'antd'
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
    this.state = {
    }
  }
  renderList (data) {
    let res = []
    data.map((item, index) => {
        const elem = <Panel header = {item.name} key = {index}>
                        <p>{item.text}</p>
                     </Panel>
        res .push(elem)
    })
    return res
  }
  render () {
    return (
      <div className='list'>
        <Collapse>
            {this.renderList(mock)}
        </Collapse>
      </div>
    )
  }
}

export default List
