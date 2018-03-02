import style from './style.scss'
import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Saver from './Saver'
import Helper from './Helper'
import Paper from 'material-ui/Paper'

export default class componentName extends Component {
  componentDidMount = () => {
    let menus = document.getElementsByClassName('menu')
    document.body.addEventListener('click', (e) => {
      console.log('click');
      [...menus].forEach((item) => {
        item.style.display = 'none'
      })
    })
  }

  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <Saver />
          <Paper
            className={style.a4}
            zDepth={2}
            rounded={false}
          >
            {this.props.children}
          </Paper>
          <Helper />
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}
