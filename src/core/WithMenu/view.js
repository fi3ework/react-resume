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
    }
  }

  componentWillUnmount = () => {
    console.log('unmount')
  }

  showMenu = (e) => {
    console.log('show')
    this.menu.style.display = 'block'
    this.setState({
      doesShowMenu: true,
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

  moveUp = () => {
    console.log('moveUp')
    this.props.moveUp(this.props.index)
    this.hideMenu()
  }

  moveDown = () => {
    console.log('moveDown')
    this.props.moveDown(this.props.index)
    this.hideMenu()
  }

  remove = () => {
    this.props.removeItem(this.props.index)
  }

  cloneBefore = () => {
    console.log('clone before')
    this.props.insertBefore(this.props.index)
    this.hideMenu()
  }

  cloneAfter = () => {
    console.log('clone after')
    this.props.insertAfter(this.props.index)
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
            <RaisedButton key="insertBefore" color="primary" onClick={this.cloneBefore} label={'➕📍'} />
            <RaisedButton key="insertAfter" color="primary" onClick={this.cloneAfter} label={'📍➕'} />
            <RaisedButton key="moveUp" color="primary" onClick={this.moveUp} label={'🔼'} />
            <RaisedButton key="moveDown" color="primary" onClick={this.moveDown} label={'🔽'} />
            <RaisedButton key="delete" color="danger" onClick={this.remove} label={'❌'} labelColor={'#fff'} backgroundColor={'#da3849'} />
          </div>
          {this.props.children}
        </li>
        : null
    )
  }
}
