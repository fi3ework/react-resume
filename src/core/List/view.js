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
    console.log(sequence)
    for (let i = 0; i < sequence.length; i++) {
      let currItem
      if (sequence[i] >= 0 &&
        sequence[i] <= React.Children.count(this.props.children) - 1) {
        currItem = <WithMenu
          key={sequence[i]}
          id={sequence[i]}
          removeItem={this.removeItem}
          insertBefore={this.insertBefore}
          insertAfter={this.insertAfter}
        >
          {this.props.children[sequence[i]]}
        </WithMenu>
      } else {
        currItem = <WithMenu
          key={sequence[i]}
          id={sequence[i]}
          removeItem={this.removeItem}
          insertBefore={this.insertBefore}
          insertAfter={this.insertAfter}
        >
          {this.props.children[0]}
        </WithMenu>
      }
      list.push(currItem)
    }
    return list
  }

  insertBefore = (id) => {
    let newIndex = this.state.index + 1
    let newSequence = this.state.idSequence.slice()
    newSequence.splice(newSequence.indexOf(id), 0, newIndex - 1)
    this.setState({
      hasChanged: true,
      index: newIndex,
      idSequence: newSequence
    })
  }

  insertAfter = (id) => {
    let newIndex = this.state.index + 1
    let newSequence = this.state.idSequence.slice()
    newSequence.splice(newSequence.indexOf(id) + 1, 0, newIndex - 1)
    this.setState({
      index: newIndex,
      idSequence: newSequence
    })
  }

  moveItem= () => {
    console.log('move')
  }

  removeItem = (id) => {
    console.log(this.state.idSequence.length)
    if (this.state.idSequence.length === 1) {
      return
    }

    let newSequence = this.state.idSequence.slice()
    newSequence.splice(newSequence.indexOf(id), 1)
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
