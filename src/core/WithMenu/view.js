import React, { Component } from 'react'
import { Button, ButtonGroup } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css'
import style from './style.scss'
import cs from 'classnames'

// let W = class extends Component {
//   render() {
//     console.log(this.props)
//     return (
//       <div>
//         {this.props.children}
//       </div>
//     )
//   }
// }


export default class View extends Component {
  constructor(props) {
    super(props)
    this.state = {
      doesShowMenu: false,
      doesExist: true
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
    console.log('remove')
    this.hideMenu()
    this.setState({
      doesExist: false
    })
  }

  render() {
    return (
      this.state.doesExist ?
        <div
          ref={(node) => { this.node = node }}
          onContextMenu={this.showMenu}
        >
          <div
            className={cs({
              [style.menu]: true,
              [style['menu-show']]: this.state.doesShowMenu
            })}>
            <ButtonGroup>
              <Button color="primary" onClick={this.move} >移动</Button>
              <Button color="primary" onClick={this.remove} >删除</Button>
            </ButtonGroup>
          </div>
          {/* <W onBlur={this.hideMenu}> */}
          {this.props.children}
          {/* </W> */}
        </div>
        : null
    )
  }
}
