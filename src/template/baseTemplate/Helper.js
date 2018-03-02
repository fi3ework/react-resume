import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import style from './style.scss'
import FontIcon from 'material-ui/FontIcon'

const paperStyle = {
  width: 1240,
  margin: '0 auto',
  textAlign: 'center',
  display: 'inline-block',
  padding: '30px 30px 30px 30px',
  color: '#aaa',
  fontSize: '20px'
}

export default class componentName extends Component {
  render() {
    return (
      <div className={style.helperWrapper}>
        <Paper style={paperStyle} zDepth={2} rounded={false} >
          <FontIcon className="fa fa-mouse-pointer" style={{ fontSize: '20px', color: '#aaa', marginRight: 10 }} />
          Right click on a list item to add/remove/reorder items.
        </Paper>
      </div>
    )
  }
}
