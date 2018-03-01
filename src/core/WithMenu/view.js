import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import style from './style.scss'
import cs from 'classnames'

export default class View extends Component {
  constructor(props) {
    super(props)
    this.state = {
      doesShowMenu: false,
      doesExist: true,
      menuPositon: { x: -1, y: -1 }
    }
  }

  componentWillUnmount = () => {
    console.log('unmount')
  }

  showMenu = (e) => {
    console.log('show')
    this.menu.style.display = 'block'
    // console.log(e.clientX)
    // console.log(e.clientY)
    // this.setState({
    // doesShowMenu: true,
    // menuPositon: {
    //   x: e.clientX,
    //   y: e.clientY
    // }
    // })
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
    this.hideMenu()
  }

  cloneAfter = () => {
    console.log('clone after')
    this.props.insertAfter(this.props.id)
    this.hideMenu()
  }

  render() {
    return (
      this.state.doesExist ?
        <li
          ref={(node) => { this.node = node }}
          onContextMenu={this.showMenu}
          className={style.liWrapper}
          onBlur={this.blur}
        >
          <div
            className={cs({
              menu: true,
              [style.menu]: true,
              [style['menu-show']]: this.state.doesShowMenu
            })}
            ref={(ref) => { this.menu = ref }}
            style={{
              display: 'none'
            }}
          >
            <RaisedButton key="insertBefore" color="primary" onClick={this.cloneBefore} label={'之前插入'} />
            <RaisedButton key="insertAfter" color="primary" onClick={this.cloneAfter} label={'之后插入'} />
            <RaisedButton key="move" color="primary" onClick={this.move} label={'移动'} />
            <RaisedButton key="delete" color="danger" onClick={this.remove} label={'删除'} labelColor={'#fff'} backgroundColor={'#da3849'} />
          </div>
          {this.props.children}
        </li>
        : null
    )
  }
}
