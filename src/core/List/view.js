import React, { Component } from 'react'
import style from './style.scss'
import WithMenu from '../WithMenu'


export default class List extends Component {
  constructor(props) {
    super(props)
    let idArr = React.Children.map(this.props.children, (item, index) => {
      return index
    })
    this.state = {
      idSequence: idArr,
      index: React.Children.count(this.props.children)
    }
  }

  renderChildren = () => {
    let list = []
    let sequence = this.state.idSequence
    for (let i = 0; i < sequence.length; i++) {
      let currItem
      if (sequence[i] >= 0 &&
        sequence[i] <= React.Children.count(this.props.children) - 1) {
        currItem = <WithMenu
          key={sequence[i]}
          index={sequence[i]}
          removeItem={this.removeItem}
          insertBefore={this.insertBefore}
          insertAfter={this.insertAfter}
          moveUp={this.moveUpItem}
          moveDown={this.moveDownItem}
        >
          {this.props.children[sequence[i]]}
        </WithMenu>
      } else {
        currItem = <WithMenu
          key={sequence[i]}
          index={sequence[i]}
          removeItem={this.removeItem}
          insertBefore={this.insertBefore}
          insertAfter={this.insertAfter}
          moveUp={this.moveUpItem}
          moveDown={this.moveDownItem}
        >
          {this.props.children[0]}
        </WithMenu>
      }
      list.push(currItem)
    }
    return list
  }

  insertBefore = (index) => {
    let newIndex = this.state.index + 1
    let newSequence = this.state.idSequence.slice()
    newSequence.splice(newSequence.indexOf(index), 0, newIndex - 1)
    this.setState({
      hasChanged: true,
      index: newIndex,
      idSequence: newSequence
    })
  }

  insertAfter = (index) => {
    let newIndex = this.state.index + 1
    let newSequence = this.state.idSequence.slice()
    newSequence.splice(newSequence.indexOf(index) + 1, 0, newIndex - 1)
    this.setState({
      index: newIndex,
      idSequence: newSequence
    })
  }

  moveItem = () => {
  }

  moveUpItem = (index) => {
    let newSequence = this.state.idSequence.slice()
    let currItemIndex = newSequence.indexOf(index)
    if (currItemIndex === 0) {
      return
    }
    let siblingIndex = newSequence.splice(currItemIndex - 1, 1)
    newSequence.splice(currItemIndex, 0, siblingIndex)
    this.setState({
      idSequence: newSequence
    })
  }

  moveDownItem = (index) => {
    let newSequence = this.state.idSequence.slice()
    let currItemIndex = newSequence.indexOf(index)
    if (currItemIndex === newSequence.length) {
      return
    }
    let siblingIndex = newSequence.splice(currItemIndex + 1, 1)
    newSequence.splice(currItemIndex, 0, siblingIndex)
    this.setState({
      idSequence: newSequence
    })
  }

  removeItem = (index) => {
    if (this.state.idSequence.length === 1) {
      return
    }

    let newSequence = this.state.idSequence.slice()
    newSequence.splice(newSequence.indexOf(index), 1)
    this.setState({
      idSequence: newSequence
    })
  }

  render() {
    return (
      <ul
        className={style.container}
        {...this.props}
      >
        {this.renderChildren()}
      </ul>
    )
  }
}
