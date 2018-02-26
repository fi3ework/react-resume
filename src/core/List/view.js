import React, { Component } from 'react'
import _ from 'lodash'
import style from './style.scss'
import WithMenu from '../WithMenu'


export default class List extends Component {
  constructor(props) {
    super(props)
    let idArr = React.Children.map(this.props.children, (item, index) => {
      return index + 1
    })
    this.state = {
      idSequence: idArr,
      count: React.Children.count(this.props.children)
    }
  }

  renderItems = () => {
    let child =
      <WithMenu
        remove={this.removeItem}
        insertBefore={this.insertBefore}
        insertAfter={this.insertAfter}
      >
        {this.props.children}
      </WithMenu>
    let list = []
    let sequence = this.state.idSequence
    for (let i = 0; i < sequence.length; i++) {
      let currItem = React.cloneElement(
        child,
        {
          key: sequence[i],
          id: sequence[i]
        }
      )
      list.push(currItem)
    }
    return list
  }

  insertBefore = (id) => {
    let newCount = this.state.count + 1
    let newItemIndex = newCount
    let newSequence = this.state.idSequence.slice()
    newSequence.splice(newSequence.indexOf(id), 0, newItemIndex)

    this.setState({
      count: newCount,
      idSequence: newSequence
    })
  }

  insertAfter = (id) => {
    let newCount = this.state.count + 1
    let newItemIndex = newCount
    let newSequence = this.state.idSequence.slice()
    newSequence.splice(newSequence.indexOf(id) + 1, 0, newItemIndex)

    this.setState({
      count: newCount,
      idSequence: newSequence
    })
  }

  moveItem= () => {
    console.log('move')
  }

  removeItem= () => {
    console.log('removed')
  }

  render() {
    return (
      <div className={style.container}>
        {
          this.renderItems()
        }
      </div>
    )
  }
}
