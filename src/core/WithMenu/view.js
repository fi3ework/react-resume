import React, { Component } from 'react'
import { Button, ButtonGroup } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css'
import style from './style.scss'
import cs from 'classnames'

export default class View extends Component {
  constructor(props) {
    super(props)
    this.state = {
      doesShowMenu: false,
      doesExist: true,
      toRender: this.props.children
    }
  }

  componentWillUnmount = () => {
    console.log('unmount')
  }

  showMenu = (e) => {
    console.log('show')
    this.setState({
      doesShowMenu: true
    })
  }

  hideMenu = (e) => {
    console.log('hide')
    this.setState({
      doesShowMenu: false
    })
  }

  move = () => {
    console.log('move')
    this.hideMenu()
  }

  remove = () => {
    this.props.removeItem(this.props.id)
  }

  cloneBefore = () => {
    console.log('clone before')
    this.props.insertBefore(this.props.id)
  }

  cloneAfter = () => {
    console.log('clone after')
    this.props.insertAfter(this.props.id)
  }

  render() {
    return (
      this.state.doesExist ?
        <li
          ref={(node) => { this.node = node }}
          onContextMenu={this.showMenu}
          className={style.liWrapper}
        >
          <div
            className={cs({
              [style.menu]: true,
              [style['menu-show']]: this.state.doesShowMenu
            })}>
            <ButtonGroup>
              <Button color="primary" onClick={this.cloneBefore} >之前插入</Button>
              <Button color="primary" onClick={this.cloneAfter} >之后插入</Button>
              <Button color="primary" onClick={this.move} >移动</Button>
              <Button color="danger" onClick={this.remove} >删除</Button>
            </ButtonGroup>
          </div>
          {this.state.toRender}
        </li>
        : null
    )
  }
}
