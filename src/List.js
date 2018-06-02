import React, { Component } from 'react'
import { Collapse } from 'antd'
import PropTypes from 'prop-types'
import './List.css'
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
      const elem =
        <Collapse.Panel header={item.name} key={index}>
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
    const {list} = this.props
    return (
      <div className='list'>
        <Collapse>
          {this.renderList(list)}
        </Collapse>
      </div>
    )
  }
}

List.propTypes = {
  onSwitchRouter: PropTypes.func,
  list: PropTypes.array
}
export default List
