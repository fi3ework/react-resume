import React, { Component } from 'react'
import _ from 'lodash'
import style from './style.scss'
import WithMenu from '../WithMenu'


export default class List extends Component {
  static defaultProps = {
    listCount: 3
  }

  constructor(props) {
    super(props)
    this.addItem = this.addItem.bind(this)
    this.moveItem = this.moveItem.bind(this)
    this.removeItem = this.removeItem.bind(this)
    this.state = {
      count: this.props.listCount
    }
  }

  getItems(root) {
    let child = <WithMenu>
      {this.props.children}
    </WithMenu>

    let list = _.fill(Array(this.state.count), <div></div>)
    list = list.map((item, index) => {
      return React.cloneElement(
        item,
        {
          key: index,
          className: style.item
        },
        child
      )
    })
    return list
  }

  addItem() {
    this.setState({
      count: this.state.count + 1
    })
  }

  moveItem() {
    console.log('move')
  }

  removeItem() {
    console.log('removed')
  }

  render() {
    return (
      <div className={style.container}>
        <button onClick={this.addItem}>add</button>
        {
          this.getItems()
        }
      </div>
    )
  }
}
